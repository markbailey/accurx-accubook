import { createBoard } from '@wixc3/react-board';
import Appbar from '../../components/Appbar';

export default createBoard({
  name: 'Appbar',
  Board: () => <Appbar />,
  environmentProps: {
    canvasWidth: 1024,
    windowWidth: 1024,
    windowHeight: 768,
  },
});
