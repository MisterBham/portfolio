import React, { useRef } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Link,
  Container,
} from "@chakra-ui/react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('misterbham.dev', 'template_m1i5uwf', form.current, 'h9kwCj62aXeh2t7yJ')
      .then((result) => {
          console.log(result.text);
          alert('Email sent successfully! I will be in touch soon.')
      }, (error) => {
          console.log(error.text);
          alert('Apologies, the form doesn\'t seem to be working correctly at the moment. /n May I please ask that you email misterbham.dev@gmail.com directly? ')
      });
  };
  
  return (
    <Container 
      maxW={{ base: '90%', md:'60%' }}
      justifyContent='center'
      px='5%'
      py='1%'
      >
      <form 
        ref={form} 
        onSubmit={sendEmail}
      >
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input 
            name='name' 
            type='text'
            autoComplete='name'
            id='name'
            mb='5'
            focusBorderColor='teal'
            border='1px solid silver'
            />

          <FormLabel>Email address</FormLabel>
            <Input 
              name='email' 
              type='email'
              autoComplete='email'
              id='email'
              focusBorderColor='teal'
              border='1px solid silver'
              mb='5'
              />
          

          <FormLabel>Message</FormLabel>
          <Textarea
            name='message'
            autoComplete='off'
            id='message'
            size="sm"
            mb='5'
            focusBorderColor='teal'
            border='1px solid silver'
          />

          <Button
            type='submit'
            value='Send'
            bg='brandTheme.800'
            color='brandTheme.700'
            mb='1'
            _hover={{
              bg: 'brandTheme.500',
              color: 'brandTheme.700',
              }}
            _dark={{
              bg: 'brandTheme.800',
              color: 'brandTheme.700',
              _hover: { bg: 'brandTheme.900' },
            }}
          >
            Submit
          </Button>

          <FormHelperText 
            fontSize='0.75em' 
            >
              <hr />
              Your email and message are protected behind private API keys. <br />
              For more information regarding the functionality of EmailJS, please visit <Link href='https://www.emailjs.com/' isExternal target="_blank" aria-label="EmailJS">https://www.emailjs.com/</Link>
          </FormHelperText>
        </FormControl>
      </form>
    </Container>
  );
}