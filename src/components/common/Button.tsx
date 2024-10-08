type ButtonSize = 'large' | 'medium' | 'small';
type ButtonScheme = 'primary' | 'secondary' | 'danger';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: ButtonSize;
  scheme: ButtonScheme;
}

const DEFAULT_STYLE =
  'inline-flex items-center justify-center font-bold text-white';
const SIZE_MAP: Record<ButtonSize, string> = {
  large: 'w-[263px] h-[66px] rounded-xl',
  medium: 'w-[200px] py-3 px-2 rounded-xl',
  small: 'py-1 px-3 text-sm rounded-lg',
};
const SCHEME_MAP: Record<ButtonScheme, string> = {
  primary: 'bg-button-primary',
  secondary: 'bg-button-secondary',
  danger: 'bg-button-danger',
};

const Button = ({ children, size, scheme, ...rest }: Props) => {
  return (
    <button
      className={`${DEFAULT_STYLE} ${SIZE_MAP[size]} ${SCHEME_MAP[scheme]} `}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
