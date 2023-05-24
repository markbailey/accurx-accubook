import { createBoard } from '@wixc3/react-board';
import Loader from '../../components/Loader';

export default createBoard({
  name: 'Loader',
  Board: () => <Loader show />,
});
