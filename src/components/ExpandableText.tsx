import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface ExpandableTextProps {
  children: string;
  limit?: number;
}

const ExpandableText = ({ children, limit = 500 }: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(true);

  if (children.length <= limit) return <Text>{children}</Text>;

  // isTruncated could be used here, but it's not reliable
  const text = expanded ? children.slice(0, limit) + '...' : children;

  return (
    <>
      <Text>{text}</Text>
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
