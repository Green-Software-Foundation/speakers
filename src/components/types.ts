type Speaker = {
  url: string | undefined;
  location: string;
  image: string;
  name: string;
  position: string;
  company: string;
  social: {
    twitter?: string;
    github: string;
    linkedin?: string;
    website?: string;
  };
};

export type { Speaker };
