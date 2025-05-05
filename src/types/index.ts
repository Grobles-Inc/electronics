export interface ProductSpecification {
  label: string;
  value: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Product {
  id: string;
  name: string;
  code: string;
  categoryId: string;
  discount?: number;
  originalPrice: number;
  discountPrice?: number;
  tags?: string[];
  stock: boolean;
  image: string;
  specifications?: ProductSpecification[];
}

export interface Section {
  name: string;
  id: string;
  // products: Product[];
}