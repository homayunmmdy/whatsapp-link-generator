import { useTranslations } from "next-intl";

// components/MessageInput.tsx
interface MessageInput {
    value: string;
    onChange: (value: string) => void;
  }
  
  export default function MessageInput({ value, onChange }: MessageInput) {
    const t = useTranslations('whatsappLinkGenerator');
    return (
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">{t('messageOptional')}</label>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={t('enterPrefilledMessage')}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-400"
          rows={4}
        />
      </div>
    );
  }