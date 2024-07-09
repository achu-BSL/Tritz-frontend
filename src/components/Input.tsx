import { Input as NexUIInput } from "@nextui-org/react";

interface InputProps {
    label: string;
    type: "email" | "text" | "password";
    placeholder: string;
}

export const Input = ({label, type, placeholder} : InputProps) => {
    return <NexUIInput label={label} type={type} size="md" labelPlacement="outside" placeholder={placeholder} classNames={{
        label: "font-raleway"
    }} />
}