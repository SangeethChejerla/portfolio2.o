import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectCarouselProps {
  images: ProjectImage[];
}

export default function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Carousel
      opts={{
        loop: true,
        startIndex: currentIndex,
      }}
      className="w-full max-w-xl"
      onSelect={(index) => setCurrentIndex(index)}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="border-none shadow-none">
              <CardContent className="p-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
}
