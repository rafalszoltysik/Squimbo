import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoContentPage } from "@/components/SeoContentPage";
import { discordPlayUrl } from "@/discord";
import { getMessages } from "@/i18n";
import { isLocale, locales } from "@/i18n/locales";
import {
  getGuideSeoLinks,
  getRelatedSeoLinks,
  getSeoPageCopy,
  getSeoSlugs,
  slugToSeoPath,
} from "@/seo/registry";
import { buildPageMetadata } from "@/seo/metadata";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const slugs = getSeoSlugs();
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const path = slugToSeoPath(slug);
  if (!path) return {};
  const copy = getSeoPageCopy(path);
  return buildPageMetadata({
    locale: raw,
    path,
    title: copy.metaTitle,
    description: copy.metaDescription,
    ogImageAlt: getMessages(raw).meta.ogImageAlt,
  });
}

export default async function SeoSlugPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const path = slugToSeoPath(slug);
  if (!path) notFound();

  const m = getMessages(raw);
  const copy = getSeoPageCopy(path);
  const playUrl = discordPlayUrl(process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID);
  const ctaHref = playUrl ?? "https://discord.com";
  const ctaLabel = playUrl ? copy.cta : m.landing.ctaFallback;
  const guides = getGuideSeoLinks(path);

  return (
    <SeoContentPage
      locale={raw}
      path={path}
      title={copy.title}
      lead={copy.lead}
      breadcrumbLabel={copy.footerLabel}
      homeLabel={m.breadcrumbs.home}
      sections={copy.sections}
      faqTitle={copy.faqTitle}
      faq={copy.faq}
      ctaLabel={ctaLabel}
      ctaHref={ctaHref}
      relatedTitle={copy.relatedTitle}
      related={getRelatedSeoLinks(path, m.breadcrumbs.home)}
      guidesTitle={copy.guidesTitle}
      guides={guides.length > 0 ? guides : undefined}
      howTo={
        copy.howTo
          ? {
              name: copy.howTo.name,
              description: copy.lead,
              steps: copy.howTo.steps,
            }
          : undefined
      }
    />
  );
}
