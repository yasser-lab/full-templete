import React  from 'react'
import { ContactSection , ContactTitle , InputEmail , InputText , InputSub , InputSubmit , Span , Form , Input , TextArea , FormInput } from './style.js'
const Contact = () =>{
    return(
      <ContactSection>
      <div class="container">
          <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
          <Form action="">
              <FormInput>
                  <InputText type="text" placeholder="Your Name" />
                  <InputEmail type="email" placeholder="Your Email" />
              </FormInput>
              <InputSub type="text" class="sub" placeholder="Your Subject" />
              <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
              <InputSubmit type="submit" value="Send Message" />
          </Form>
      </div>
  </ContactSection>
    )
}
export default Contact;
