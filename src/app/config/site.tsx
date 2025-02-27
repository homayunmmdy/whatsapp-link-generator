import { useTranslations } from "next-intl";

export const SiteConfig = () => {
  const t = useTranslations("config");
  const config: ConfigType = {
    name: t("name"),
    pages: {
      home : t('pages.home'),
      technology: t('pages.technology'),
      whatsappLinkGenerator: t('pages.whatsappLinkGenerator'),
    }
  };

  return config;
};

type PageKey = "home"|'whatsappLinkGenerator'|'technology' ;

type ConfigType = {
  name: string;
  pages : {
    [key in PageKey]: string;
  };
};
