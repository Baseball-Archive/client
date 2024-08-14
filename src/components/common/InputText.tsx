import React, { ForwardedRef } from 'react';

type InputSize = 'large' | 'medium' | 'small';
type InputScheme = 'primary' | 'secondary' | 'danger';
type InputType = 'text' | 'email' | 'password' | 'number' | 'username';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  inputType: InputType;
  inputSize: InputSize;
  scheme: InputScheme;
}

const SIZE_MAP: Record<InputSize, string> = {
  large: 'w-[359px] h-[45px] shrink-0',
  medium: 'w-[263px] h-[45px] shrink-0',
  small: 'py-1 px-2',
};


const SCHEME_MAP: Record<InputScheme, string> = {
  primary: 'border-2 rounded border-[#A9A9A9] bg-white',
  secondary: 'bg-input-secondary',
  danger: 'border-2 rounded border-rose-600 bg-white',
};

// border-radius: 4px;
// border: 0.5px solid #A9A9A9;
// background: #FFF;

const InputText = React.forwardRef(
  (
    { placeholder, inputType, inputSize, scheme, onChange, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        className={`${SIZE_MAP[inputSize]} ${SCHEME_MAP[scheme]}`}
        placeholder={placeholder}
        ref={ref}
        type={inputType}
        onChange={onChange}
        {...props}
      />
    );
  },
);

export default InputText;
