import { createBoard } from '@wixc3/react-board';
import PageHeader from '../../components/PageHeader';
import PageControls from '../../components/PageControls';
import { mount } from '../../utilities/show';
import useMediaQuery, { MediaQuery } from '../../hooks/useMediaQuery';

export default createBoard({
  name: 'PageHeader',
  Board: () => {
    const isMobile = useMediaQuery(MediaQuery.isMobile);
    return (
      <PageHeader title="Covid19 Vaccinations">
        {mount(!isMobile, <PageControls search="" onSearchChange={(e) => console.log(e)} />)}
      </PageHeader>
    );
  },
  environmentProps: {
    canvasWidth: 946,
    windowWidth: 1024,
    windowHeight: 768,
  },
});
