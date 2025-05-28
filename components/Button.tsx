import clsx from "clsx";
import Link from "next/link";

type Variant = "solid" | "outline";
type ColorSchema = "blue" | "red" | "green";
type SizeWidth = "md" | "full";
type SizeHeight = "sm" | "md";

interface ButtonProps {
  title: string;
  isDisabled?: boolean;
  variant?: Variant;
  colorSchema: ColorSchema;
  width?: SizeWidth;
  height?: SizeHeight;
  isLoading?: boolean;
  href?: string; // ditambahkan untuk mendukung link
}

type Rounded = "none" | "sm" | "md" | "lg" | "full";

interface ButtonProps {
  title: string;
  isDisabled?: boolean;
  variant?: Variant;
  colorSchema: ColorSchema;
  width?: SizeWidth;
  height?: SizeHeight;
  isLoading?: boolean;
  href?: string;
  rounded?: Rounded; // tambahkan prop rounded
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  title,
  isDisabled = false,
  variant = "solid",
  colorSchema,
  width = "md",
  height = "md",
  isLoading = false,
  href,
  rounded = "md", // default rounded
  ...props
}) => {
  const roundedClass = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  }[rounded];

  const baseClass = clsx(
    roundedClass,
    "border capitalize flex items-center justify-center",
    {
      "bg-blue-500 text-white": colorSchema === "blue" && variant === "solid",
      "border-blue-500 text-blue-500":
        colorSchema === "blue" && variant === "outline",
      "bg-red-500 text-white": colorSchema === "red" && variant === "solid",
      "border-red-500 text-red-500":
        colorSchema === "red" && variant === "outline",
      "bg-green-500 text-white": colorSchema === "green" && variant === "solid",
      "border-green-500 text-green-500":
        colorSchema === "green" && variant === "outline",
      "opacity-25 pointer-events-none": isDisabled,
      "w-24": width === "md",
      "w-full": width === "full",
      "h-8": height === "sm",
      "h-12": height === "md",
    }
  );

  if (href) {
    return (
      <Link href={href}>
        <a className={baseClass}>{isLoading ? title : title}</a>
      </Link>
    );
  }

  return (
    <button {...props} disabled={isDisabled} className={baseClass}>
      {isLoading ? title : title}
    </button>
  );
};

export default Button;
