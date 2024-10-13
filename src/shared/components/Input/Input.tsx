import { InputProps } from "./Input.interface";

const Input: React.FC<InputProps> = ({
  type,
  value,
  placeholder,
  name,
  className,
  onChange,
}) => {
  return (
    <div className="input__group">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        className={className}
        onChange={(event) => onChange(event)}
      />
    </div>
  );
};

export default Input;
