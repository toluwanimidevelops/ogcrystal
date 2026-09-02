import React from 'react';

interface InputProps {
  title: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)  => void;
    type: string;
    isImportant: boolean;
    value: string;
    name:string
}

export default function Input({
  title,
  isImportant,
  placeholder,
  handleChange,
  type,
  value,
  name
}: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full ">
      <label className="text-sm font-medium text-gray-700">
        {title} {isImportant? <span className="text-red-500">*</span>:""}
      </label>
      <div className="flex items-center text-sm bg-transparent h-12 border rounded border-gray-500/30 w-full">
        <input
          className="px-2 w-full h-full outline-none text-gray-700 bg-transparent"
                  type={type}
                  required={isImportant}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}