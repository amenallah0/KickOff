import React from 'react';
import './Description.css';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  FormLabel,
  Textarea,
  Button,
  Input,
  Stack,
  InputGroup,
  useDisclosure
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const Description = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      <div className='container centred-button'>
        <Button leftIcon={<AddIcon />} colorScheme='teal' onClick={onOpen} className='drawer_button'>
          Créer une demande
        </Button>
      </div>
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Créer une nouvelle demande de stade
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor='stadiumName'>Nom du stade</FormLabel>
                <Input
                  ref={firstField}
                  id='stadiumName'
                  placeholder="Veuillez entrer le nom du stade"
                />
              </Box>

              <Box>
                <FormLabel htmlFor='location'>Localisation</FormLabel>
                <InputGroup>
                  <Input
                    id='location'
                    placeholder='Veuillez entrer la localisation du stade'
                  />
                </InputGroup>
              </Box>
              <Box>
                <FormLabel htmlFor='Phone'>Phone Number</FormLabel>
                <InputGroup>
                  <Input
                    id='Phone'
                    placeholder='+216.....'
                  />
                </InputGroup>
              </Box>
              <Box>
                <FormLabel htmlFor='owner'>Propriétaire</FormLabel>
                <Input
                  id='owner'
                  placeholder='Veuillez entrer le nom du propriétaire du stade'
                />
              </Box>

              <Box>
                <FormLabel htmlFor='desc'>Description</FormLabel>
                <Textarea id='desc' placeholder='Veuillez décrire votre demande' />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Annuler
            </Button>
            <Button colorScheme='blue'>
              Soumettre
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Description;

