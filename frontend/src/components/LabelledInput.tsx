import { ChangeEvent } from "react";

interface labelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: labelledInputType) {
  return (
    <div className="pt-4">
      <label htmlFor="inputbox" className="block mb-2 text-sm font-bold">
        {label}
      </label>
      <input
        type={type || "text"}
        id="inputbox"
        className="border border-gray-300 text-sm rounded-lg block w-full p-2.5"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
