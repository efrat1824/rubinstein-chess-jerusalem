import { useState } from "react";
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";
import gallery7 from "@/assets/gallery/gallery-7.jpg";
import gallery8 from "@/assets/gallery/gallery-8.jpg";
import gallery9 from "@/assets/gallery/gallery-9.jpg";
import gallery10 from "@/assets/gallery/gallery-10.jpg";

const galleryImages = [
  { src: gallery1, alt: "משחקי שחמט בחוץ בירושלים" },
  { src: gallery2, alt: "תחרות שחמט במועדון" },
  { src: gallery3, alt: "ערב שחמט במועדון" },
  { src: gallery4, alt: "קבוצת השחקנים עם מדליות" },
  { src: gallery5, alt: "שחמט רחוב בשוק מחנה יהודה" },
  { src: gallery6, alt: "משחקי שחמט ברחוב יפו" },
  { src: gallery7, alt: "תחרות שחמט פנימית" },
  { src: gallery8, alt: "משחק שחמט קלאסי" },
  { src: gallery9, alt: "שחמט בכיכר ציון" },
  { src: gallery10, alt: "שחמט בדשא בירושלים" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div dir="rtl" className="container py-16">
      <h1 className="text-4xl font-display font-bold mb-8 text-center">גלריה</h1>
      <div className="h-1 w-20 bg-gold mx-auto mb-12 rounded-full" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, i) => (
          <div
            key={i}
            className="aspect-square overflow-hidden rounded-lg border cursor-pointer"
            onClick={() => setSelectedImage(i)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
