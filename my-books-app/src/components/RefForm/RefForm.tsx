import { useRef } from "react"

export const RefForm = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('nameRef', nameRef.current?.value);
        console.log('emailRef', emailRef.current?.value);
        console.log('passwordRef', passwordRef.current?.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" ref={nameRef} />
            <input name="email" type="email" ref={emailRef} />
            <input name="password" type="password" ref={passwordRef} />
            <button type="submit">Submit</button>
        </form>
    )
}