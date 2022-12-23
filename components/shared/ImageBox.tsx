import { urlForImage } from "lib/sanity.image";
import Image from "next/image";

interface ImageBoxProps {
  image?: { asset?: any };
  alt?: string;
  width?: number;
  height?: number;
  size?: string;
  classesWrapper?: string;
  priority?: boolean;
  isFill?: boolean;
}

export default function ImageBox({
  image,
  alt = "Cover image",
  width = 3500,
  height = 2000,
  size = "100vw",
  classesWrapper,
  priority = false,
  isFill = false,
}: ImageBoxProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit("crop").url();

  return (
    <div className={`w-full overflow-hidden ${classesWrapper}`}>
      {imageUrl && !isFill ? (
        <Image
          className="absolute h-full w-full"
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          src={imageUrl}
          priority={priority}
        />
      ) : (
        <Image
          className="absolute object-cover h-full w-full"
          alt={alt}
          fill
          src={imageUrl}
          priority={priority}
        />
      )}
    </div>
  );
}
