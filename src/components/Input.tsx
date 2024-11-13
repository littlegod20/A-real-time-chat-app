interface InputProps {
  title: string;
  value: string;
  name: string;
  onChange?: () => void;
}

const Input: React.FC<InputProps> = ({ title, value, name, onChange }) => {
  return (
    <>
      <div className="flex flex-col space-y-2 w-full">
        <label htmlFor={name} className="text-sky-950 font-semibold text-sm">
          {title}
        </label>
        <input
          id={name}
          name={name}
          value={value}
          className="w-full border rounded-md focus-visible:outline-none focus-visible:border-sky-700 p-2"
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Input;
