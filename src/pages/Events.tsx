import React from 'react';
import { Users, MapPin, Trophy, Star } from 'lucide-react';
// ייבוא התמונות שלך
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

        {/* קטגוריה 1: אירועים קרובים - אירוע הפרימיום */}
        <div className="mb-20">
          <h2 className="text-2xl font-display font-bold mb-8 border-r-4 border-gold pr-4 text-right">אירועים קרובים</h2>
          <div className="grid grid-cols-1 gap-10 max-w-6xl mx-auto">

            {/* כרטיס אליפות ירושלים 2026 - עיצוב יוקרתי ומלא חיים */}
            {/* השינוי כאן: animate-breathing-gold למסגרת כולה */}
            <div className="bg-[#2A3F4D] p-1 md:p-2 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-2 border-gold/30 animate-breathing-gold">

              {/* אפקטים של תאורה ברקע (Glow) */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-[100px] group-hover:bg-gold/20 transition-all duration-700" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />

              <div className="relative z-10 bg-[#2A3F4D]/80 backdrop-blur-sm rounded-[2.3rem] p-8 md:p-12 border border-white/5">

                {/* תגית אירוע מרכזי */}
                <div className="flex justify-center md:justify-start mb-6">
                  {/* השינוי כאן: text-white ו-animate-prominent-pulse להבהוב מטורף */}
                  <span className="flex items-center gap-2 text-white text-base bg-gold/30 px-5 py-2 rounded-full font-black uppercase tracking-widest animate-prominent-pulse shadow-lg">
                    <Star size={18} fill="currentColor" /> אירוע הדגל של ירושלים
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                  {/* צד ימין: תוכן וטקסט */}
                  <div className="text-center md:text-right">
                    <h3 className="text-4xl md:text-6xl font-black text-white mb-6 font-display leading-tight">
                      אליפות ירושלים <br />
                      <span className="text-gold">בשחמט 2026</span>
                    </h3>

                    <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
                      אירוע השחמט הגדול של ירושלים. בוא להיות חלק בתחרות ענק בהשתתפות רבי אומנים מכל העולם, הזדמנות לפגוש על הלוח את צמרת השחמט הבינלאומית. בנוסף פרסים בשווי עשרות אלפי שקלים , אירוע בסדר גדול מטורף שאין מצב להפסיד, מחכים לראותכם על הלוח - מועדון השחמט הירושלמי ע"ש עקיבא רובינשטיין ז"ל
                    </p>

                    {/* שורת פרטים מהירים עם אייקונים */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 text-white/90">
                      <div className="flex items-center gap-2">
                        <div className="bg-gold/10 p-2 rounded-lg text-gold"><Users size={20} /></div>
                        <span className="font-bold">300 שחקנים</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-gold/10 p-2 rounded-lg text-gold"><MapPin size={20} /></div>
                        <span className="font-bold">ירושלים</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-gold/10 p-2 rounded-lg text-gold"><Trophy size={20} /></div>
                        <span className="font-bold">קרן פרסים: 70 אלף ש"ח </span>
                      </div>
                    </div>
                  </div>

                  {/* צד שמאל: תאריך וכפתור */}
                  <div className="flex flex-col items-center justify-center bg-white/5 rounded-[2rem] p-10 border border-white/10 shadow-inner">
                    <div className="text-center mb-8">
                      <p className="text-gold font-bold uppercase tracking-[0.3em] mb-2">מועד האירוע</p>
                      <p className="text-5xl md:text-7xl font-black text-white tracking-tighter">18-19</p>
                      <p className="text-3xl md:text-4xl font-bold text-white/70">מאי 2026</p>
                    </div>

                    <a
                      href="https://s3.chess-results.com/tnr1392680.aspx?lan=1&SNode=S0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-block w-full bg-gold text-primary-foreground px-8 py-5 rounded-2xl font-black text-2xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] active:scale-95 text-center overflow-hidden"
                    >
                      <span className="relative z-10">לפרטים והרשמה </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                    </a>

                    <p className="mt-4 text-white/40 text-sm italic">* מספר המקומות מוגבל </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* קטגוריה 2: מה שהיה (Past Events) */}
        <div>
          <h2 className="text-2xl font-display font-bold mb-8 border-r-4 border-white/30 pr-4 text-white/60 text-right">אירועים שהיו</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

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
              <div className="mt-auto flex justify-end gap-2">
                <span className="text-xs bg-white/10 px-2 py-1 rounded">#קהילה</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded">#שוק_מחנה_יהודה</span>
              </div>
            </div>

            {/* תוצאות התחרות האחרונה */}
            <div className="bg-secondary p-8 rounded-3xl border border-secondary/30 flex flex-col justify-between shadow-md">
              <div className="text-right">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 border-r-4 border-gold pr-4 font-display">
                  תחרות מוצ"ש ויקרא - <span className="text-base md:text-lg text-muted-foreground font-sans font-medium italic">21/03/2026</span>
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center justify-end gap-4">
                    <span className="text-2xl md:text-3xl font-black text-primary tracking-tight">ניר שאולקר</span>
                    <span className="text-4xl">🥇</span>
                  </div>
                  <div className="flex items-center justify-end gap-4">
                    <span className="text-xl md:text-2xl font-bold text-primary/90">עקיבא שוורץ</span>
                    <span className="text-3xl">🥈</span>
                  </div>
                  <div className="flex items-center justify-end gap-4">
                    <span className="text-xl md:text-2xl font-bold text-primary/80">מנחם קרליבך</span>
                    <span className="text-3xl">🥉</span>
                  </div>
                </div>
              </div>
              <div className="mt-10 text-right">
                <a
                  href="https://www.chess.org.il/Clubs/Club.aspx?Id=2413&View=TournamentsCompleted"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary/60 hover:text-gold transition-colors text-sm underline underline-offset-4"
                >
                  לכל התוצאות באיגוד השחמט ←
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