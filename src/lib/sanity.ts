import { createClient } from "@sanity/client";

const projectId = "1lye0m84";
const dataset = "production";
const apiVersion = "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: import.meta.env.SANITY_API_TOKEN,
});

export async function getServices() {
  try {
    const query = `*[_type == "service"] | order(order asc) { _id, name, description, price, capacity }`;
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

export async function getTeam() {
  try {
    const query = `*[_type == "teamMember"] | order(order asc) { _id, name, role, bio }`;
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching team:", error);
    return [];
  }
}

export async function getTestimonials() {
  try {
    const query = `*[_type == "testimonial"] | order(order asc) { _id, clientName, text, rating }`;
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}

export async function getSiteSettings() {
  try {
    const query = `*[_type == "siteSettings"][0] { businessName, tagline, whatsappNumber, phoneNumber, instagramHandle, address, heroHeadline, heroSubheadline, ctaText }`;
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching site settings:", error);
    return {};
  }
}
