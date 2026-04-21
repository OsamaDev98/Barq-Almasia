import type { Metadata } from "next";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "سياسة الخصوصية والشروط والأحكام",
  description:
    "تعرّف على سياسة الخصوصية وشروط الاستخدام الخاصة بشركة برق الماسية لأجهزة الأمن والسلامة.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://barqalmasia.net/policies",
  },
};

export default function PoliciesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 dark:bg-stone-950">
      <Header />

      <main className="flex-grow pt-32 pb-24">
        {/* Page Header */}
        <div className="bg-stone-900 dark:bg-stone-950 text-white py-20 relative overflow-hidden mb-16">
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none z-0"></div>
          <div className="absolute top-1/2 start-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#f16c48]/20 to-transparent rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-black mb-6">سياسة الخصوصية والشروط والأحكام</h1>
            <p className="text-stone-400 text-lg">
              تعرف على التزامنا تجاه خصوصيتك وشروط استخدام خدمات موقع برق الماسية.
            </p>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-8 md:p-12 shadow-xl shadow-stone-200/50 dark:shadow-none text-start">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-[#a93818] dark:text-[#f16c48] mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined">policy</span>
                سياسة الخصوصية
              </h2>
              <div className="space-y-4 text-stone-600 dark:text-stone-300 leading-relaxed">
                <p>
                  نحن في <strong>شركة برق الماسية</strong> نولي أهمية قصوى لخصوصية زوارنا وعملائنا. توضح سياسة الخصوصية هذه أنواع المعلومات الشخصية التي نجمعها وكيفية استخدامها وحمايتها.
                </p>
                <h3 className="text-lg font-bold text-stone-900 dark:text-white mt-6 mb-2">1. جمع المعلومات</h3>
                <p>
                  نقوم بجمع المعلومات التي تقدمها لنا طواعية عند ملء نماذج الاتصال، مثل الاسم، رقم الهاتف، والبريد الإلكتروني، وتفاصيل المنشأة بهدف تقديم الخدمات المطلوبة وتقديم عروض الأسعار.
                </p>
                <h3 className="text-lg font-bold text-stone-900 dark:text-white mt-6 mb-2">2. استخدام المعلومات</h3>
                <p>
                  تستخدم المعلومات المجمعة حصرياً للتواصل معك بشأن الخدمات التي طلبتها، وتقديم الاستشارات الفنية، وتحسين مستوى خدمتنا. نحن لا نشارك، نبيع، أو نؤجر معلوماتك الشخصية لأي أطراف ثالثة دون موافقتك الصريحة إلا إذا اقتضى القانون ذلك.
                </p>
                <h3 className="text-lg font-bold text-stone-900 dark:text-white mt-6 mb-2">3. حماية البيانات</h3>
                <p>
                  نتخذ إجراءات أمنية صارمة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. نستخدم تقنيات التشفير القياسية في قطاع الأمن السيبراني لحماية البيانات الحساسة.
                </p>
              </div>
            </section>

            <div className="w-full h-[1px] bg-stone-200 dark:bg-stone-800 my-12"></div>

            <section>
              <h2 className="text-2xl font-black text-[#a93818] dark:text-[#f16c48] mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined">gavel</span>
                الشروط والأحكام
              </h2>
              <div className="space-y-4 text-stone-600 dark:text-stone-300 leading-relaxed">
                <p>
                  استخدامك لموقع <strong>شركة برق الماسية</strong> يعني موافقتك الكاملة على الشروط والأحكام التالية. يرجى قراءتها بعناية.
                </p>
                <h3 className="text-lg font-bold text-stone-900 dark:text-white mt-6 mb-2">1. الملكية الفكرية</h3>
                <p>
                  جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص، الرسومات، الشعارات، الصور، والمقاطع الصوتية، هي ملك لشركة برق الماسية ومحمية بموجب قوانين حقوق النشر المحلية والدولية. لا يجوز إعادة إنتاج أو توزيع أو استخدام أي من هذه المحتويات دون إذن كتابي مسبق.
                </p>
                <h3 className="text-lg font-bold text-stone-900 dark:text-white mt-6 mb-2">2. دقة المعلومات</h3>
                <p>
                  نبذل قصارى جهدنا لضمان دقة وتحديث المعلومات المقدمة على موقعنا. ومع ذلك، لا نضمن خلو الموقع من الأخطاء المطبعية أو التقنية. نحتفظ بالحق في إجراء تغييرات وتحديثات على الخدمات والمنتجات المذكورة في أي وقت دون إشعار مسبق.
                </p>
                <h3 className="text-lg font-bold text-stone-900 dark:text-white mt-6 mb-2">3. الخدمات والعقود</h3>
                <p>
                  المعلومات المقدمة في الموقع لا تشكل عرضاً ملزماً. يتم الاتفاق على نطاق الخدمات، التكلفة، الجداول الزمنية، وشروط الدفع من خلال عقود رسمية يتم توقيعها بين الشركة والعميل بشكل مباشر.
                </p>
                <h3 className="text-lg font-bold text-stone-900 dark:text-white mt-6 mb-2">4. التعديلات</h3>
                <p>
                  تحتفظ شركة برق الماسية بالحق في تعديل سياسة الخصوصية والشروط والأحكام في أي وقت. سيتم نشر التغييرات على هذه الصفحة، ويُعتبر استمرارك في استخدام الموقع بعد النشر موافقة منك على هذه التغييرات.
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
