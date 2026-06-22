import { useState } from "react"

export const StateForm = ({ children }: { children?: React.ReactNode }) => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });

        console.log('formState', formState);
    }

    return (
        <form>
            <input name="name" type="text" value={formState.name} onChange={handleChange} />
            <input name="email" type="email" value={formState.email} onChange={handleChange} />
            <input name="password" type="password" value={formState.password} onChange={handleChange} />
            {children}
            <button type="submit">Submit</button>
        </form>
    )
}