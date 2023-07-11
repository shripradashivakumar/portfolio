type Checkbox = {
  label: string;
  value: boolean;
  onChange: () => void;
};
export default function Checkbox({ label, value, onChange }: Checkbox) {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      <span className="md:text-sm md:mx-1 lg:text-lg lg:mx-2 hover:text-gray-500">
        {label}
      </span>
    </label>
  );
}
