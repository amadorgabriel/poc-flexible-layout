import { InputHTMLAttributes, KeyboardEvent, useRef } from "react";
import { generateUUID } from "@/utils/generate-uuid";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onEnter?: () => void;
}

export const TextInput = ({ label, onEnter, ...rest }: TextInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const uuid = generateUUID();
  const current = inputRef.current;

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onEnter?.();
    }
  }

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
        onKeyDown={handleKeyDown}
      />
    </fieldset>
  );
};
