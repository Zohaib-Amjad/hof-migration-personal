/**
 * ButtonArrowIcon
 *
 * Shared arrow icon used inside pill-shaped buttons across the entire site.
 * To swap to your own SVG, replace the <img> src below with your file path,
 * e.g.  src="/images/svg/arrow.svg"
 *
 * The `size` prop controls the diameter of the outer circle (default 28px).
 * The `dark` prop flips the colour scheme to a dark circle with white icon
 * (used in light-background buttons where the circle is #0F1117).
 */

interface ButtonArrowIconProps {
  /** Diameter of the icon circle in pixels. Default: 28 */
  size?: number
  /** If true, renders a dark circle (#0F1117) with a white icon instead of
   *  the default white circle with a dark icon. */
  dark?: boolean
  /** Extra Tailwind classes forwarded to the wrapping <span> */
  className?: string
}

export default function ButtonArrowIcon({
  size = 28,
  dark = false,
  className = '',
}: ButtonArrowIconProps) {
  const circleBg = dark ? 'bg-[#0F1117]' : 'bg-white'
  const iconColor = dark ? 'brightness-0 invert' : ''

  return (
    <span
      className={`flex items-center justify-center rounded-full transition-transform duration-200 ${circleBg} ${className}`}
      style={{ width: size, height: size }}
    >
      {/* 🔁 ARROW ICON SLOT — replace the src below with your own SVG file path */}
      <img
        src="/images/svg/arrow.svg"
        alt=""
        aria-hidden="true"
        className={`w-[45%] h-[45%] ${iconColor} transition-transform duration-200 group-hover:rotate-45`}
      />
    </span>
  )
}
