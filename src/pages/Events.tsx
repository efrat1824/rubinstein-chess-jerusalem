import React from 'react';
import { Users, MapPin, Trophy, Star, Calendar } from 'lucide-react';
import marketAtmosphere from '@/assets/market-mats.jpeg';
import dynamicPlay from '@/assets/chess-play.jpeg';
import focusedHands from '@/assets/focused-play.jpeg';
import championshipImage from '@/assets/Jerusalem-Championship.jpeg';

const Events = () => {
  return (
    <div className="min-h-screen bg-[#3A5264] pb-20 text-white" dir="rtl">
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

        {/* קטגוריה 1: אירועים קרובים */}
        <div className="mb-20">
          <h2 className="text-2xl font-display font-bold mb-8 border-r-4 border-gold pr-4 text-right">אירועים קרובים</h2>
          <div className="grid grid-cols-1 gap-10 max-w-6xl mx-auto">

            {/* כרטיס חוג שחמט למתחילים */}
            <div className="bg-[#2A3F4D] p-8 md:p-10 rounded-3xl border border-gold/30 shadow-xl relative overflow-hidden group">

              {/* אפקט רקע עדין */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
                <div className="space-y-5">
                  <span className="bg-gold/20 text-gold px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest inline-block">
                    הרשמה פתוחה
                  </span>

                  <div>
                    <h3 className="text-3xl font-display font-bold text-white mb-2">חוג שחמט למתחילים</h3>
                    <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
                      נפתח חוג שחמט בהדרכת השחמטאי אבישי כץ. מיועד לשחקנים מתחילים (מד כושר עד 1200) .
                    </p>
                    <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
                      בחוג ילומד: יסודות המשחק, לימוד פתיחות ומהלכים, פתרון טקטיקות
                    </p>
                  </div>

                  {/* שורת הנתונים */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div className="flex items-center gap-2.5 text-white/90">
                      <Calendar className="text-gold" size={20} />
                      <span className="font-medium text-lg">ימי רביעי, 18:00</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-white/90">
                      <MapPin className="text-gold" size={20} />
                      <span className="font-medium text-lg">רחוב יפו (סמוך לתחנה המרכזית)</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-white/90">
                      <Users className="text-gold" size={20} />
                      <span className="font-medium text-lg">קבוצות קטנות</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-white/90">
                      <Star className="text-gold" size={20} />
                      <span className="font-medium text-lg">עלות: 300 ש"ח לחודש</span>
                    </div>
                  </div>
                </div>

                {/* אזור פעולה (כפתור) */}
                <div className="w-full md:w-auto shrink-0 mt-4 md:mt-0">
                  <a
                    href="tel:0512000004"
                    className="inline-block w-full md:w-auto bg-gold text-[#2D3E50] px-10 py-4 rounded-xl font-bold text-xl hover:scale-105 transition-transform shadow-lg text-center"
                  >
                    לפרטים והרשמה
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* קטגוריה 2: מה שהיה (Past Events) */}
        <div>
          <h2 className="text-2xl font-display font-bold mb-8 border-r-4 border-white/30 pr-4 text-white/60 text-right">אירועים שהיו</h2>

          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">

            {/* אליפות ירושלים 2026 - תבנית תמונה */}
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col shadow-md opacity-90 hover:opacity-100 transition-opacity">
              <div className="h-48 mb-6 rounded-2xl overflow-hidden relative">
                {/* התמונה של האליפות */}
                <img src={championshipImage} alt="אליפות ירושלים בשחמט 2026" className="w-full h-full object-cover grayscale-[30%]" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white font-bold border border-white/50 px-4 py-1 rounded-lg flex items-center gap-2">
                    <Star size={14} className="text-gold" /> מאי 2026 - הסתיים
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gold mb-3 font-display text-right">אליפות ירושלים בשחמט 2026</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6 text-right">
                אירוע השחמט הגדול של ירושלים בהשתתפות 300 שחקנים ורבי אומנים מכל העולם. חוויה קהילתית ותחרותית ברמה הבינלאומית הגבוהה ביותר.
              </p>
              <div className="mt-auto flex justify-start gap-2 flex-wrap">
                <span className="text-xs bg-white/10 px-2 py-1 rounded">#אליפות_ירושלים</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded">#שחמט_מקצועי</span>

              </div>
            </div>
            {/* מחצלות בשוק */}
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col shadow-md opacity-90 hover:opacity-100 transition-opacity">
              <div className="h-48 mb-6 rounded-2xl overflow-hidden relative">
                <img src={marketAtmosphere} alt="מחצלות בשוק" className="w-full h-full object-cover grayscale-[30%]" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white font-bold border border-white/50 px-4 py-1 rounded-lg">פסח 2026 - הסתיים</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gold mb-3 font-display text-right">מחצלות בשוק מחנה יהודה</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6 text-right">
                נהנינו מיומיים של שחמט פתוח לקהל הרחב בלב השוק התוסס. תודה לכל מי שהגיע לשחק!
              </p>
              <div className="mt-auto flex justify-start gap-2">
                <span className="text-xs bg-white/10 px-2 py-1 rounded">#קהילה</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded">#שוק_מחנה_יהודה</span>
              </div>
            </div>

            {/* תוצאות התחרות האחרונה (הכנה לאליפות) */}
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col shadow-md opacity-90 hover:opacity-100 transition-opacity">
              <div className="text-right">
                <h3 className="text-2xl md:text-3xl font-bold text-gold mb-8 border-r-4 border-gold pr-4 font-display">
                  הכנה לאליפות ירושלים הפתוחה בשח מהיר – <span className="text-base md:text-lg text-white/60 font-sans font-medium italic">30/04/2026</span>
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center justify-start gap-4">
                    <span className="text-4xl">🥇</span>
                    <span className="text-2xl md:text-3xl font-black text-white tracking-tight">אייל פרידליך</span>
                  </div>
                  <div className="flex items-center justify-start gap-4">
                    <span className="text-3xl">🥈</span>
                    <span className="text-xl md:text-2xl font-bold text-white/90">יהודה גמרי</span>
                  </div>
                  <div className="flex items-center justify-start gap-4">
                    <span className="text-3xl">🥉</span>
                    <span className="text-xl md:text-2xl font-bold text-white/80">דניאל מוסקוביץ</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 text-right">
                <a
                  href="https://www.chess.org.il/Clubs/Club.aspx?Id=2413&View=TournamentsCompleted"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-gold transition-colors text-sm underline underline-offset-4"
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