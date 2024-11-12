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
      "Free trial details": "Enter your details below",
      "First Name": "First Name",
      "Last Name": "Last Name",
      "Email": "Email",
      "Phone Number": "Phone Number",
      "Submit": "Submit",
      "Scan this QR code to join today!": "Scan this QR code to join today!",
      "Memberships": "Memberships",
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
      "Free trial details": "أدخل بياناتك أدناه",
      "First Name": "الاسم الأول",
      "Last Name": "لاسم الأول",
      "Email": "البريد الإلكتروني",
      "Phone Number": "رقم الهاتف",
      "Submit": "إرسال",
      "Scan this QR code to join today!": "امسح رمز الاستجابة السريعة هذا للانضمام اليوم!",
      "Memberships": "العضويات",
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
