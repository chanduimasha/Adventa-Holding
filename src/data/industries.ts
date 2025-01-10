import { Industry } from "@/types/industry";

export const industries: Industry[] = [
    {
      id: 1,
      name: "Technology",
      subCompanies: [
        {
          id: 1,
          name: "Auxano",
          image: "/assets/subcompanies/Auxano.png",
          link: "/subsidiaries/auxano",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        },
        {
          id: 2,
          name: "NetworkStore",
          image: "/assets/subcompanies/Networkstore.png",
          link: "/subsidiaries/networkstore",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        },
      ],
    },
    {
      id: 2,
      name: "Manufacture",
      subCompanies: [
        {
          id: 3,
          name: "Eco Lanka",
          image: "/assets/subcompanies/ECOLANKA.png",
          link: "/subsidiaries/ecolanka",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        },
        {
          id: 4,
          name: "Sarodha",
          image: "/assets/subcompanies/Sarodha.png",
          link: "/subsidiaries/saroda",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        },
      ],
    },
  ];