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
      project: "Project",
      // ------------------------Infobase------------------------
      infobaseDes: "Infobase allows you to save and re-use key information.",
      name: "Name",
      info: "Info",
      findInfo: "Find Info",
      addInfo: "Add Info",
      learnMore: "Learn More",
      shareWorkspace: "Shared across your workspace",
      infoName: "Info Name",
      uploadDoc: "UPLOAD DOCUMENT",
      maxFileSize: "Max File Size",
      acceptedFile: "Accepted files",
      enterText: "ENTER TEXT",
      textDes: "Enter data here that will inform your Chat or Workflow prompts.",
      or: "OR",
      save: "Save",
      saveDes: `Please click on the "Save" button to save to Infobase. The processing will run in the background and may take a few minutes to complete.`,
      // ------------------------BrandVoice------------------------
      brandVoiceDes: "Create different Brand Voices to use in various instances - ensuring consistency of your AI-generated content.",
      newBrandVoice: "New Brand Voice",
      actions: "Actions",
      goBack: "goBack",
      addBrandVoice: "Add Brand Voice",
      addBrandVoiceDes: "Write or paste content that reflects your brand voice. For best results, we recommend between 50-500 words",
      contentAnalize: "Content to Analize",
      analizeContentDes: "Add a blog article, social media posts, company mission, website copy, marketing emails, or any content that matches your desired brand voice",
      words: "words",
      analyzeBrandVoice: "Analyze Brand Voice",
      nameBrandVoice: "Name of the Brand Voice",
      required: "Required",
      marketing: "Marketing",
      tipBrandVoice: "Tips For Editing Brand Voice",
      tip1: "When editing, make sure not to use negative commands. (Ex: Use 'Be courteous.', instead of 'Don't be rude.')",
      tip2: "For best results, you can redo the analysis instead of editing",
      saveAsDefaultVoice: "Save as the default voice across your workspace",
      redoAnalysis: "Redo Analysis",
      saveBrandVoice: "Save Brand Voice"
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
        project: "مشروع",
        // ------------------------Infobase------------------------
        infobaseDes: "تسمح لك Infobase بحفظ وإعادة استخدام المعلومات الرئيسية",
        name: "اسم",
        info: "معلومات",
        findInfo: "البحث عن المعلومات",
        addInfo: "أضف معلومات",
        learnMore: "أعرف أكثر",
        shareWorkspace: "مشترك عبر مساحة العمل الخاصة بك",
        infoName: "اسم المعلومات",
        uploadDoc: "تحميل مستند",
        maxFileSize: "الحجم الأقصى للملف",
        acceptedFile: "الملفات المقبولة",
        enterText: "أدخل النص",
        textDes: "أدخل البيانات هنا التي ستعطي معلومات على مشروع الدردشة أو العمل.",
        or: "أو",
        save: "حفظ",
        saveDes: `يرجى الضغط على زر "حفظ" للاحتفاظ بالمعلومات. سيتم تشغيل العملية في الخلفية وقد تستغرق بضع دقائق للإكتمال.`,
        // ------------------------BrandVoice------------------------
          brandVoiceDes: "أنشئ أصوات العلامة التجارية المختلفة لاستخدامها في مختلف الحالات - لضمان تحقيق الاتساق في محتوى الذكاء الاصطناعي الذي تم إنشاؤه.",
          newBrandVoice: "صوت العلامة التجارية الجديدة",
          actions: "أفعال",
          goBack: "العودة",
          addBrandVoice: "إضافة صوت العلامة التجارية",
          addBrandVoiceDes: "اكتب أو الصق المحتوى الذي يعكس صوت علامتك التجارية. للحصول على أفضل النتائج ، نوصي بين 50-500 كلمة",
          contentAnalize: "المحتوى للتحليل",
          analizeContentDes: "أضف مقالة مدونة ، منشورات وسائل التواصل الاجتماعي ، مهمة الشركة ، نسخة الموقع ، رسائل التسويق أو أي محتوى يتوافق مع صوت العلامة التجارية المطلوب",
          words: "كلمات",
          analyzeBrandVoice: "تحليل صوت العلامة التجارية",
          nameBrandVoice: "اسم صوت العلامة التجارية",
          required: "مطلوب",
          marketing: "التسويق",
          tipBrandVoice: "نصائح لتحرير صوت العلامة التجارية",
          tip1: "عند التحرير ، تأكد من عدم استخدام الأوامر السلبية. (مثلاً: استخدم 'كن مهذباً.' بدلاً من 'لا تكن وقحاً.')",
          tip2: "للحصول على أفضل النتائج ، يمكنك إعادة القيام بالتحليل بدلاً من التحرير",
          saveAsDefaultVoice: "احفظ كصوت افتراضي في جميع أنحاء مساحة العمل الخاصة بك",
          redoAnalysis: "إعادة التحليل",
          saveBrandVoice: "احفظ صوت العلامة التجارية"
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
// #92309C