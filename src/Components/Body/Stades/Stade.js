import React, { useState, useEffect, useRef, useContext } from "react";
import './Stade.css';
import { CarouselItem } from "./Carouselitem";
//bibliotheque of Drawer 
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from '@chakra-ui/react';
import { FormControl, FormLabel, FormErrorMessage, Input, Button, Box,  } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Stack } from '@chakra-ui/react';
import { InputGroup, InputLeftAddon, InputRightAddon, Select, Textarea } from '@chakra-ui/react';
const Stade = ({ scrollY, threshold }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const elementTop = sliderRef.current.getBoundingClientRect().top;
    const elementHeight = sliderRef.current.offsetHeight;

    if (scrollY >= elementTop - threshold && scrollY <= elementTop + elementHeight) {
      sliderRef.current.classList.add("animated", "slide-in-left");
    } else {
      sliderRef.current.classList.remove("animated", "slide-in-left");
    }
  }, [scrollY, threshold]);

  const items = [
    {
      title: "Baseball",
      description: "Créer une équipe",
    },
    {
      title: "Marche",
      description: "Former une équipe",
    },
    {
      title: "Haltérophilie",
      description: "Défier d'autres équipes",
    },
    {
      title: "Réservation",
      description: "Terminer la réservation",
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()
  return (
    <div ref={sliderRef} className="carousel sliding-slider-component" id="Slide">
      <div className="inner" style={{ transform: `translate(-${activeIndex * 100}%)` }}>
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            item={item}
            width={"100%"}
          />
        ))}
<<<<<<< Updated upstream
        <div className="second" >
          <Button rightIcon={<AddIcon />} colorScheme='blue' onClick={onOpen} marginLeft={'45%'} marginTop={'30px'}>
            Créer une demande
          </Button>
        </div>
      </div>

      {/* <div className="carousel-buttons">
        <button className="button-arrow" onClick={() => updateIndex(activeIndex - 1)}>
          <ArrowLeftIcon />
        </button>
        <button className="button-arrow" onClick={() => updateIndex(activeIndex + 1)}>
          <ArrowRightIcon />
        </button>
      </div> */}
      
       
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
              Créer une nouvelle demande
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing='24px'>
                <Box>
                  <FormLabel htmlFor='username'>Nom Complet</FormLabel>
                  <Input
                    ref={firstField}
                    id='username'
                    placeholder='Please enter user name'
                  />
                </Box>
  
                <Box>
                  <FormLabel htmlFor='url'>Url</FormLabel>
                  <InputGroup>
                    <InputLeftAddon>http://</InputLeftAddon>
                    <Input
                      type='url'
                      id='url'
                      placeholder='Please enter domain'
                    />
                    <InputRightAddon>.com</InputRightAddon>
                  </InputGroup>
                </Box>
  
                <Box>
                  <FormLabel htmlFor='owner'>Select Owner</FormLabel>
                  <Select id='owner' defaultValue='segun'>
                    <option value='segun'>Segun Adebayo</option>
                    <option value='kola'>Kola Tioluwani</option>
                  </Select>
                </Box>
  
                <Box>
                  <FormLabel htmlFor='desc'>Description</FormLabel>
                  <Textarea id='desc' />
                </Box>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px'>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Submit</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
    </div>
  );
};
export default Stade;
=======
        
      </div>
      {/* <div className="carousel-buttons">
        <button className="button-arrow" onClick={() => updateIndex(activeIndex - 1)}>
          <ArrowLeftIcon />
        </button>
        <button className="button-arrow" onClick={() => updateIndex(activeIndex + 1)}>
          <ArrowRightIcon />
        </button>
      </div> */}
      
       
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
              Créer une nouvelle demande
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing='24px'>
                <Box>
                  <FormLabel htmlFor='username'>Nom Complet</FormLabel>
                  <Input
                    ref={firstField}
                    id='username'
                    placeholder='Please enter user name'
                  />
                </Box>
  
                <Box>
                  <FormLabel htmlFor='url'>Url</FormLabel>
                  <InputGroup>
                    <InputLeftAddon>http://</InputLeftAddon>
                    <Input
                      type='url'
                      id='url'
                      placeholder='Please enter domain'
                    />
                    <InputRightAddon>.com</InputRightAddon>
                  </InputGroup>
                </Box>
  
                <Box>
                  <FormLabel htmlFor='owner'>Select Owner</FormLabel>
                  <Select id='owner' defaultValue='segun'>
                    <option value='segun'>Segun Adebayo</option>
                    <option value='kola'>Kola Tioluwani</option>
                  </Select>
                </Box>
  
                <Box>
                  <FormLabel htmlFor='desc'>Description</FormLabel>
                  <Textarea id='desc' />
                </Box>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px'>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Submit</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        
    </div>
  );
};

export default Stade;
>>>>>>> Stashed changes
