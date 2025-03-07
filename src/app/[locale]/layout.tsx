import type { Metadata } from "next";
import "./globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { cairoFont } from "@/utils/fonts";
import { headers } from "next/headers";
export const metadata: Metadata = {
  title: "Yalla Order",
  description:
    "Yalla Order - Your go-to app for seamless online ordering and delivery.",
};

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
      <body className={`${cairoFont.className}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
