import { createBoard } from '@wixc3/react-board';
import { orderOptions } from '../../data/filters.json';
import { Select } from '../../components/form';

export default createBoard({
  name: 'Select',
  Board: () => <Select options={orderOptions} />,
});
