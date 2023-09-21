import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // ------------------------SodeBar------------------------
      chat: "Chat",
      myProjects: "My projects",
      infoBase: "Infobase",
      brandVoice: "Brand Voice",
      templates: "Templates",
      tools: "Tools",
      newProject: "New Project",
      personalWorkspace: "Personal Workspace",
      freePlan: "Free Plan",
      upgrade: "Upgrade to Pro",
      // ------------------------Chat------------------------
      browsePrompts: "Browse Prompts",
      noBrandVoice: "No Brand Voice",
      welcomeMessage: "Welcome to Chat by Copy.ai",
      getStarted: "Get started by writing a task and Chat can do the rest. Not sure where to start? Check out the Prompt Library for inspiration.",
      realTimeSearch: "Real-Time Search",
      summarizeNews: "Summarize the latest news on generative AI",
      writeEmail: "Write a personalized email to [insert Linkedin profile URL]",
      longFormContent: "Long Form Content",
      blogPostCreation: "Create a blog post about search engine optimization",
      writePressRelease: "Write a press release about www.copy.ai",
      brainstormIdeas: "Brainstorm Ideas",
      generateCaptions: "Generate 10 Instagram captions for fashion week",
      productDescription: "Write a product description for a bicycle in the style of Hemingway",
      askOrSearch: "Ask or search anything",
      improve: "Improve",
      // ------------------------Project------------------------
      dateCreated: "Date Created",
      lastModified: "Last Modified",
      alphabetical: "Alphabetical",
      projects: "Projects",
      folder: "Folder",
      projectName: "Project Name",
      today: "Today",
      private: "Private",
      project: "Project"
    }
  },
  ar: {
    translation: {
      // ------------------------SodeBar------------------------
        chat: "دردشة",
        myProjects: "مشاريعي",
        infoBase: "قاعدة المعلومات",
        brandVoice: "صوت العلامة التجارية",
        templates: "القوالب",
        tools: "الأدوات",
        newProject: "مشروع جديد",
        personalWorkspace: "مساحة العمل الشخصية",
        freePlan: "خطة مجانية",
        // ------------------------Chat------------------------
        upgrade: "الترقية إلى الاحترافية",
        browsePrompts: "تصفح التلنيبات",
        noBrandVoice: "لا صوت للعلامة التجارية",
        welcomeMessage: "مرحبا بك في الدردشة بواسطة نسخة .ai",
        getStarted: "ابدأ بكتابة مهمة وسيقوم Chat بالباقي. لست متأكدا من أين تبدأ؟ تحقق من المكتبة الفورية للحصول على الإلهام.",
        realTimeSearch: "البحث في الوقت الحقيقي",
        summarizeNews: "لخص أحدث الأخبار عن الذكاء الاصطناعي التوليدي",
        writeEmail: "اكتب رسالة بريد إلكتروني شخصية إلى [أدرج عنوان URL للملف الشخصي في Linkedin]",
        longFormContent: "محتوى طويل الشكل",
        blogPostCreation: "إنشاء مقالة بلوق حول تحسين محركات البحث",
        writePressRelease: "اكتب بيانًا صحفيًا حول www.copy.ai",
        brainstormIdeas: "تفكير في الأفكار",
        generateCaptions: "قم بإنشاء 10 تعليقات توضيحية على Instagram لأسبوع الموضة",
        productDescription: "اكتب وصفًا للمنتج للدراجة بأسلوب هيمينغواي",
        askOrSearch: "اسأل أو ابحث عن أي شيء",
        improve: "يحسن",
        // ------------------------Projects------------------------
        dateCreated: "تاريخ الإنشاء",
        lastModified: "آخر تعديل",
        alphabetical: "أبجدي",
        projects: "المشاريع",
        folder: "مجلد",
        projectName: "اسم المشروع",
        today: "اليوم",
        private: "خاص",
        project: "مشروع"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
