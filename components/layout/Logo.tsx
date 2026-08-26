import Link from "next/link";
import Image from "next/image";

export function Logo({
  className,
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center transition-opacity hover:opacity-90 ${className ?? ""}`}
    >
      <Image
        src="/images/logo/horizontal-logo.png"
        alt="Chand Mobile Expert"
        width={240}
        height={70}
        className="h-11 sm:h-12 w-auto object-contain drop-shadow-sm"
        priority
        unoptimized
      />
    </Link>
  );
}
