import React from 'react'
import { Text,Stack,Heading } from '@chakra-ui/react';

function CommentsHolder({ comments }) { 
  return (
    <Stack>
      {comments.map((comment, index) => (          //comment = {content='',userId='',postId=''}
        <Stack key={index}>
          <Text> By User: {comment.userId}</Text>
          <Heading as='h4' size='lg'>{comment.content}</Heading>
          <hr></hr>
        </Stack>
      ))}
    </Stack>
  )
}

export default CommentsHolder