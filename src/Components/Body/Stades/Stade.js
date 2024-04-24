import React from 'react';
import tarton1 from '../../../images/tarton1.jpg';
import './Stade.css'; // Import your CSS file
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input
} from '@chakra-ui/react'
const Stade = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <div>
      <div className='container'>
        <div className='description'>
          <h1>Recruter votre tarton</h1>
          <p>Pour recruter votre tarton et faciliter les réservations pour vos invités, 
            il est essentiel d'inclure les détails de localisation du tarton.
            En fournissant l'adresse exacte ou les coordonnées, les invités peuvent facilement se rendre à l'endroit où se trouve le tarton.
            De plus, inclure des repères ou des indications pertinentes peut encore simplifier le processus de réservation,
            garantissant une expérience fluide pour tous les participants.</p>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
            S'inscrire maintenant
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>

            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        </div>
        <div className='imageContainer'>
          <img className='image' src={tarton1} alt='Tarton' />
        </div>
      </div>
    <div className='container2'>
      <div className='description'>
        <h1>Recruter votre tarton</h1>
        <p>Pour recruter votre tarton et faciliter les réservations pour vos invités, 
          il est essentiel d'inclure les détails de localisation du tarton.
          En fournissant l'adresse exacte ou les coordonnées, les invités peuvent facilement se rendre à l'endroit où se trouve le tarton.
          De plus, inclure des repères ou des indications pertinentes peut encore simplifier le processus de réservation,
          garantissant une expérience fluide pour tous les participants.</p>
          <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          S'inscrire maintenant
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      </div>
      <div className='imageContainer'>
        <img className='image' src={tarton1} alt='Tarton' />
      </div>
    </div>
    <div className='container'>
        <div className='description'>
          <h1>Recruter votre tarton</h1>
          <p>Pour recruter votre tarton et faciliter les réservations pour vos invités, 
            il est essentiel d'inclure les détails de localisation du tarton.
            En fournissant l'adresse exacte ou les coordonnées, les invités peuvent facilement se rendre à l'endroit où se trouve le tarton.
            De plus, inclure des repères ou des indications pertinentes peut encore simplifier le processus de réservation,
            garantissant une expérience fluide pour tous les participants.</p>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
            S'inscrire maintenant
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>

            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        </div>
        <div className='imageContainer'>
          <img className='image' src={tarton1} alt='Tarton' />
        </div>
      </div>
    </div>
    
  );
}

export default Stade;


