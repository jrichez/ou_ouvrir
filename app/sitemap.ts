import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/villes`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/villes/lille`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/villes/paris`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/villes/lyon`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/villes/marseille`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/villes/toulouse`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/methodologie`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/carte`,
      lastModified: new Date(),
    },
  ];
}