export type Image = {
  mobile: string;
  tablet: string;
  desktop: string;
};

type IncludeItem = {
  quantity: number;
  item: string;
};

type Gallery = {
  first: Image;
  second: Image;
  third: Image;
};

type OtherProduct = {
  slug: string;
  name: string;
  image: Image;
};

export type Product = {
  id: number;
  slug: string;
  name: string;
  image: Image;
  category: string;
  categoryImage: Image;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludeItem[];
  gallery: Gallery;
  others: OtherProduct[];
};
