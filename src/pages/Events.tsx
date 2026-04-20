import React from 'react';
import marketAtmosphere from '@/assets/market-mats.jpeg';
import dynamicPlay from '@/assets/chess-play.jpeg';
import focusedHands from '@/assets/focused-play.jpeg';

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
        </div>
      </section>

      <div className="container mx-auto px-4">

        {/* קטגוריה 1: אירועים קרובים - כאן נשים את התחרות הענקית בקרוב */}
        <div className="mb-20">
          <h2 className="text-2xl font-display font-bold mb-8 border-r-4 border-gold pr-4">אירועים קרובים</h2>
          <div className="grid grid-cols-1 gap-10 max-w-6xl mx-auto">

            {/* כרגע נשאיר את התחרות הבאה כ-Featured, בהמשך נחליף אותה בתחרות ה-300 */}
            <div className="bg-primary p-10 rounded-3xl text-primary-foreground shadow-2xl flex flex-col md:flex-row justify-between items-center relative overflow-hidden group border-2 border-gold/20">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              <div className="relative z-10 text-center md:text-right">
                <span className="bg-gold/20 text-gold px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block uppercase tracking-wider">הירשמו עכשיו</span>
                <h3 className="text-3xl md:text-5xl font-bold mb-6 font-display">אליפות ירושלים בשחמט 2026</h3>
                <div className="flex items-baseline justify-center md:justify-start gap-3">
                  <p className="text-4xl md:text-6xl font-bold text-white">18-19/05/2026</p>
                  <span className="text-xl font-medium text-white/70 italic"></span>
                </div>
              </div>
              <div className="mt-8 md:mt-0 relative z-10 w-full md:w-auto">
                <a
                  href="https://s3.chess-results.com/tnr1392680.aspx?lan=1&SNode=S0"
                  target="_blank" // פתיחה בלשונית חדשה
                  rel="noopener noreferrer" // הגנת סייבר קריטית
                  className="inline-block w-full md:w-auto bg-gold text-primary-foreground px-12 py-5 rounded-2xl font-bold text-2xl hover:bg-gold/90 hover:-translate-y-1 transition-all shadow-xl active:scale-95"
                >
                  לפרטים והרשמה
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* קטגוריה 2: מה שהיה (Past Events) */}
        <div>
          <h2 className="text-2xl font-display font-bold mb-8 border-r-4 border-white/30 pr-4 text-white/60">אירועים שהיו</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

            {/* מחצלות בשוק - עכשיו ככרטיס קטן וצנוע יותר */}
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col shadow-md opacity-90 hover:opacity-100 transition-opacity">
              <div className="h-48 mb-6 rounded-2xl overflow-hidden relative">
                <img src={marketAtmosphere} alt="מחצלות בשוק" className="w-full h-full object-cover grayscale-[30%]" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white font-bold border border-white/50 px-4 py-1 rounded-lg">פסח 2026 - הסתיים</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gold mb-3 font-display">מחצלות בשוק מחנה יהודה</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                נהנינו מיומיים של שחמט פתוח לקהל הרחב בלב השוק התוסס. תודה לכל מי שהגיע לשחק!
              </p>
              <div className="mt-auto flex gap-2">
                <span className="text-xs bg-white/10 px-2 py-1 rounded">#קהילה</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded">#שוק_מחנה_יהודה</span>
              </div>
            </div>

            {/* תוצאות התחרות האחרונה */}
            <div className="bg-secondary p-8 rounded-3xl border border-secondary/30 flex flex-col justify-between shadow-md">
              <div>
                {/* הגדלנו את הכותרת ל-2xl ובמחשב ל-3xl */}
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 border-r-4 border-gold pr-4 font-display">
                  תחרות מוצ"ש ויקרא - <span className="text-base md:text-lg text-muted-foreground font-sans font-medium italic">21/03/2026</span>
                </h3>

                <div className="space-y-6">
                  {/* מקום ראשון - הגדלנו ל-2xl ובמחשב ל-3xl */}
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">🥇</span>
                    <span className="text-2xl md:text-3xl font-black text-primary tracking-tight">ניר שאולקר</span>
                  </div>

                  {/* מקום שני - הגדלנו ל-xl ובמחשב ל-2xl */}
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">🥈</span>
                    <span className="text-xl md:text-2xl font-bold text-primary/90">עקיבא שוורץ</span>
                  </div>

                  {/* מקום שלישי - הגדלנו ל-xl ובמחשב ל-2xl */}
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">🥉</span>
                    <span className="text-xl md:text-2xl font-bold text-primary/80">מנחם קרליבך</span>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="https://www.chess.org.il/Clubs/Club.aspx?Id=2413&View=TournamentsCompleted"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary/60 hover:text-gold transition-colors text-sm underline underline-offset-4"
                >
                  לצפייה בהיסטוריית התחרויות ←
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Events;