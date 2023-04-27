import { createBoard } from '@wixc3/react-board';
import PageControls from '../../components/PageControls';

export default createBoard({
  name: 'PageControls',
  Board: () => <PageControls search="" onSearchChange={(e) => console.log(e)} />,
  environmentProps: {
    canvasWidth: 946,
  },
});
