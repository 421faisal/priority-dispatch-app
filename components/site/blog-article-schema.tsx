interface BlogArticleSchemaProps {
  title: string
  description: string
  datePublished: string
  /** Last real content update; defaults to datePublished */
  dateModified?: string
  slug: string
  imageUrl?: string
}

export function BlogArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  slug,
  imageUrl = "/images/og-trucks-highway.jpg",
}: BlogArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    datePublished: datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: "Muhammad Faisal Bilal",
      url: "https://prioritydispatchllc.com/about-owner",
      jobTitle: "Founder & CEO",
      sameAs: [
        "https://www.linkedin.com/in/muhammad-faisal-bilal"
      ],
      worksFor: {
        "@type": "Organization",
        name: "Priority Dispatch LLC",
        url: "https://prioritydispatchllc.com",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Priority Dispatch LLC",
      url: "https://prioritydispatchllc.com",
      logo: {
        "@type": "ImageObject",
        url: "https://prioritydispatchllc.com/images/logo-priority-dispatch.png",
      },
    },
    image: {
      "@type": "ImageObject",
      url: imageUrl.startsWith("http")
        ? imageUrl
        : `https://prioritydispatchllc.com${imageUrl}`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://prioritydispatchllc.com/blog/${slug}`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
