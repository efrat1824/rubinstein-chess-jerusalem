import logo from "@/assets/logo.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `repeating-conic-gradient(hsl(var(--primary-foreground)) 0% 25%, transparent 0% 50%)`,
            backgroundSize: '60px 60px',
          }} />
        </div>
        <div className="relative z-10 text-center space-y-8 px-4 animate-fade-in">
          <img src={logo} alt="לוגו מועדון רובינשטיין" className="w-40 h-40 mx-auto object-contain rounded-lg shadow-2xl" />
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground leading-tight">
            מועדון השחמט<br />ע״ש עקיבא רובינשטיין
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto">
            הבית שלכם לאסטרטגיה ומחשבה – ירושלים
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="container py-20">
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
