export interface WhatsappOrderParams {
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  total: number;
}

export function formatWhatsappOrder({ items, total }: WhatsappOrderParams): string {
  const phoneNumber = "51914019629";
  const productLines = items
    .map(
      (item) =>
        `- ${item.name} (x${item.quantity}) - S/. ${(item.price * item.quantity).toFixed(2)}`
    )
    .join("%0A");

  const message =
    `¡Hola Beltec Import!%0A%0A` +
    `Quisiera realizar el siguiente pedido:%0A%0A` +
    `*Productos:*%0A${productLines}%0A%0A` +
    `*Total:* S/. ${total.toFixed(2)}%0A%0A` +
    `Aguardo su confirmación. Gracias.`;
  
  return `https://wa.me/${phoneNumber}?text=${message}`;
}