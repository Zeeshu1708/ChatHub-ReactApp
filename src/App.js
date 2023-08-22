import { Box, Button, Container, HStack, Input, VStack } from "@chakra-ui/react";
import Message from "./components/Message";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { app } from "./firebase.js";
import { useState } from "react";

  const auth = getAuth(app);

  const loginHandler = ()=>{
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth,provider);
  }

function App() {

  const [user,setUser] = useState(false);

  return (
    <Box bg={'red.50'}>
      {
        user ? <Container h={'100vh'} bg={'white'}>
        <VStack h={'full'} paddingY={'4'}>
          <Button w={'full'} colorScheme={"red"}>Logout</Button>
          <VStack h={'full'} w={'full'} overflowY={'auto'}>
          <Message text={"Sample Message..."}/>
          </VStack>
          <form style={{width: '100%'}}>
              <HStack>
              <Input placeholder="Enter a message..." />
              <Button colorScheme={'purple'} type="submit">Send</Button>
              </HStack>
            </form>
        </VStack>
      </Container> : 
      <VStack h={'100vh'} justifyContent={'center'}>
        <Button colorScheme="red">Sign In With Google</Button>
      </VStack>
      }
    </Box>
  );
}

export default App;
