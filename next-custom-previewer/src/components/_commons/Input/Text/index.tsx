import { generateUUID } from "@/utils/generate-uuid";
import { InputHTMLAttributes, KeyboardEvent, useRef } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
  onEnter?: () => void;
}

export const TextInput = ({
  label,
  onEnter,
  errorMessage,
  ...rest
}: TextInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const uuid = generateUUID();
  const current = inputRef.current;

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onEnter?.();
    }
  }

  return (
    <fieldset className={`fieldset ${{ ...rest }.className}`}>
      <div>
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
      </div>
      {errorMessage && <small>{errorMessage}</small>}
    </fieldset>
  );
};
