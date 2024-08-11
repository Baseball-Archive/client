import React, { ForwardedRef } from "react";

type InputSize = "large" | "medium" | "small";
type InputScheme = "primary" | "secondary" | "danger";
type InputType = "text" | "email" | "password" | "number";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    inputType: InputType;
    size: InputSize;
    scheme: InputScheme;
}

const SIZE_MAP: Record<InputSize, string> = {
    large: "w-[818px] h-[82px]",
    medium: "py-2 px-4",
    small: "py-1 px-2",
};

const SCHEME_MAP: Record<InputScheme, string> = {
    primary: "bg-button-primary",
    secondary: "bg-button-secondary",
    danger: "bg-button-danger",
};

const InputText = React.forwardRef(({
    placeholder = "Enter text",
    inputType = "text",
    size = "medium",
    scheme = "primary",
    onChange,
    ...props
}: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <input
            className={`${SIZE_MAP[size]} ${SCHEME_MAP[scheme]}`}
            placeholder={placeholder}
            ref={ref}
            type={inputType}
            onChange={onChange}
            {...props}
        />
    );
});

export default InputText;
