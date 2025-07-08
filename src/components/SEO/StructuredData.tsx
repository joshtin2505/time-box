import { Helmet } from "react-helmet-async";

export const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://time-box-planner.vercel.app/#website",
        url: "https://time-box-planner.vercel.app",
        name: "The Time Box",
        description:
          "Planificador de tiempo moderno con time-blocking y gestión de prioridades",
        inLanguage: "es-ES",
      },
      {
        "@type": "WebApplication",
        "@id": "https://time-box-planner.vercel.app/#webapp",
        url: "https://time-box-planner.vercel.app",
        name: "The Time Box - Planificador Personal",
        description:
          "Aplicación web para planificación personal con time-blocking, gestión de prioridades y brain dump",
        applicationCategory: "ProductivityApplication",
        operatingSystem: "Web Browser",
        browserRequirements: "Requires JavaScript. Requires HTML5.",
        softwareVersion: "1.0.0",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: [
          "Time Blocking",
          "Gestión de Prioridades",
          "Brain Dump",
          "Calendario Visual",
          "Guardado Automático",
          "Diseño Responsive",
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://time-box-planner.vercel.app/#organization",
        name: "The Time Box",
        url: "https://time-box-planner.vercel.app",
        logo: {
          "@type": "ImageObject",
          url: "https://time-box-planner.vercel.app/logo.png",
        },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
