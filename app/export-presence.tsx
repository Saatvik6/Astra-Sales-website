import Image from "next/image";

export function ExportPresence() {
  return (
    <figure className="exportPresence" aria-label="Our global export presence">
      <Image
        src="/global-export-presence.png.jpg"
        alt="Our global export presence. Delivering trusted healthcare solutions to businesses across the world. World map highlighting Turkey and Singapore, where Astra Sales India supplies healthcare products."
        width={1536}
        height={916}
        sizes="(max-width: 760px) 100vw, 90vw"
        unoptimized
      />
    </figure>
  );
}
