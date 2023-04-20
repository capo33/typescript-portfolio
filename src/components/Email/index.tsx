import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

import {
  Form,
  FormArea,
  Input,
  TextArea,
} from "../ContactDetails/ContactDetails";
import { Button } from "../../globalStyle";
import SocialIcons from "../SocialIcons/Index";
import { FormData } from "../../interfaces/FormInterface";

 

interface InfoSectionProps {
  topLine?: string;
  title?: string;
}

const Email = ({ title, topLine }: InfoSectionProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // we need to use useRef to get the form data
  const form: React.MutableRefObject<any> = useRef();

  const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: any) => {
    const SERVICE_ID: string = process.env.REACT_APP_SERVICE_ID as string;
    const TEMPLATE_ID: string = process.env.REACT_APP_TEMPLATE_ID as string;
    const USER_ID: string = process.env.REACT_APP_PUBLIC_KEY as string;

    e.preventDefault();

    // emailjs contains a sendForm method that takes the service id, template id, form element, and user id
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    // reset the form
    e.target.reset();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <FormArea>
      <h2>{topLine}</h2>
      <p>{title}</p>
      <Form onSubmit={sendEmail} ref={form}>
        <Input
          type='text'
          name='name'
          id='name'
          value={formData.name}
          onChange={handleChanges}
          placeholder='Name'
          autoComplete='nope'
        />
        <Input
          type='email'
          name='email'
          id='email'
          onChange={handleChanges}
          value={formData.email}
          placeholder='Email'
          autoComplete='nope'
        />
        <TextArea
          name='message'
          value={formData.message}
          id='message'
          onChange={handleChanges}
          placeholder='What do you want to tell me?'
        ></TextArea>
        <Button type='submit'>Send Message</Button>
      </Form>
      <SocialIcons />
    </FormArea>
  );
};

export default Email;
