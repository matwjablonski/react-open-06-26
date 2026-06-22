import type { PropsWithChildren } from "react";

type FormProps = PropsWithChildren<{
    title: string;
    onSubmit?: (e: React.SubmitEvent<HTMLFormElement>) => void;
}>;

export const Form = ({ title, onSubmit, children }: FormProps) => {

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted');
        onSubmit?.(e);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>{title}</h1>
            {children}
        </form>
    )
}