import { createBoard } from '@wixc3/react-board';
import PageHeader from '../../components/PageHeader';

export default createBoard({
  name: 'PageHeader',
  Board: () => <PageHeader title="Covid19 Vaccinations" />,
  environmentProps: {
    canvasWidth: 946,
  },
});
