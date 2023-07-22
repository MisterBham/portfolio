import * as React from 'react';
import { AspectRatio } from '@chakra-ui/react';
import resume from '../assets/Hamlin-Brian-resume.pdf';

function Resume() {
  return (
      <AspectRatio 
      ratio={9/16}
      mx={{base: '5%', md: '10%'}}
      my={{base: '5%', md: '2%'}}
      minH={'max-content'}
      >
        <iframe
          title='Brian Hamlin Resume'
          src={resume}
          allowFullScreen
        />
      </AspectRatio>
  );
}

export default Resume;