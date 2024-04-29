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
import'./Contact.css'

function Contact() {
  return (
    <Container maxW="xl" centerContent>
      <Stack spacing={6} width="100%" maxW="xl" marginTop={6} textAlign="center">
        <Text fontSize="2xl" fontWeight="bold" margin="0 auto">
          Contactez-nous
        </Text>
        <Divider />
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Nom</FormLabel>
              <Input type="text" placeholder="Nom" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Prénom</FormLabel>
              <Input type="text" placeholder="Prénom" />
            </FormControl>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Email" />
            </FormControl>
          </GridItem>
        </Grid>
        <FormControl>
          <FormLabel>Adresse</FormLabel>
          <Input type="text" placeholder="Adresse" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Votre message" />
        </FormControl>
        <Button colorScheme="blue">Soumettre</Button>
      </Stack>
    </Container>
  );
}

export default Contact;
