import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

export default function Contact() {
  let [value, setValue] = React.useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <FormControl>
      <Input placeholder="Name" />

      <FormLabel>Email address</FormLabel>
      <Input type="email" />
      <FormHelperText>We'll never share your email.</FormHelperText>

      <Text mb="8px">Value: {value}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />

      <Button colorScheme="blue">Submit</Button>
    </FormControl>
  );
}
