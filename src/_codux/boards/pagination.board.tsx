import { createBoard } from '@wixc3/react-board';
import Pagination from '../../components/Pagination';

export default createBoard({
  name: 'Pagination',
  Board: () => <Pagination page={1} totalPages={10} onPageChange={(page) => console.log(page)} />,
});
