export type ProductSet = {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
  composition: string;
  amazonUrl: string;
};

export type ProductFeature = {
  text: string;
  badge?: string;
};
