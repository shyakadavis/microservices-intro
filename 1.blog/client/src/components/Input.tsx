import React from 'react';

type Props = {
  label: string;
  type: string;
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  label,
  type,
  name,
  id,
  value,
  onChange,
}: Props) {
  return (
    <label className="w-full flex flex-col gap-3" htmlFor={id}>
      <span className="text-lg underline decoration-dashed cursor-pointer">
        {label}
      </span>
      <input
        className="py-2 px-3 bg-[#BDE0FE] border-[0.5px] border-[#FFC8DD] backdrop-blur rounded-md shadow-md focus:outline-none focus:ring-1 focus:ring-[#FFC8DD] transition"
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={(e) => onChange(e)}
        autoComplete="off"
        required
      />
    </label>
  );
}
