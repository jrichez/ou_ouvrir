type SeoProps = {
  title: string;
  description: string;
  path: string;
};

export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.ouvrir-un-restaurant.fr";

export function generateSeo({
  title,
  description,
  path,
}: SeoProps) {
  return {
    title,
    description,

    alternates: {
      canonical: `${BASE_URL}${path}`,
    },

    openGraph: {
      title,
      description,
      url: `${BASE_URL}${path}`,
      siteName: "Ouvrir un Restaurant",
      locale: "fr_FR",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}