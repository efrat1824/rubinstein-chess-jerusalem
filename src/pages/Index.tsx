import logo from "@/assets/logo.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={logo} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center space-y-8 px-4 animate-fade-in">
          <img src={logo} alt="לוגו מועדון רובינשטיין" className="w-40 h-40 mx-auto object-contain rounded-full shadow-2xl" />
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground leading-tight">
            מועדון השחמט<br />ע״ש עקיבא רובינשטיין ז"ל
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto">
            הבית שלכם לאסטרטגיה ומחשבה – ירושלים
          </p>
          <a href="tel:0512000004" className="mt-8 inline-block">
            <Button size="lg" className="bg-gold text-primary font-display font-bold text-2xl px-12 py-8 hover:bg-gold/85 shadow-[0_0_30px_rgba(212,175,55,0.4)] border-2 border-gold/50 tracking-wide">
              דברו איתנו
            </Button>
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="container py-20">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: "חוגים ואימונים", desc: "חוגים מסודרים לכל הגילאים ואימונים אישיים עם מאמנים מקצועיים", icon: "♗" },
            { title: "תחרויות", desc: "תחרויות מקומיות וארציות, מפגשי שחמט חופשי ומשחקים ידידותיים", icon: "♖" },
            { title: "קהילה", desc: "קהילה תוססת של שחקנים, חובבים וסקרנים מכל הגילאים והרמות", icon: "♞" },
          ].map((item) => (
            <div key={item.title} className="bg-card p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4 text-primary">{item.icon}</div>
              <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section - ביקורות */}
      <section className="py-20 bg-secondary/10 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              ביקרתם? נהניתם? <br />
              <span className="text-gold">נשמח לשמוע איך היה!</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              המשוב שלכם עוזר לנו להשתפר ולהמשיך להיות הבית של השחמטאים בירושלים.
            </p>
            <div className="pt-4">
              <a 
                href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x1502d708e9544503:0x28973621494f04bd!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                לחצו כאן לכתיבת ביקורת בגוגל ⭐
              </a>
            </div>
          </div>
        </div>
      </section>
{/* תחרויות ואירועים */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">תחרויות ואירועים</h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto font-display">
            
{/* התחרות האחרונה */}
            <div className="bg-secondary/10 p-10 rounded-3xl border border-secondary/30 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-12 border-r-4 border-gold pr-4">
                  התחרות האחרונה
                </h3>
                
                <div className="space-y-6">
                  {/* שורת תאריך */}
                  <div className="flex items-baseline gap-3">
                    <p className="text-3xl md:text-5xl font-display font-bold text-primary tracking-tight">
                      21/03/2026
                    </p>
                    <span className="text-lg md:text-xl font-sans font-medium text-muted-foreground italic">
                      (מוצ"ש)
                    </span>
                  </div>

                  {/* שורת מנצח/ת - בגודל בינוני ומכובד */}
                  <div className="pt-5 border-t border-secondary/20">
                    <p className="text-lg md:text-xl text-muted-foreground font-display leading-relaxed">
                      <span className="font-normal opacity-80">מנצח/ת: </span>
                      <span className="font-semibold text-primary/90">ניר שאולקר</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a 
                  href="https://www.chess.org.il/Clubs/Club.aspx?Id=2413&View=TournamentsCompleted" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-bold text-lg underline underline-offset-8 decoration-2 hover:text-gold transition-colors inline-flex items-center gap-2"
                >
                  לצפייה בהיסטוריית התחרויות ←
                </a>
              </div>
            </div>

           {/* התחרות הבאה - מעודכן עם תאריך סופי */}
            <div className="bg-primary p-10 rounded-3xl text-primary-foreground shadow-2xl flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-10 border-r-4 border-gold pr-4">התחרות הבאה</h3>
                <div className="flex items-baseline gap-3 py-4">
                  <p className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
                    11/04/2026
                  </p>
                  <span className="text-lg md:text-xl font-sans font-medium text-white/70 italic">
                    (מוצ"ש)
                  </span>
                </div>
              </div>
              
              <div className="mt-12 relative z-10">
                <a 
                  href="tel:0512000004" 
                  className="inline-block w-full bg-gold text-primary-foreground text-center px-10 py-4 rounded-xl font-bold text-xl hover:bg-gold/90 hover:-translate-y-1 transition-all shadow-lg active:scale-95"
                >
                  לפרטים והרשמה
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
