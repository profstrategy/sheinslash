"use client";
import { cn } from '@/lib/utils';

interface UniqueEmporiumLogoProps {
  className?: string;
  alt?: string;
}

const TaltexLogo = ({ className, alt = "Unique Emporium Logo" }: UniqueEmporiumLogoProps) => {
  return (
    <img
      src="/taltex-logo.png"
      alt={alt}
      className={cn("h-auto", className)}
    />
  );
}

export default TaltexLogo;