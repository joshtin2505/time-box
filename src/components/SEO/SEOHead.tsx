import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEOHead = ({
  title = "The Time Box - Planificador Personal de Productividad",
  description = "Planificador de tiempo moderno con time-blocking, gestión de prioridades y brain dump. Organiza tu día de manera eficiente y mejora tu productividad personal.",
  keywords = "planificador, productividad, time blocking, gestión del tiempo, calendario, organización personal",
  image = "https://time-box-planner.vercel.app/og-image.png",
  url = "https://time-box-planner.vercel.app",
  type = "website",
}: SEOHeadProps) => {
  return (
    <Helmet>
      {/* Título dinámico */}
      <title>{title}</title>

      {/* Meta tags básicos */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data para página específica */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: title,
          description: description,
          url: url,
          isPartOf: {
            "@type": "WebSite",
            name: "The Time Box",
            url: "https://time-box-planner.vercel.app",
          },
        })}
      </script>
    </Helmet>
  );
};
