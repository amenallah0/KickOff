import React from 'react';
import {
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Select,
  Stack,
  Textarea,
  Text,
} from '@chakra-ui/react';
import './Contact.css'; // Import the CSS file
import ContactImage from './../../Images/contact.jpg'; // Import your image

function Contact() {
  return (
    <div className='Contact-container'>
    <div className='contact-form-inner'>
      <Container maxW="xl" centerContent>
        <Stack spacing={6} direction={['column', 'row']} width="100%" maxW="xl" marginTop={6}>
          {/* Image on the right for larger screens */}

          <div> {/* Container for form elements */}
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">
              Contactez-nous
            </Text>
            <Divider />
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Nom</FormLabel>
                  <Input type="text" placeholder="Nom" variant="filled" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Prénom</FormLabel>
                  <Input type="text" placeholder="Prénom" variant="filled" />
                </FormControl>
              </GridItem>
            </Grid>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="Email" variant="filled" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Numéro</FormLabel>
                  <Input type="number" placeholder="Votre Numéro" variant="filled" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Adresse</FormLabel>
                  <Input type="text" placeholder="Adresse" variant="filled" />
                </FormControl>
              </GridItem>
            </Grid>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Votre message" variant="filled" />
            </FormControl>
            <Button colorScheme="blue">Soumettre</Button>
          </div>

          {/* Image on the left for smaller screens */}
        </Stack>

      </Container>
    </div>
      <img src={ContactImage} alt="Contact" className="contact-image" />

    </div>
  );
}

export default Contact;
