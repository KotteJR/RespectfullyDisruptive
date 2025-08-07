export default function Head() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Respectfully Disruptive",
    url: "https://respectfullydisruptive.com",
    logo: "https://respectfullydisruptive.com/RD/logonotext.svg",
    sameAs: [
      "https://www.linkedin.com/company/respectfullydisruptive/",
    ],
    description:
      "Respectfully Disruptive is a global full-stack digital strategy, design & engineering studio helping brands launch, grow, and scale digital products.",
  };

  return (
    <>
      <meta name="robots" content="index, follow" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
