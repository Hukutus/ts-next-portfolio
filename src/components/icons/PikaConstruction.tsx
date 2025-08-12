import Image from 'next/image';

export default function PikaConstruction() {
  return (
    <Image
      src="/pikaconstruction.gif"
      alt="Animated GIF"
      width={150}
      height={100}
      unoptimized
      priority={false}
    />
  );
}
