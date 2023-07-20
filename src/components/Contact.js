import React, { useRef } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
} from "@chakra-ui/react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('misterbham.dev', 'template_m1i5uwf', form.current, 'h9kwCj62aXeh2t7yJ')
      .then((result) => {
          console.log(result.text);
          console.log('Contact form sent successfully! I will be in touch soon.')
      }, (error) => {
          console.log(error.text);
          alert('Apologies, the form doesn\'t seem to be working correctly at the moment. /n May I please ask that you email misterbham.dev@gmail.com directly? ')
      });
  };
  
  return (
<Container 
  maxW={{ base: '80%', md: '80%'}} 
  mt='10'
  >
  <form 
    ref={form} 
    onSubmit={sendEmail}
  >
    <FormControl >
      <FormLabel>Name</FormLabel>
      <Input 
        name='name' 
        type='text'
        placeholder="e.g. Sarah Kensington" 
        mb='5'
        focusBorderColor='teal'
        border='1px solid silver'
        />

      <FormLabel>Email address</FormLabel>
      <Input 
        name='email' 
        type="email" 
        placeholder="e.g. skensington@outlook.com"
        focusBorderColor='teal'
        border='1px solid silver'
        />
      <FormHelperText 
        fontSize='0.75em' 
        mb='5'
        >
          Your email will never be shared.
      </FormHelperText>

      <FormLabel>Message</FormLabel>
      <Textarea
        name='message'
        placeholder="Hey Brian, I'd like to get into contact with you..."
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
        _hover={{
          bg: 'brandTheme.500',
          color: 'brandTheme.700',
          }}
        _dark={{
            color: 'brandTheme.600',
            _hover: { color: 'brandTheme.700' },
        }}
      >
        Submit
      </Button>
    </FormControl>
  </form>
</Container>
  );
}