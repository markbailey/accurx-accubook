import { createBoard } from '@wixc3/react-board';
import dummyUser from '../../data/dummy-user.json';
import Appbar from '../../components/Appbar';

export default createBoard({
  name: 'Appbar',
  Board: () => <Appbar user={dummyUser} />,
  environmentProps: {
    canvasWidth: 1024,
    windowWidth: 1024,
    windowHeight: 768,
  },
});
