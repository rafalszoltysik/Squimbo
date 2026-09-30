import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { RichText, stripMarkdownLinks } from "@/components/RichText";
import type { Locale } from "@/i18n/locales";
import { getSiteUrl } from "@/seo/site-url";

export type SeoFaqItem = {
  question: string;
  answer: string;
};

export type SeoRelatedLink = {
  href: string;
  label: string;
};

export type SeoGuideLink = {
  href: string;
  label: string;
  description?: string;
};

export type SeoHowToStep = {
  name: string;
  text: string;
};

type Props = {
  locale: Locale;
  /** Path after locale, e.g. "/how-to-play". */
  path: string;
  title: string;
  lead: string;
  breadcrumbLabel: string;
  homeLabel: string;
  sections: Array<{
    title: string;
    body?: string;
    points?: readonly string[];
  }>;
  faqTitle: string;
  faq: SeoFaqItem[];
  ctaLabel: string;
  ctaHref: string;
  relatedTitle: string;
  related: SeoRelatedLink[];
  /** Pillar pages: long-tail guides under this intent. */
  guidesTitle?: string;
  guides?: SeoGuideLink[];
  /** Optional HowTo schema (e.g. how-to-play, open-discord-activity). */
  howTo?: {
    name: string;
    description: string;
    steps: SeoHowToStep[];
  };
};

function buildContentJsonLd({
  pageUrl,
  siteUrl,
  locale,
  title,
  lead,
  breadcrumbLabel,
  homeLabel,
  faq,
  howTo,
}: {
  pageUrl: string;
  siteUrl: string;
  locale: Locale;
  title: string;
  lead: string;
  breadcrumbLabel: string;
  homeLabel: string;
  faq: SeoFaqItem[];
  howTo?: Props["howTo"];
}) {
  const homeUrl = `${siteUrl}/${locale}`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description: stripMarkdownLinks(lead),
      isPartOf: { "@id": `${homeUrl}#website` },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: homeLabel,
          item: homeUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: breadcrumbLabel,
          item: pageUrl,
        },
      ],
    },
  ];

  if (faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: stripMarkdownLinks(item.answer),
        },
      })),
    });
  }

  if (howTo) {
    graph.push({
      "@type": "HowTo",
      "@id": `${pageUrl}#howto`,
      name: howTo.name,
      description: stripMarkdownLinks(howTo.description),
      step: howTo.steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.name,
        text: stripMarkdownLinks(step.text),
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function SeoContentPage({
  locale,
  path,
  title,
  lead,
  breadcrumbLabel,
  homeLabel,
  sections,
  faqTitle,
  faq,
  ctaLabel,
  ctaHref,
  relatedTitle,
  related,
  guidesTitle,
  guides,
  howTo,
}: Props) {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/${locale}${path}`;

  return (
    <>
      <JsonLd
        data={buildContentJsonLd({
          pageUrl,
          siteUrl,
          locale,
          title,
          lead,
          breadcrumbLabel,
          homeLabel,
          faq,
          howTo,
        })}
      />
      <article className="prose-page">
        <nav className="prose-page__crumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href={`/${locale}`}>{homeLabel}</Link>
            </li>
            <li aria-current="page">{breadcrumbLabel}</li>
          </ol>
        </nav>

        <h1>{title}</h1>
        <p>
          <RichText text={lead} locale={locale} />
        </p>

        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.body ? (
              <p>
                <RichText text={section.body} locale={locale} />
              </p>
            ) : null}
            {section.points && section.points.length > 0 ? (
              <ul>
                {section.points.map((point) => (
                  <li key={point}>
                    <RichText text={point} locale={locale} />
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        {guidesTitle && guides && guides.length > 0 ? (
          <section
            className="seo-link-section"
            aria-labelledby="seo-guides-title"
          >
            <h2 id="seo-guides-title">{guidesTitle}</h2>
            <ul className="seo-link-grid">
              {guides.map((guide) => (
                <li key={guide.href}>
                  <Link
                    className="seo-link-tile"
                    href={`/${locale}${guide.href}`}
                  >
                    <span className="seo-link-tile__label">{guide.label}</span>
                    {guide.description ? (
                      <span className="seo-link-tile__desc">
                        {guide.description}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {faq.length > 0 ? (
          <section className="seo-faq" aria-labelledby="seo-faq-title">
            <h2 id="seo-faq-title">{faqTitle}</h2>
            <div className="seo-faq__list">
              {faq.map((item) => (
                <div className="seo-faq__item" key={item.question}>
                  <h3>{item.question}</h3>
                  <p>
                    <RichText text={item.answer} locale={locale} />
                  </p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <p className="seo-cta-wrap">
          <a className="hero__cta" href={ctaHref} rel="noopener noreferrer">
            {ctaLabel}
          </a>
        </p>

        <nav
          className="seo-link-section"
          aria-labelledby="seo-related-title"
        >
          <h2 id="seo-related-title">{relatedTitle}</h2>
          <ul className="seo-link-grid seo-link-grid--compact">
            {related.map((link) => (
              <li key={`${link.href}-${link.label}`}>
                <Link
                  className="seo-link-tile"
                  href={`/${locale}${link.href}`}
                >
                  <span className="seo-link-tile__label">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </>
  );
}
