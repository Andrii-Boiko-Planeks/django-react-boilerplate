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
      "Welcome! What do you want to do today?": "Welcome! What do you want to do today?",
      "My membership": "My membership",
      "Payments": "Payments",
      "Refer a Buddy": "Refer a Buddy",
      "Upgrade/Add ons": "Upgrade/Add ons",
      "Edit": "Edit",
      "Membership Information": "Membership Information",
      "Personal Details": "Personal Details",
      "Birthday": "Birthday",
      "Gender": "Gender",
      "Contact Details": "Contact Details",
      "Membership Details": "Membership Details",
      "Home Gym": "Home Gym",
      "Start Date": "Start Date",
      "Membership Type": "Membership Type",
      "Amount of Visits": "Amount of Visits",
      "Payment Date": "Payment Date",
      "Last Payment Date": "Last Payment Date",
      "Last Payment Amount": "Last Payment Amount",
      "Next Payment Date": "Next Payment Date",
      "Next Payment Amount": "Next Payment Amount",
      "Freeze Membership": "Freeze Membership",
      "Update Details": "Update Details",
      "Upgrade/Add-ons": "Upgrade/Add-ons",
      "Membership Cancellation": "Membership Cancellation",
      "Change Home Club": "Change Home Club",
      "Please check your phone and email to see more details about your free trial.": "Please check your phone and email to see more details about your free trial.",
      "You are not eligible for a free trial! Please contact the reception to know more.": "You are not eligible for a free trial! Please contact the reception to know more.",
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
      "Welcome! What do you want to do today?": "أهلاً وسهلاً بك! ماذا تريد أن تفعل اليوم؟",
      "My membership": "عضويتي",
      "Payments": "المدفوعات",
      "Refer a Buddy": "إحالة صديق",
      "Upgrade/Add ons": "الترقية/الإضافات",
      "Edit": "تحرير",
      "Membership Information": "معلومات العضوية",
      "Personal Details": "التفاصيل الشخصية",
      "Birthday": "أعياد الميلاد",
      "Gender": "الجنس",
      "Contact Details": "تفاصيل الاتصال",
      "Membership Details": "تفاصيل العضوية",
      "Home Gym": "الصالة الرياضية المنزلية",
      "Start Date": "تاريخ البدء",
      "Membership Type": "نوع العضوية",
      "Amount of Visits": "عدد الزيارات",
      "Payment Date": "تاريخ الدفع",
      "Last Payment Date": "تاريخ آخر دفعة",
      "Last Payment Amount": "مبلغ الدفعة الأخيرة",
      "Next Payment Date": "تاريخ الدفع التالي",
      "Next Payment Amount": "مبلغ الدفعة التالية",
      "Freeze Membership": "تجميد العضوية",
      "Update Details": "تفاصيل التحديث",
      "Upgrade/Add-ons": "الترقية/الإضافات",
      "Membership Cancellation": "إلغاء العضوية",
      "Change Home Club": "تغيير النادي الرئيسي",
      "Please check your phone and email to see more details about your free trial.": "يُرجى التحقق من هاتفك وبريدك الإلكتروني لمعرفة المزيد من التفاصيل حول الإصدار التجريبي المجاني.",
      "You are not eligible for a free trial! Please contact the reception to know more.": "أنت غير مؤهل للحصول على تجربة مجانية! يرجى الاتصال بمكتب الاستقبال لمعرفة المزيد.",

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
