export interface WhatsappOrderParams {
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  total: number;
}

export function formatWhatsappOrder({ items, total }: WhatsappOrderParams, device: 'web' | 'mobile' = 'web'): string {
  const phoneNumber = "51914019629";
  
  // Format each product line with proper encoding
  const productLines = items
    .map(
      (item) =>
        `- ${encodeURIComponent(item.name)} (x${item.quantity}) - S/. ${(item.price * item.quantity).toFixed(2)}`
    )
    .join("\n");

  // Build the message with proper line breaks and encoding
  const message = [
    "¡Hola Beltec Import!",
    "",
    "Quisiera realizar el siguiente pedido:",
    "",
    "*Productos:*",
    productLines,
    "",
    `*Total:* S/. ${total.toFixed(2)}`,
    "",
    "Espero su confirmación. Gracias."
  ].join("\n");

  // Encode the entire message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // Return the WhatsApp URL with the encoded message
  const url = device === 'web' 
    ? `https://web.whatsapp.com/send?phone=+${phoneNumber}&text=${encodedMessage}`
    : `https://wa.me/+${phoneNumber}?text=${encodedMessage}`;
  return url;
}