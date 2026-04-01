import React from 'react';
// אנחנו מייבאים את הגרסאות המשופצות (Reborn) של התמונות
import marketAtmosphere from '@/assets/market-mats.jpeg'; // derived from
import dynamicPlay from '@/assets/chess-play.jpeg';     // derived from
import focusedHands from '@/assets/focused-play.jpeg';   // derived from

const Events = () => {
  return (
    <div className="min-h-screen bg-[#3A5264] pb-20 text-white">
      {/* כותרת העמוד */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            אירועים ותחרויות
          </h1>
          <div className="h-1.5 w-24 bg-gold mx-auto rounded-full" />
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            הצטרפו אלינו לאירועי השחמט המרכזיים בירושלים
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto font-display">

          {/* הבלוק של מחצלות בשוק - גרסה מפוזרת */}
          <div className="bg-gradient-to-br from-amber-500/10 via-background to-amber-900/10 p-10 rounded-3xl border-2 border-gold/30 shadow-2xl relative overflow-hidden group md:col-span-2 min-h-[550px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-10 items-center">

              <div className="col-span-1 lg:col-span-3">
                <h3 className="text-3xl md:text-5xl font-black text-primary mb-8 tracking-tight relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-[200%] animate-[shimmer_2s_infinite] -z-10" />
                  מחצלות בשוק - חול המועד פסח!
                </h3>

                {/* כאן מגיע השינוי: הוספנו mt-10 ועדכנו את גדלי הפונט */}
                <div className="space-y-6 font-sans mt-10">
                  <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground">
                    המועדון שלנו יהיה סגור כל חג הפסח אבל אל דאגה, אנחנו באים לשוק מחנה יהודה!
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed text-foreground opacity-90 font-normal">
                    נפרוס מחצלות, נציב לוחות משחק, ואתם מוזמנים. פשוט בואו. לשחק מול שחקנים מנוסים, להכיר את הקהילה המדהימה שלנו וליהנות מאווירת חג ירושלמית אותנטית.
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap md:flex-nowrap gap-4">

                  {/* משבצת: מתי */}
                  <div className="flex-1 min-w-[150px] aspect-square bg-secondary p-6 rounded-2xl border border-secondary/30 flex flex-col justify-center items-center text-center shadow-sm">
                    <p className="text-sm md:text-base font-bold text-muted-foreground uppercase tracking-widest mb-3">🗓️ מתי?</p>
                    <div className="text-primary">
                      <p className="text-xl md:text-2xl font-black leading-none">5-6.4.2026</p>
                      <p className="text-lg md:text-xl font-bold mt-2">14:00-22:00</p>
                    </div>
                  </div>

                  {/* משבצת: איפה */}
                  <div className="flex-1 min-w-[150px] aspect-square bg-secondary p-6 rounded-2xl border border-secondary/30 flex flex-col justify-center items-center text-center shadow-sm">
                    <p className="text-sm md:text-base font-bold text-muted-foreground uppercase tracking-widest mb-3">📍 איפה?</p>
                    <div className="text-primary">
                      <p className="text-xl md:text-2xl font-black leading-tight">שוק מחנה יהודה</p>
                      <p className="text-lg md:text-xl font-bold mt-1">ירושלים</p>
                    </div>
                  </div>

                  {/* משבצת: עלות */}
                  <div className="flex-1 min-w-[150px] aspect-square bg-secondary p-6 rounded-2xl border border-secondary/30 flex flex-col justify-center items-center text-center shadow-sm">
                    <p className="text-sm md:text-base font-bold text-muted-foreground uppercase tracking-widest mb-3">🏷️ עלות?</p>
                    <div className="text-primary">
                      <p className="text-2xl md:text-3xl font-black leading-none">חינם</p>
                      <p className="text-lg md:text-xl font-bold mt-2">ופתוח לכולם</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* צד שמאל: בועות אווירה מפוזרות - הגרסה המוגדלת */}
              <div className="col-span-1 lg:col-span-2 relative h-[500px] mt-10 lg:mt-0 flex items-center justify-center">

                {/* התמונה הגדולה ביותר: אווירת השוק (Reborn) */}
                {/* הגדלנו אותה ל-w-80 h-80 במסכים גדולים - היא עכשיו ה"עוגן" הויזואלי */}
                <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-gold shadow-2xl z-10 -translate-x-12 hover:scale-105 transition-transform duration-700">
                  <img src={marketAtmosphere} alt="אווירת שוק מחנה יהודה" className="w-full h-full object-cover" />
                </div>

                {/* תמונה בינונית: ידיים ממוקדות */}
                <div className="absolute top-0 right-4 w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-xl z-20 rotate-6 hover:rotate-0 transition-all duration-500">
                  <img src={focusedHands} alt="מיקוד במהלך שחמט" className="w-full h-full object-cover" />
                </div>

                {/* תמונה קטנה: משחק פעיל */}
                <div className="absolute bottom-8 right-12 w-40 h-40 rounded-full overflow-hidden border-4 border-gold/50 shadow-lg z-20 -rotate-3 hover:rotate-0 transition-all duration-500">
                  <img src={dynamicPlay} alt="משחק שחמט בשוק" className="w-full h-full object-cover" />
                </div>

              </div>

            </div>
          </div>

          {/* התחרות האחרונה */}
          <div className="bg-secondary p-8 rounded-3xl border border-secondary/30 flex flex-col justify-between shadow-md col-span-1">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-8 border-r-4 border-gold pr-4">
                התחרות האחרונה - <span className="text-lg md:text-xl text-muted-foreground font-sans font-medium italic">21/03/2026</span>
              </h3>
              <div className="space-y-6 pt-4 border-t border-primary/5">
                <div className="flex items-center gap-4 py-2">
                  <span className="text-5xl">🥇</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">מקום ראשון</span>
                    <span className="text-3xl font-black text-primary tracking-tight">ניר שאולקר</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-1">
                  <span className="text-3xl">🥈</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">מקום שני</span>
                    <span className="text-lg font-bold text-primary/90">עקיבא שוורץ</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-1">
                  <span className="text-3xl">🥉</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">מקום שלישי</span>
                    <span className="text-lg font-bold text-primary/80">מנחם קרליבך</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="https://www.chess.org.il/Clubs/Club.aspx?Id=2413&View=TournamentsCompleted"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold text-base underline underline-offset-8 decoration-1 hover:text-gold transition-colors inline-flex items-center gap-2"
              >
                לצפייה בהיסטוריית התחרויות ←
              </a>
            </div>
          </div>
          {/* התחרות הבאה */}
          <div className="bg-primary p-10 rounded-3xl text-primary-foreground shadow-2xl flex flex-col justify-between relative overflow-hidden group col-span-1">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-10 border-r-4 border-gold pr-4">התחרות הבאה</h3>
              <div className="flex items-baseline gap-3 py-4">
                <p className="text-3xl md:text-5xl font-bold text-white tracking-tight">11/04/2026</p>
                <span className="text-lg md:text-xl font-sans font-medium text-white/70 italic">(מוצ"ש)</span>
              </div>
            </div>
            <div className="mt-12 relative z-10">
              <a href="tel:0512000004" className="inline-block w-full bg-gold text-primary-foreground text-center px-10 py-4 rounded-xl font-bold text-xl hover:bg-gold/90 hover:-translate-y-1 transition-all shadow-lg active:scale-95">
                לפרטים והרשמה
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Events;