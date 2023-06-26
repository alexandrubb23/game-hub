import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../store';

const sortOrders = [
  {
    value: '',
    label: 'Relevance',
  },
  {
    value: '-added',
    label: 'Date added',
  },
  {
    value: 'name',
    label: 'Name',
  },
  {
    value: '-released',
    label: 'Release date',
  },
  {
    value: '-metacritic',
    label: 'Popularity',
  },
  {
    value: '-raging',
    label: 'Average rating',
  },
];

const SortSelector = () => {
  const selectedSortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore(s => s.setSortOrder);

  const currentSortOrder = sortOrders.find(
    sortOrder => sortOrder.value === selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map(order => (
          <MenuItem
            key={order.value}
            onClick={() => setSortOrder(order.value)}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
