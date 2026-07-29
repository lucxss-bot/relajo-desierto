/**
 * Datos del negocio en un solo lugar.
 * Cambiar el teléfono o el Instagram aquí lo actualiza en todo el sitio.
 */
export const site = {
  name: "Relajo Desierto",
  tagline: "Tinaja, jacuzzi y cabaña en el desierto de Atacama",
  description:
    "Tinaja con hidromasaje para 6, jacuzzi para 2 y cabaña equipada con desayuno. A minutos de Copiapó, en pleno desierto de Atacama.",

  // OJO: reemplazar por el número real antes de difundir el sitio.
  whatsapp: "56912345678",
  phoneDisplay: "+56 9 1234 5678",
  phoneHref: "tel:+56912345678",

  instagram: "https://instagram.com/relajo.desierto",
  instagramHandle: "@relajo.desierto",

  address: {
    locality: "Chamonate",
    city: "Copiapó",
    region: "Atacama",
    country: "CL",
    full: "Chamonate, Copiapó, Región de Atacama",
  },
  geo: { lat: -27.2833, lng: -70.4167 },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Chamonate%2C+Copiap%C3%B3%2C+Atacama",

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
