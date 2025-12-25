import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = "Room 254, Afrobeats, Amapiano, Bashment, Oxford nightlife, Reading events, Birmingham parties, Bristol nightlife, Northampton clubs",
  image = "/images/_DSC9960.jpg",
  url,
  schema
}) => {
  const siteUrl = "https://room254.events";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{`${title} | Room 254 Events`}</title>
      <meta name="title" content={`${title} | Room 254 Events`} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={`${title} | Room 254 Events`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={`${title} | Room 254 Events`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EventVenue",
          "name": "Room 254 Events",
          "description": "The premier Afrobeats, Amapiano, and Bashment event series in Oxford, expanding to Reading, Birmingham, Bristol, and Northampton.",
          "url": "https://room254.events",
          "logo": "https://room254.events/logo.png",
          "areaServed": ["Oxford", "Reading", "Birmingham", "Bristol", "Northampton"],
          "sameAs": [
            "https://www.instagram.com/room254events"
          ],
          ...schema
        })}
      </script>
    </Helmet>
  );
};

export default SEO;