import type { ReactNode } from "react";

interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    children: ReactNode
}
export const Button = ({ onClick, disabled, className, children }: ButtonProps) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`${className} px-4 py-2 text-base bg-primary text-white rounded-md`}>
            {children}
        </button>
    )

}