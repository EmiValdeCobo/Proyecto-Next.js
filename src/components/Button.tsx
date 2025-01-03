"use client";

type ButtonProps = {
    text: string;
    onClick: (e?: React.MouseEvent<HTMLButtonElement> | React.FormEvent) => void;
    variant?: "primary" | "secondary";
};

export default function Button({ text, onClick, variant = "primary" }: ButtonProps) {
    const baseStyle = "px-4 py-2 rounded-lg font-bold transition-all";
    const styles =
        variant === "primary"
            ? "bg-blue-500 text-white hover:bg-blue-700"
            : "bg-red-500 text-white hover:bg-red-700";

    return (
        <button className={`${baseStyle} ${styles}`} onClick={onClick}>
            {text}
        </button>
    );
}
