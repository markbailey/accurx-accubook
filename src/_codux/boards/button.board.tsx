import { createBoard } from '@wixc3/react-board';
import Button from '../../components/Button';

export default createBoard({
  name: 'Button',
  Board: () => <Button>Button</Button>,
  environmentProps: {
    canvasHeight: 39,
  },
});
