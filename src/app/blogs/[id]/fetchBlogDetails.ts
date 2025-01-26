import { Blog } from "../../../types/blog";

interface Asset {
  sys: {
    id: string;
  };
  fields: {
    file: {
      url: string;
    };
  };
}

interface ItemFields {
  image?: { sys: { id: string } };
  title: string;
  category: string;
  author: string;
  date: string;
  content: string;
}

interface Item {
  sys: { id: string };
  fields: ItemFields;
}

export async function fetchBlogDetails(blogId: string): Promise<Blog> {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/qpoyn7haps0t/environments/master/entries/${blogId}?access_token=_R9BOpOvC4cN_MGJb3ohY6tQowHI7BHQkWFza4N15w4&content_type=author`
  );
  const data = await response.json();

  const assetMap = new Map();
  if (data.includes?.Asset) {
    data.includes.Asset.forEach((asset: Asset) => {
      assetMap.set(asset.sys.id, asset.fields.file.url);
    });
  }

  const item = data.items[0] || data;
  const imageAssetId = item.fields.image?.sys?.id;
  const imageUrl = imageAssetId ? assetMap.get(imageAssetId) : null;

  return {
    id: item.sys.id,
    title: item.fields.title,
    category: item.fields.category,
    author: item.fields.author,
    date: item.fields.date,
    content: item.fields.content,
    image: imageUrl ? `https:${imageUrl}` : "/placeholder-image.jpg",
  };
}

export async function generateStaticParams() {
  const response = await fetch(
    "https://cdn.contentful.com/spaces/qpoyn7haps0t/environments/master/entries?access_token=_R9BOpOvC4cN_MGJb3ohY6tQowHI7BHQkWFza4N15w4&content_type=author"
  );
  const data = await response.json();

  return data.items.map((item: Item) => ({
    id: item.sys.id,
  }));
}