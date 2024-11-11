import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Video Player": "Video Player",
      "Join now": "Join now",
      "Log in": "Log in",
      "Free Trial": "Free Trial",
      "English": "English",
      "Arabic": "Arabic",
      "Scan QR": "Scan the QR code from the app here to sign in!",
    }
  },
  ar: {
    translation: {
      "Video Player": "مشغل الفيديو",
      "Join now": "انضم الآن",
      "Log in": "تسجيل الدخول",
      "Free Trial": "نسخة تجريبية مجانية",
      "English": "الإنجليزية",
      "Arabic": "العربية",
      "Scan QR": "امسح رمز الاستجابة السريعة من التطبيق هنا لتسجيل الدخول!",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
