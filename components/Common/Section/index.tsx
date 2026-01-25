
import { ReactNode } from "react";

type PaddingSize = "xs" | "sm" | "md" | "lg" | "xl";

interface Props {
  children: ReactNode;
  variant?: "wide" | "contained";
  className?: string;
  pt?: PaddingSize;
  pb?: PaddingSize;
  pl?: PaddingSize;
  pr?: PaddingSize;
  px?: PaddingSize;
  py?: PaddingSize;
  p?: PaddingSize;
}

const paddingMap: Record<PaddingSize, Record<string, string>> = {
  xs: { p: "p-2", px: "px-2", py: "py-2", pt: "pt-2", pb: "pb-2", pl: "pl-2", pr: "pr-2" },
  sm: { p: "p-4", px: "px-4", py: "py-4", pt: "pt-4", pb: "pb-4", pl: "pl-4", pr: "pr-4" },
  md: { p: "p-8", px: "px-8", py: "py-8", pt: "pt-8", pb: "pb-8", pl: "pl-8", pr: "pr-8" },
  lg: { p: "p-18", px: "px-18", py: "py-18", pt: "pt-18", pb: "pb-18", pl: "pl-18", pr: "pr-18" },
  xl: { p: "p-32", px: "px-32", py: "py-32", pt: "pt-32", pb: "pb-32", pl: "pl-32", pr: "pr-32" },
};

/**
 * A versatile section component for consistent layout across the application.
 *
 * @param {object} props - The component props.
 * @param {ReactNode} props.children - The content to be rendered inside the section.
 * @param {'wide' | 'contained'} [props.variant='contained'] - The width variant of the section.
 * @param {string} [props.className] - Additional classes to apply to the section.
 * @param {PaddingSize} [props.p] - Applies padding to all sides.
 * @param {PaddingSize} [props.pt] - Applies padding to the top.
 * @param {PaddingSize} [props.pb] - Applies padding to the bottom.
 * @param {PaddingSize} [props.pl] - Applies padding to the left.
 * @param {PaddingSize} [props.pr] - Applies padding to the right.
 * @param {PaddingSize} [props.px] - Applies horizontal padding (left and right).
 * @param {PaddingSize} [props.py] - Applies vertical padding (top and bottom).
 * @returns {JSX.Element} The rendered section component.
 */
const Section = ({
  children,
  variant = "contained",
  className = "",
  p,
  pt,
  pb,
  pl,
  pr,
  px,
  py,
}: Props) => {
  const getVariantClass = () => {
    switch (variant) {
      case "wide":
        return "w-full";
      case "contained":
        return "max-w-c-1390 mx-auto";
      default:
        return "max-w-c-1390 mx-auto";
    }
  };

  const getPaddingClasses = () => {
    const classes: string[] = [];
    if (p) classes.push(paddingMap[p].p);
    if (pt) classes.push(paddingMap[pt].pt);
    if (pb) classes.push(paddingMap[pb].pb);
    if (pl) classes.push(paddingMap[pl].pl);
    if (pr) classes.push(paddingMap[pr].pr);
    if (px) classes.push(paddingMap[px].px);
    if (py) classes.push(paddingMap[py].py);
    return classes.join(" ");
  };

  return <div className={`${getVariantClass()} ${getPaddingClasses()} ${className}`}>{children}</div>;
};

export default Section;
