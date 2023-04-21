import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftAddon children={<BsSearch />} />
      <Input borderRadius={20} placeholder='Search games...' variant='filled' />
    </InputGroup>
  );
};

export default SearchInput;
