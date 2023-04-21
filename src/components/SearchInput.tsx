import { useRef } from 'react';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

interface SearchInputProps {
  onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftAddon children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder='Search games...'
          variant='filled'
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
