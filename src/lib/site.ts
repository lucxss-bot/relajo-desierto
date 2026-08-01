/**
 * Datos del negocio en un solo lugar.
 * Cambiar el teléfono, el Instagram o las coordenadas aquí los actualiza
 * en todo el sitio.
 */

/**
 * Coordenadas del acceso. La dirección con nombre de pasaje y parcela no
 * existe en Google Maps, así que el enlace "Cómo llegar" se arma con estas.
 */
const geo = { lat: -27.2857486, lng: -70.4503779 };

export const site = {
  name: "Relajo Desierto",
  slogan: "Donde comienza tu descanso",
  tagline: "Tinaja, jacuzzi y cabaña en el desierto de Atacama",
  description:
    "Tinaja hasta 6 personas o jacuzzi hasta 4, con tabla de picoteo, pizzetas y espumante. Con o sin alojamiento en cabaña, a minutos de Copiapó.",

  // OJO: reemplazar por el número real antes de difundir el sitio.
  whatsapp: "56912345678",
  phoneDisplay: "+56 9 1234 5678",
  phoneHref: "tel:+56912345678",

  instagram: "https://instagram.com/relajodesierto",
  instagramHandle: "@relajodesierto",

  address: {
    street: "Pasaje Montes de Valencia, Parcela 3",
    locality: "Chamonate",
    city: "Copiapó",
    region: "Atacama",
    country: "CL",
    full: "Pasaje Montes de Valencia, Parcela 3, Chamonate, Copiapó",
  },
  geo,

  /** Abre Google Maps directamente en modo "cómo llegar" hacia el punto. */
  mapsUrl: `https://www.google.com/maps/dir/?api=1&destination=${geo.lat},${geo.lng}`,

  hours: "Todos los días, 10:00 a 23:00",
} as const;

/** Link de WhatsApp con mensaje pre-escrito. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Precio en pesos chilenos: 45000 -> "$45.000" */
export function clp(amount: number): string {
  return `$${amount.toLocaleString("es-CL")}`;
}
