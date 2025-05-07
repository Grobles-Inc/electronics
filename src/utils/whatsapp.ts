export interface WhatsappOrderParams {
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  total: number;
}

export function formatWhatsappOrder({ items, total }: WhatsappOrderParams, device: 'web' | 'mobile' = 'web'): string {
  const phoneNumber = "51910959065";
  
  const productLines = items
    .map(
      (item) =>
        `- ${encodeURIComponent(item.name)} (x${item.quantity}) - S/. ${(item.price * item.quantity).toFixed(2)}`
    )
    .join("\n");

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

  const encodedMessage = encodeURIComponent(message);
  
  const url = device === 'web' 
    ? `https://web.whatsapp.com/send?phone=+${phoneNumber}&text=${encodedMessage}`
    : `https://wa.me/+${phoneNumber}?text=${encodedMessage}`;
  return url;
}

export function formatWhatsappContact({ nombre, correo, celular, mensaje }: { nombre: string; correo: string; celular: string; mensaje: string }, device: 'web' | 'mobile' = 'web') {
  const phoneNumber = "51910959065";
  const text = [
    "¡Hola Beltec Import!",
    "",
    "Quisiera hacer una consulta desde el formulario de contacto:",
    "",
    `*Nombre:* ${nombre}`,
    `*Correo:* ${correo}`,
    `*Celular:* ${celular}`,
    "",
    `*Mensaje:* ${mensaje}`,
    "",
    "Espero su respuesta. ¡Gracias!"
  ].join("\n");
  const encodedMessage = encodeURIComponent(text);
  return device === 'web'
    ? `https://web.whatsapp.com/send?phone=+${phoneNumber}&text=${encodedMessage}`
    : `https://wa.me/+${phoneNumber}?text=${encodedMessage}`;
}
