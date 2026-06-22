type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
}
export const Input = ({ label, ...rest }: InputProps) => {
    return (
        <div>
            <label htmlFor={rest.id}>
                {label}
                <input {...rest} />
            </label>
        </div>
    )
}