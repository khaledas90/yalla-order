import type { Metadata } from "next";
import "./globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { cairoFont } from "@/utils/fonts";
import { headers } from "next/headers";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import NextAuthSessionProvider from "@/components/NextAuthSessionProvider";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === "ar"
      ? "يلا أوردر - طلب وتوصيل عبر الإنترنت بسهولة"
      : "Yalla Order - Seamless Online Ordering & Delivery";
  const description =
    locale === "ar"
      ? "اطلب الطعام والبقالة وأكثر مع يلا أوردر. استمتع بتوصيل سريع وموثوق إلى باب منزلك!"
      : "Order food, groceries, and more with Yalla Order. Enjoy fast, reliable delivery right to your door!";

  return {
    title,
    description,
    keywords:
      locale === "ar"
        ? "طلب عبر الإنترنت, توصيل طعام, توصيل بقالة, يلا أوردر"
        : "online ordering, food delivery, grocery delivery, Yalla Order",
    robots: "index, follow",
    openGraph: {
      title,
      description,
      url: "https://yalla-order.vercel.app",
      siteName: "Yalla Order",
      images: [
        {
          url: "https://yalla-order.vercel.app/og-image.jpg",
          width: 1200,
          height: 630,
          alt:
            locale === "ar"
              ? "يلا أوردر - طلب وتوصيل عبر الإنترنت"
              : "Yalla Order - Online Ordering and Delivery",
        },
      ],
      locale: locale === "ar" ? "ar_AR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://yalla-order.vercel.app/og-image.jpg"],
    },
  };
}

export async function generateStaticParams() {
  const locales = ["en", "ar"];
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  const referer = (await headers()).get("referer") || "";
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost"
      : "https://yalla-order.vercel.app";
  const url = new URL(referer, baseUrl);
  const pathname = url.pathname.slice(4);

  console.log("pathname", pathname);

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Yalla Order",
              url: "https://yalla-order.vercel.app",
              logo: "https://yalla-order.vercel.app/logo.png",
              description:
                "Yalla Order - Your go-to app for seamless online ordering and delivery.",
              sameAs: [
                "https://twitter.com/yallaorder",
                "https://facebook.com/yallaorder",
                "https://instagram.com/yallaorder",
              ],
            }),
          }}
        />
      </Head>
      <body className={`${cairoFont.className}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NextAuthSessionProvider>
            <Toaster />
            {children}
          </NextAuthSessionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
