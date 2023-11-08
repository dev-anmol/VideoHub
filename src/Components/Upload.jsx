import { Center, Container, VStack, HStack, Button, Input, Flex } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container maxH={'container.xl'} h={'100vh'} p={'16'}>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />

        <form style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
        }}>
          <HStack>
            <Input required type={'file'} css={{
              "&::file-selector-button":{
                border:"none",
                width:"calc(100% + 36px)",
                marginLeft:"-18px",
                color:"purple",
                height:"100%",
                backgroundColor:"white",
                cursor:"pointer",
              }
            }}/>
            <Button color={'purple'} type='submit'>
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
