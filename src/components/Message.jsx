import React from 'react'
import {HStack,Avatar,Text, VStack } from "@chakra-ui/react";

const Message = ({text,uri,user="other"}) => {
  return (
    <HStack alignSelf={user==="me"?"flex-end":'flex-start'} bg={'gray.100'} borderRadius={'25'} paddingY={'2'} paddingX={user=== "me"?'4':"2"}>
        {
            user === "other" && <Avatar src={uri}/>
        }
        <Text>{text}</Text>
        {
            user === "me" && <Avatar src={uri}/>
        }
    </HStack>
  )
}

export default Message
