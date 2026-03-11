import Image from "next/image";
import star from "@/assets/svg/star.svg";
import starOutline from "@/assets/svg/star-outline.svg";

export default function RatingStars({ rating }: { rating: number }) {
  const totalStars = 5;
  
  return (
    <div className="flex gap-1">
      {Array.from({ length: totalStars }, (_, i) => {
        const isFilled = i < Math.floor(rating);
        
        return (
          <Image 
            key={i}
            src={isFilled ? star : starOutline} 
            width={16} 
            height={16} 
            alt={isFilled ? "active star" : "empty star"} 
          />
        );
      })}
    </div>
  );
}
