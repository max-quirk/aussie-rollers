import { Button } from "antd"
import { useRouter } from "next/router"

export function LanguageButton() {
  const router = useRouter()
  const handleLocaleChange = (newLocale) => {
    router.push('/', '/', { locale: newLocale })
  }
  return (
    <div>
      <Button onClick={() => handleLocaleChange('en-US')}>English</Button>
      <Button onClick={() => handleLocaleChange('zh')}>Chinese</Button>
    </div>
  )
}
