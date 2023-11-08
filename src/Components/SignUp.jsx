import {
    Container,
    VStack,
    Input,
    Heading,
    Button,
    Text,
    Avatar
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  const SignUp = () => {
    return (
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form action="">
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full','96']}
            m={'auto'}
            my={'16'}
          >
            <Heading textTransform={'uppercase'}>Video Hub</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'}></Avatar>
  
            <Input
              placeholder={'Enter your name'}
              type={'text'}
              required
              focusBorderColor={'purple.500'}
            />
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/forgetpassword'}>Forget Password</Link>
            </Button>
            <Button colorScheme="purple" type="submit">
              Log In
            </Button>
            <Text textAlign={'right'}>
              Already Sign Up?{' '}
              <Button
                variant={'link'}
                alignSelf={'flex-end'}
                colorScheme="purple"
              >
                <Link to={'/login'}>login</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default SignUp;
  