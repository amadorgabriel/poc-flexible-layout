import { HTMLAttributes, ReactNode } from "react";

export interface FloatingMenuProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "transparent" | "default";
}

export interface FloatingMenuTitleProps {
  title: string;
  icon: ReactNode;
}
