import React, {useRef} from "react";
import {
  PaperStyle,
  FormStyle,
  ButtonSubmitStyle,
  TypographyStyle,
  TextFieldStyle
} from "./ContactComponent.elements";
import emailjs from 'emailjs-com';

function ContactComponent() {
 const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_1c5vtrr', form.current, 'i4Ma9iw8nDyzcYwQ0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  }

  return (
    <PaperStyle>
      <TypographyStyle variant="h4">Get In Touch</TypographyStyle>
      <FormStyle ref={form} autoComplete="off" noValidate onSubmit={sendEmail}>
        <TextFieldStyle
          name="name"
          variant="outlined"
          label="Name"
        />
        <TextFieldStyle
          name="email"
          variant="outlined"
          label="Email"
        />
        <TextFieldStyle
          name="subject"
          variant="outlined"
          label="Subject"
        />
        <TextFieldStyle
          name="message"
          variant="outlined"
          label="Message"
        />
        <ButtonSubmitStyle
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Submit
        </ButtonSubmitStyle>
      </FormStyle>
    </PaperStyle>
  );
}

export default ContactComponent;
