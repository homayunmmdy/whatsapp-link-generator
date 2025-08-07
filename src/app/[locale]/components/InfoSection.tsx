import { useTranslations } from "next-intl";

const InfoSection = () => {
  const t = useTranslations("whatsappLinkGenerator");
  return (
    <div>
      <h2 className="mb-4 flex items-center text-xl font-bold text-gray-800">
        <svg
          className="mr-2 h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        {t("about_title")}
      </h2>

      <div className="prose prose-sm text-gray-600">
        <p className="mb-4">{t("description")}</p>

        <div className="mb-6">
          <h3 className="mb-2 border-b border-gray-200 pb-1 text-lg font-semibold text-gray-800">
            {t("work_title")}
          </h3>
          <ol className="list-decimal space-y-1 pl-5">
            <li>{t("work_des1")}</li>
            <li>{t("work_des2")}</li>
            <li>{t("work_des3")}</li>
            <li>{t("work_des4")}</li>
          </ol>
        </div>

        <div>
          <h3 className="mb-2 border-b border-gray-200 pb-1 text-lg font-semibold text-gray-800">
            {t("perfect_title")}
          </h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>{t("perfect_des1")}</li>
            <li>{t("perfect_des2")}</li>
            <li>{t("perfect_des3")}</li>
            <li>{t("perfect_des4")}</li>
          </ul>
        </div>

        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm italic text-gray-500">
            &quot;{t("slog")}&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
