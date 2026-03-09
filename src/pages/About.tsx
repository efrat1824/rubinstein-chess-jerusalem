

const About = () => {
  return (
    <div dir="rtl" className="min-h-screen relative" style={{ backgroundColor: '#4A6274' }}>
      <div className="container py-16 max-w-3xl relative z-10">
      <h1 className="text-4xl font-display font-bold mb-8 text-center text-primary-foreground">קצת על המועדון</h1>
      <div className="h-1 w-20 bg-gold mx-auto mb-12 rounded-full" />

      <div className="space-y-6 text-primary-foreground/90 leading-relaxed text-lg">
        <p>
          ברוכים הבאים למועדון השחמט של ירושלים – הבית שלכם לאסטרטגיה ומחשבה.
        </p>
        <p>
          המועדון שלנו הוא נקודת מפגש לקהילה תוססת של שחקנים, חובבים וסקרנים, בכל הגילאים ובכל הרמות. אנחנו מאמינים ששחמט הוא שפה בינלאומית שמחברת בין אנשים, מפתחת את המחשבה ומעניקה כלים לחיים.
        </p>

        <h2 className="text-2xl font-display font-bold pt-4 text-primary-foreground">מה קורה אצלנו במועדון?</h2>
        <p>
          אנחנו פתוחים לאורך כל היום, מהבוקר ועד הערב, ומתאימים את עצמנו אליכם. תמצאו כאן ילדים שעושים את הצעדים הראשונים שלהם על הלוח (ולומדים בדרך על סבלנות וקבלת החלטות), מבוגרים שבאים לחדד את המחשבה, וחבר׳ה מקצועיים שמתאמנים ברצינות לקראת התחרות הבאה.
        </p>
        <p>
          יש לנו הכל – מחוגים מסודרים ואימונים אישיים ועד לתחרויות מקומיות ומפגשי ״שחמט חופשי״ למי שרק רוצה משחק ידידותי על כוס קפה.
        </p>

        <h2 className="text-2xl font-display font-bold pt-4 text-primary-foreground">למי המועדון מתאים?</h2>
        <p>
          לכולם. באמת. לא משנה אם אתם כבר יודעים לתכנן עשרה מהלכים קדימה או שאתם עדיין מתבלבלים בין הצריח לרץ – יש לכם מקום אצלנו. אנחנו מאמינים שכל אחד יכול למצוא את עצמו ליד הלוח, ובדיוק בשביל זה אנחנו כאן.
        </p>
        <p>
          אנחנו מזמינים אתכם לקפוץ לבקר, להתרשם מהאווירה ואולי אפילו להישאר למשחק.
        </p>
        <p className="text-xl font-display font-bold text-center pt-6 text-gold">
          כי אצלנו הלוח תמיד מוכן, והדלת תמיד פתוחה.
        </p>
      </div>
      </div>
    </div>
  );
};

export default About;
