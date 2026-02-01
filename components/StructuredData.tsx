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
        "name": "FAQ",
        "item": "https://izradi-sajt.com/#faq"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Kontakt",
        "item": "https://izradi-sajt.com/#contact"
      }
    ]
  };

  // FAQPage Schema - za FAQ rich results u Google-u
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Koliko košta izrada web sajta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cena izrade web sajta zavisi od složenosti projekta. Jednostavan prezentacioni sajt kreće od 300-500€, kompleksniji sajtovi sa custom funkcionalnostima 800-1500€, dok e-commerce i web aplikacije mogu koštati 1500€+. Svaki projekat je jedinstven i dajem besplatnu procenu nakon konsultacije."
        }
      },
      {
        "@type": "Question",
        "name": "Koliko traje izrada web sajta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prosečno vreme izrade zavisi od obima projekta. Jednostavan sajt sa 3-5 stranica: 1-2 nedelje. Kompleksniji sajt sa više funkcionalnosti: 3-4 nedelje. E-commerce ili web aplikacija: 4-8 nedelja. Radim brzo ali kvalitetno, bez kompromisa na kvalitetu koda."
        }
      },
      {
        "@type": "Question",
        "name": "Da li nudite održavanje web sajta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da, nudim mesečne pakete održavanja koji uključuju: redovne backup-e, sigurnosna ažuriranja, izmene sadržaja, tehničku podršku i monitoring performansi. Takođe pružam obuku kako sami možete da ažurirate sadržaj ako želite."
        }
      },
      {
        "@type": "Question",
        "name": "Da li sajt će biti prilagođen za mobilne telefone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apsolutno! Svi sajtovi koje pravim su 100% responzivni i optimizovani za sve uređaje - desktop, tablet i mobilni telefoni. Testiram na svim popularnim veličinama ekrana i browser-ima. Mobilna optimizacija je prioritet jer većina korisnika dolazi sa telefona."
        }
      },
      {
        "@type": "Question",
        "name": "Da li radite studentske radove iz web programiranja?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da, pomažem studentima sa seminarskim, projektnim i diplomskim radovima iz web programiranja. Pružam kvalitetna i edukativna rešenja sa detaljnim objašnjenjima koda. Teme: React, Node.js, full-stack aplikacije, baze podataka, REST API, itd."
        }
      },
      {
        "@type": "Question",
        "name": "Šta je uključeno u cenu izrade sajta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "U cenu je uključeno: dizajn, programiranje, responzivnost, SEO optimizacija, kontakt forma, Google Analytics, hosting setup pomoć, obuka za korišćenje, 30 dana besplatne podrške i sve izmene tokom razvoja. Hosting i domen se plaćaju posebno."
        }
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

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
