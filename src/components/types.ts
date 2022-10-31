type Speaker = {
  url: string | undefined;
  location: string;
  image: string;
  name: string;
  position: string;
  company: string;
  languages: string[];
  social: {
    twitter?: string;
    github: string;
    linkedin?: string;
    website?: string;
  };
};

type SpeakerFull = {
  location: string;
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

export type { Speaker, SpeakerFull };
