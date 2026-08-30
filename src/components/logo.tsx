import { LogoMark } from "@/components/logo-mark";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  alt = "Sörhuus",
  size = "nav",
}: {
  className?: string;
  alt?: string;
  size?: "nav" | "hero" | "footer";
}) {
  const mark =
    size === "hero"
      ? "h-[5.5rem] w-auto sm:h-[7.5rem] md:h-[8.75rem]"
      : size === "footer"
        ? "h-[3.25rem] w-auto sm:h-[3.75rem]"
        : "h-[2.6rem] w-auto sm:h-[3rem]";

  return (
    <span
      className={cn("inline-flex text-fg", className)}
      aria-label={alt}
      role="img"
    >
      <LogoMark className={cn("overflow-visible", mark)} />
    </span>
  );
}
