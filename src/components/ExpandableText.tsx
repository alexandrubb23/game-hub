import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface ExpandableTextProps {
  children: string;
  limit?: number;
}

const ExpandableText = ({ children, limit = 300 }: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(true);

  if (children.length <= limit) return <Text>{children}</Text>;

  return (
    <>
      <Text isTruncated={expanded}>{children}</Text>
      <Button
        colorScheme='yellow'
        fontWeight='bold'
        onClick={() => setExpanded(!expanded)}
        size='xs'
      >
        Show {expanded ? 'More' : 'Less'}
      </Button>
    </>
  );
};

export default ExpandableText;
