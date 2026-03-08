const galleryImages: string[] = [];

const Gallery = () => {
  return (
    <div dir="rtl" className="container py-16">
      <h1 className="text-4xl font-display font-bold mb-8 text-center">גלריה</h1>
      <div className="h-1 w-20 bg-gold mx-auto mb-12 rounded-full" />

      {galleryImages.length === 0 ? (
        <div className="text-center py-20 bg-card rounded-lg border">
          <p className="text-muted-foreground text-lg">תמונות יתווספו בקרוב...</p>
          <p className="text-muted-foreground text-sm mt-2">הגלריה תתעדכן עם תמונות מפעילויות המועדון</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-lg border">
              <img src={src} alt={`תמונה ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
