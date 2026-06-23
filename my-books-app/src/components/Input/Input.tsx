type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    ref?: React.Ref<HTMLInputElement>;
}
export const Input = ({ label, ref, ...rest }: InputProps) => {
    return (
        <div>
            <label htmlFor={rest.id}>
                {label}
                <input {...rest} ref={ref} />
            </label>
        </div>
    )
}