import { Blog } from "../types/blog";

const SPACE_ID = 'qpoyn7haps0t';
const ACCESS_TOKEN = '_R9BOpOvC4cN_MGJb3ohY6tQowHI7BHQkWFza4N15w4';
const BASE_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master`;

interface Asset {
  sys: { id: string };
  fields: { file: { url: string } };
}

interface BlogItemFields {
  title: string;
  category: string;
  author: string;
  date: string;
  content: string;
  image?: { sys: { id: string } };
}

interface BlogItem {
  sys: { id: string };
  fields: BlogItemFields;
}

export async function fetchBlogs(): Promise<Blog[]> {
  try {
    const entriesResponse = await fetch(
      `${BASE_URL}/entries?access_token=${ACCESS_TOKEN}&content_type=author`,
      { next: { revalidate: 3600 } } // Revalidate every hour
    );
    const entriesData = await entriesResponse.json();

    // Create a map of asset IDs to their URLs
    const assetMap = new Map<string, string>();
    if (entriesData.includes?.Asset) {
      entriesData.includes.Asset.forEach((asset: Asset) => {
        assetMap.set(asset.sys.id, asset.fields.file.url);
      });
    }

    const blogs = entriesData.items.map((item: BlogItem) => {
      // Get the asset ID from the image reference
      const imageAssetId = item.fields.image?.sys?.id;
      // Get the image URL from the asset map
      const imageUrl = imageAssetId ? assetMap.get(imageAssetId) : null;

      return {
        id: item.sys.id,
        title: item.fields.title,
        category: item.fields.category,
        author: item.fields.author,
        date: item.fields.date,
        content: item.fields.content,
        // Construct the full image URL
        image: imageUrl ? `https:${imageUrl}` : "/placeholder-image.jpg",
      };
    });

    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export async function fetchBlogById(id: string): Promise<Blog | null> {
  try {
    // Fetch specific blog entry
    const entryResponse = await fetch(
      `${BASE_URL}/entries/${id}?access_token=${ACCESS_TOKEN}`,
      { next: { revalidate: 3600 } }
    );
    const entryData = await entryResponse.json();

    // Fetch associated image asset
    const assetResponse = await fetch(
      `${BASE_URL}/assets/${entryData.fields.image.sys.id}?access_token=${ACCESS_TOKEN}`,
      { next: { revalidate: 3600 } }
    );
    const assetData = await assetResponse.json();

    return {
      id: entryData.sys.id,
      title: entryData.fields.title,
      category: entryData.fields.category,
      author: entryData.fields.author,
      date: entryData.fields.date,
      content: entryData.fields.content,
      image: `https:${assetData.fields.file.url}`
    };
  } catch (error) {
    console.error('Error fetching blog detail:', error);
    return null;
  }
}