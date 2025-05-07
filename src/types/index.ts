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
    imagen_del_producto: string;
    imagen_del_producto_2: string;
    imagen_del_producto_3: string;
    imagen_del_producto_4: string;
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