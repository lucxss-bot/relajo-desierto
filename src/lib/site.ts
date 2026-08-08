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
    "Tinaja hasta 6 personas o jacuzzi para 2, con tabla dulce y salada, pizzetas y bebestible a elección. Con o sin alojamiento en cabaña, a minutos de Copiapó.",

  whatsapp: "56998261732",
  phoneDisplay: "+56 9 9826 1732",
  phoneHref: "tel:+56998261732",

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

  /** Tinaja y jacuzzi cambian con la estación; la cabaña no. */
  hours: {
    aguaInvierno: "17:00 a 21:00",
    aguaVerano: "18:00 a 22:00",
    cabanaIngreso: "16:00",
    cabanaSalida: "12:00",
  },
} as const;

/** Link de WhatsApp con mensaje pre-escrito. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Precio en pesos chilenos: 45000 -> "$45.000" */
export function clp(amount: number): string {
  return `$${amount.toLocaleString("es-CL")}`;
}
