interface Category {
  name: string;
  id: string;
  subCategories: SubCategory[];
  gender: string;
}

interface SubCategory {
  name: string;
  id: string;
}
