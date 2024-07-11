import { Input as NexUIInput } from "@nextui-org/react";
import { forwardRef, Ref } from "react";

interface InputProps {
  label: string;
  type: "email" | "text" | "password" | "number";
  placeholder: string;
}

export const Input = forwardRef(
  ({ label, type, placeholder, ...rest }: InputProps, ref) => {
    return (
      <NexUIInput
        label={label}
        type={type}
        size="md"
        labelPlacement="outside"
        placeholder={placeholder}
        classNames={{
          label: "font-raleway",
        }}
        {...rest}
        ref={ref as Ref<HTMLInputElement>}
      />
    );
  }
);
