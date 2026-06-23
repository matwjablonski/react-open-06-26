import { useCallback, useMemo, useRef, useState } from "react";
import { Form } from "../Form/Form"
import { Input } from "../Input/Input"

export const ContactForm = () => {
    const nameInputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        phoneNumber: ''
    });

    const memoizedValue = useMemo(() => {
        return 1000^45
    }, []);

    console.log('memoizedValue', memoizedValue);

    const handleChangeFormData = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }, [formData]);

    const handleFocusNameInput = useCallback(() => {
        nameInputRef.current?.focus();
    }, []);

    return (
        <>
            <button onClick={handleFocusNameInput}>Napisz do nas</button>
            <Form title="Contact us" onSubmit={() => console.log('Form submitted', formData)}>
                <Input name="name" type="text" label="Name" value={formData.name} onChange={handleChangeFormData} ref={nameInputRef} />
                <Input name="message" type="text" label="Message" value={formData.message} onChange={handleChangeFormData} />
                <Input name="phoneNumber" type="text" label="Phone Number" value={formData.phoneNumber} onChange={handleChangeFormData} />
                <button type="submit">Submit</button>
            </Form>
        </>
    )
}