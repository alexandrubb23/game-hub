import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { debounce } from 'lodash';

import useGameQueryStore from '../store';

interface SearchInputProps {
  wait?: number;
}

const SearchInput = ({ wait = 500 }: SearchInputProps) => {
  const setSearchText = useGameQueryStore(s => s.setSearchText);
  const navigate = useNavigate();

  const handleSearch = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
      navigate('/');
    },
    wait
  );

  return (
    <FormControl>
      <InputGroup>
        <InputLeftAddon children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder='Search games...'
          variant='filled'
          onChange={handleSearch}
        />
      </InputGroup>
    </FormControl>
  );
};

export default SearchInput;
