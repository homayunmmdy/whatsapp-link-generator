import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import "./globals.css";

const IRANSANS = localFont({ src: "./IRANSansX.woff2" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WhatsApp Link Generator",
  description: "A simple, fast tool to generate direct WhatsApp chat links without requiring users to save your phone number first.",
};

// Define the LayoutProps type
type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: LayoutProps) {
  // Await the params promise to get the locale
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale == "fa" ? "rtl" : "ltr"}>
      <body
        className={`${
          locale == "fa" ? IRANSANS.className : geistSans.variable
        } `}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
