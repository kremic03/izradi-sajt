export default function StructuredData() {
  // LocalBusiness Schema - za lokalnu pretragu (Google Maps, Local Pack)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://izradi-sajt.com/#organization",
    "name": "Izrada Web Sajtova - Nikola Kremić",
    "alternateName": "Izradi-Sajt.com",
    "url": "https://izradi-sajt.com",
    "logo": "https://izradi-sajt.com/logo.png",
    "image": "https://izradi-sajt.com/og-image.jpg",
    "description": "Profesionalna izrada web sajtova i aplikacija u Beogradu. Moderan dizajn, SEO optimizacija, responzivni sajtovi po pristupačnim cenama.",
    "telephone": "+381604224990",
    "email": "nikolakremic15@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Beograd",
      "addressRegion": "Beograd",
      "addressCountry": "RS"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.7866,
      "longitude": 20.4489
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Beograd"
      },
      {
        "@type": "Country",
        "name": "Srbija"
      }
    ],
    "priceRange": "$$",
    "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 09:00-21:00",
    "sameAs": [
      "https://github.com/kremic03",
      "https://www.linkedin.com/in/nikola-kremic-b4a318257/",
      "https://www.instagram.com/kremic_nikola/"
    ]
  };

  // Person Schema - za profesionalnu identifikaciju
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://izradi-sajt.com/#person",
    "name": "Nikola Kremić",
    "url": "https://izradi-sajt.com",
    "image": "https://izradi-sajt.com/nikola-kremic.jpg",
    "jobTitle": "Full-Stack Web Developer",
    "worksFor": {
      "@id": "https://izradi-sajt.com/#organization"
    },
    "email": "nikolakremic15@gmail.com",
    "telephone": "+381604224990",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Beograd",
      "addressCountry": "RS"
    },
    "sameAs": [
      "https://github.com/kremic03",
      "https://www.linkedin.com/in/nikola-kremic-b4a318257/",
      "https://www.instagram.com/kremic_nikola/"
    ],
    "knowsAbout": [
      "Web Development",
      "React",
      "Next.js",
      "TypeScript",
      "Full-Stack Development",
      "UI/UX Design",
      "SEO Optimization"
    ]
  };

  // Service Schema - za prikaz usluga
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Izrada Web Sajtova",
    "provider": {
      "@id": "https://izradi-sajt.com/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Srbija"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Usluge",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Izrada Web Sajtova",
            "description": "Profesionalna izrada modernih, responzivnih web sajtova sa SEO optimizacijom"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Izrada Web Aplikacija",
            "description": "Razvoj funkcionalnih web aplikacija sa React i Next.js tehnologijama"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Studentski Radovi",
            "description": "Pomoć studentima sa diplomskim i seminarskim radovima iz web programiranja"
          }
        }
      ]
    }
  };

  // WebSite Schema - za site search box u Google-u
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://izradi-sajt.com/#website",
    "url": "https://izradi-sajt.com",
    "name": "Izrada Web Sajtova Beograd",
    "description": "Profesionalna izrada web sajtova i aplikacija",
    "publisher": {
      "@id": "https://izradi-sajt.com/#organization"
    },
    "inLanguage": ["sr-RS", "en-US"]
  };

  // BreadcrumbList Schema - za breadcrumbs u Google rezultatima
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Početna",
        "item": "https://izradi-sajt.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "O Meni",
        "item": "https://izradi-sajt.com/#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Usluge",
        "item": "https://izradi-sajt.com/#services"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Portfolio",
        "item": "https://izradi-sajt.com/#portfolio"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Kontakt",
        "item": "https://izradi-sajt.com/#contact"
      }
    ]
  };

  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
