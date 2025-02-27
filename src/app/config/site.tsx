import { useTranslations } from "next-intl";

export const SiteConfig = () => {
  const t = useTranslations("config");
  const config: ConfigType = {
    name: t("name"),
    pages: {
      home : t('pages.home')
    }
  };

  return config;
};

type PageKey = "home" ;

type ConfigType = {
  name: string;
  pages : {
    [key in PageKey]: string;
  };
};
