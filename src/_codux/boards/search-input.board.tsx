import { createBoard } from '@wixc3/react-board';
import { SearchInput } from '../../components/form';

export default createBoard({
  name: 'SearchInput',
  Board: () => <SearchInput />,
});
