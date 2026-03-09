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
            מועדון השחמט<br />ע״ש עקיבא רובינשטיין
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

      {/* Gradient transition */}
      <div className="h-24 bg-gradient-to-b from-primary to-background" />

      {/* Features */}
      <section className="container py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: "חוגים ואימונים", desc: "חוגים מסודרים לכל הגילאים ואימונים אישיים עם מאמנים מקצועיים" },
            { title: "תחרויות", desc: "תחרויות מקומיות וארציות, מפגשי שחמט חופשי ומשחקים ידידותיים" },
            { title: "קהילה", desc: "קהילה תוססת של שחקנים, חובבים וסקרנים מכל הגילאים והרמות" },
          ].map((item) => (
            <div key={item.title} className="bg-card p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
