export interface SubCompany {
    id: number;
    name: string;
    image: string;
    link: string;
    description: string;
  }

  export interface Industry {
    id: number;
    name: string;
    subCompanies: SubCompany[];
  }