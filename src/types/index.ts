export interface ProductSpecification {
  label: string;
  value: string;
}

export interface CartItem extends Product {
  quantity: number;
}


export interface Product {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  acf: {
    precio_original: number;
    precio_descuento: number;
    en_stock: boolean;
    imagen_del_producto: {
      id: number;
      url: string;
    }
    especificaciones_producto: string;
    categoria: string;
  };
  slug: string;
  link: string;
}


export interface Section {
  name: string;
  id: string;
}