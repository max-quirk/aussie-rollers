// NavLanguageSelector.tsx

import { SUPPORTED_LANGUAGES } from '../../constants/locales';
import { useRouter } from 'next/router';
import { DropdownMenu } from '../ui/DropdownMenu';
import { LanguageIcon } from '@heroicons/react/24/outline';
import { useLanguage } from 'contexts/Language/LanguageContext';

export default function NavLanguageSelector({
  className,
}: {
  className?: string
}) {
  const { currentLanguage, setCurrentLanguage } = useLanguage()
  const router = useRouter();

  const handleLocaleChange = (newLocale) => {
    setCurrentLanguage(newLocale);
    router.push('/', '/', { locale: newLocale === 'en' ? undefined : newLocale });
  };

  return (
    <DropdownMenu
      className={className}
      dropdownClassName={'md:w-24'}
      disableHover
      hideArrow
      heading={
        <div className="flex items-center gap-4">
          <LanguageIcon className="h-6 w-6" />
          <span className="font-medium md:hidden">
            {SUPPORTED_LANGUAGES[currentLanguage].short}
          </span>
        </div>
      }
      items={Object.values(SUPPORTED_LANGUAGES).map(lang => ({
        id: lang.code,
        label: lang.long,
        onClick: () => {
          handleLocaleChange(lang.code)
        },
      }))}
    />
  )
}

