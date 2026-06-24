import { Button } from "../Button/Button"
import { Form } from "../Form/Form"

type LoginFormProps = {
    onLogin: () => void;
}

export const LoginForm = ({ onLogin }: LoginFormProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onLogin();
    }

    return (
        <Form title="Logowanie" onSubmit={handleSubmit}>
            <Button type="submit">Zaloguj</Button>
        </Form>
    )
}