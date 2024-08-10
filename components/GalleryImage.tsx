import Image from "next/image";
// Define an interface for the image data
interface ImageData {
  height: number;
  width: number;
  src: string;
  alt: string;
  marginClass?: string; // Optional property
}

// Define the props for the GalleryImage component
interface GalleryImageProps {
  images: ImageData[];
  reverse?: boolean;
  animation: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ images, reverse = false, animation }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'flex-col-reverse' : ''} ${animation}`}>
      {images.map((img, index) => (
        <Image
          key={index}
          height={img.height}
          width={img.width}
          src={img.src}
          alt={img.alt}
          className={img.marginClass}
        />
      ))}
    </div>
  );
};

export default GalleryImage;
