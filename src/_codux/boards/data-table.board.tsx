import { createBoard } from '@wixc3/react-board';
import { columns } from '../../data/datatable.json';
import dummyData from '../../data/dummy-data.json';
import DataTable from '../../components/DataTable';

export default createBoard({
  name: 'DataTable',
  Board: () => <DataTable columns={columns as DataColumn[]} records={dummyData} />,
  environmentProps: {
    canvasWidth: 983,
  },
});
