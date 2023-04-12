import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Button 
    pos={'fixed'}
    zIndex={'overlay'}
    top={'3'}
    left={'4'}
    colorScheme='purple'
    p={'0'}
    w={'10'}
    h={'10'}
    
    borderRadius={'full'}
    onClick={onOpen} >
        <BiMenuAltLeft size={'20'} />
    </Button>


    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
   <DrawerOverlay />
   <DrawerContent>
    <DrawerCloseButton />
 <DrawerHeader>
    ONS
 </DrawerHeader>
 <DrawerBody>
<VStack alignItems={'flex-start'}
marginTop={8} spacing={6}>
      <Button variant={'ghost'} colorScheme={'purple'} fontSize={25}  onClick={onClose}>
        <Link to={'/'}>Home</Link>
    </Button>
    <Button variant={'ghost'} colorScheme={'purple'} fontSize={25}  onClick={onClose}>
        <Link to={'/videos'}>Videos</Link>
    </Button>
    <Button variant={'ghost'} colorScheme={'purple'} fontSize={25} onClick={onClose}>
        <Link to={'/videos?category=free'}>Free Videos</Link>
    </Button>
    <Button variant={'ghost'} colorScheme={'purple'} fontSize={25} onClick={onClose}>
        <Link to={'/upload'}>Upload Videos</Link>
    </Button>
</VStack>
<HStack marginTop={'250'} marginLeft={5}>
    <Button  colorScheme='purple'>
        <Link to={'/login'}>Log In</Link>
    </Button>
    <Button colorScheme='purple' variant={'outline'}>
        <Link to={'/signup'}>Sign Up</Link>
    </Button>
</HStack>
 </DrawerBody>
   </DrawerContent>
    </Drawer>
    </>
  );
};

export default Header;