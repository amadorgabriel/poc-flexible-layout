import { InputHTMLAttributes, useEffect, useRef } from "react";
import { generateUUID } from "@/utils/generate-uuid";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const TextInput = ({ label, ...rest }: TextInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const uuid = generateUUID();
  const current = inputRef.current;

  return (
    <fieldset>
      <label htmlFor={uuid}>{label}:</label>
      <input
        {...rest}
        ref={inputRef}
        id={uuid}
        onClick={() => {
          current?.focus();
        }}
        onFocus={(e) => {
          e.target.select();
        }}
      />
    </fieldset>
  );
};
