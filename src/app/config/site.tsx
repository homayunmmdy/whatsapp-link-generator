import { useTranslations } from "next-intl";

export const SiteConfig = () => {
  const t = useTranslations("config");
  const config: ConfigType = {
    name: t("name"),
  };

  return config;
};

type ConfigType = {
  name: string;
};
