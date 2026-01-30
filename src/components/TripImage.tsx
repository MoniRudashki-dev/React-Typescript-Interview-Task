import { useMemo, useState } from "react";

type TripImageProps = {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
};

export const TripImage = (props: TripImageProps) => {
  const [hasError, setHasError] = useState(false);

  const fallbackUrl = useMemo(() => {
    return `${import.meta.env.BASE_URL}${props.fallbackSrc ?? "background.jpg"}`;
  }, [props.fallbackSrc]);

  const imageSrc = hasError ? fallbackUrl : props.src;

  return (
    <img
      className={`${props.className}`}
      src={imageSrc}
      alt={props.alt}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
};

export default TripImage;
