import { useTranslations } from 'next-intl';

interface Country {
  name: string;
  code: string;
}

export const useGetCountries = (): Country[] => {
  const t = useTranslations('Countries');

  const countries: Country[] = [
    { name: t('afghanistan'), code: "+93" }, 
    { name: t('australia'), code: "+61" },
    { name: t('brazil'), code: "+55" },
    { name: t('canada'), code: "+1" },
    { name: t('china'), code: "+86" },
    { name: t('france'), code: "+33" },
    { name: t('germany'), code: "+49" },
    { name: t('india'), code: "+91" },
    { name: t('iran'), code: "+98" },
    { name: t('italy'), code: "+39" },
    { name: t('japan'), code: "+81" },
    { name: t('mexico'), code: "+52" },
    { name: t('russia'), code: "+7" },
    { name: t('saudiArabia'), code: "+966" },
    { name: t('southAfrica'), code: "+27" },
    { name: t('southKorea'), code: "+82" },
    { name: t('spain'), code: "+34" },
    { name: t('turkey'), code: "+90" },
    { name: t('unitedArabEmirates'), code: "+971" },
    { name: t('unitedKingdom'), code: "+44" },
    { name: t('unitedStates'), code: "+1" },
  ];

  return countries;
};