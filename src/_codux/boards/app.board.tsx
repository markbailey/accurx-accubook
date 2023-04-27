import { createBoard } from '@wixc3/react-board';
import App from '../../App';

export default createBoard({
  name: 'App',
  Board: () => <App />,
  environmentProps: {
    canvasWidth: 1024,
    windowWidth: 768,
    windowHeight: 1024,
  },
});
