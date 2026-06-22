import { useState } from "react";
import { Form } from "../Form/Form"
import { Input } from "../Input/Input"

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        phoneNumber: ''
    });

    const handleChangeFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <Form title="Contact us" onSubmit={() => console.log('Form submitted', formData)}>
            <Input name="name" type="text" label="Name" value={formData.name} onChange={handleChangeFormData} />
            <Input name="message" type="text" label="Message" value={formData.message} onChange={handleChangeFormData} />
            <Input name="phoneNumber" type="text" label="Phone Number" value={formData.phoneNumber} onChange={handleChangeFormData} />
            <button type="submit">Submit</button>
        </Form>
    )
}