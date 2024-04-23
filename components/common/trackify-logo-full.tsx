import Image from "next/image";

export const TrackifyLogoFull = ({ className }: { className?: string }) => (
  <Image
    className={className}
    src="/trackify.svg"
    width={300}
    height={100}
    alt="Trackify"
  />
);
