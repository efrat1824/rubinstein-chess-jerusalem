import React from 'react';

const Classes = () => {
    return (
        <div className="min-h-screen bg-[#3A5264] pb-20 text-white">
            {/* כותרת העמוד - העיצוב של Events שאהבת */}
            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        חוגים ואימוני שחמט
                    </h1>
                    <div className="h-1.5 w-24 bg-[#D4AF37] mx-auto rounded-full" />
                    <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
                        מהצעד הראשון ועד לרמת אמן - ליווי מקצועי לכל גיל
                    </p>
                </div>
            </section>

            {/* רשימת הבלוקים הלבנים */}
            <div className="container mx-auto px-4 max-w-6xl space-y-12">

                {/* בלוק 1: שחמט בבתי ספר */}
                <section className="bg-white text-[#1A2B3C] rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2 overflow-hidden rounded-2xl">
                        <img
                            src="/images/classes/school-chess.jpg"
                            alt="שחמט בבתי ספר"
                            className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="md:w-1/2 text-right">
                        <h2 className="text-3xl font-bold mb-6 text-[#2D3E50] border-r-4 border-[#D4AF37] pr-4">שחמט בבתי ספר</h2>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                            המועדון מוביל פרויקטים חינוכיים בעשרות בתי ספר ברחבי ירושלים.
                            לימוד השחמט במערכת החינוך מעניק לילדים כלים לריכוז, חשיבה אסטרטגית וקבלת החלטות תחת לחץ.
                            הסדנאות מועברות בצורה חווייתית המשלבת למידה ומשחק.
                        </p>
                    </div>
                </section>

                {/* בלוק 2: סדנאות ואימונים אישיים (במבנה הפוך לזיג-זג) */}
                <section className="bg-white text-[#1A2B3C] rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row-reverse items-center gap-10">
                    <div className="md:w-1/2 overflow-hidden rounded-2xl">
                        <img
                            src="/images/classes/workshop.jpg"
                            alt="סדנת שחמט"
                            className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="md:w-1/2 text-right">
                        <h2 className="text-3xl font-bold mb-6 text-[#2D3E50] border-r-4 border-[#D4AF37] pr-4">סדנאות ואימונים אישיים</h2>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                            אנחנו מארחים סדנאות אמן עם בכירי השחקנים.
                            בנוסף, ניתן לקבוע אימונים אישיים המותאמים אישית לרמה שלכם,
                            עם ניתוח משחקים מעמיק והכנה מנטלית ומקצועית לתחרויות ארציות ובינלאומיות.
                        </p>
                    </div>
                </section>

                {/* בלוק 3: חוגי ילדים ונוער */}
                <section className="bg-white text-[#1A2B3C] rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2 overflow-hidden rounded-2xl">
                        <img
                            src="/images/classes/youth-classes.jpg"
                            alt="חוגי שחמט לילדים"
                            className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="md:w-1/2 text-right">
                        <h2 className="text-3xl font-bold mb-6 text-[#2D3E50] border-r-4 border-[#D4AF37] pr-4">חוגי שחמט לילדים ונוער</h2>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                            חוגים בקבוצות קטנות המחולקות לפי רמות: מתחילים, מתקדמים ונבחרת המועדון.
                            כל תלמיד מקבל יחס אישי ותוכנית התקדמות מובנית המשלבת טקטיקה, אסטרטגיה ומשחקי אימון מבוקרים.
                        </p>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-[#F5F2EA] py-3 rounded-xl font-bold text-[#2D3E50] text-center border border-[#D4AF37]/20">שיעורים קבוצתיים</div>
                            <div className="bg-[#F5F2EA] py-3 rounded-xl font-bold text-[#2D3E50] text-center border border-[#D4AF37]/20">הכנה למבחני דרגה</div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Classes;