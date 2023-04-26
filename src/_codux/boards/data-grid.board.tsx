import { createBoard } from '@wixc3/react-board';
import dummyData from '../../data/dummy-data.json';
import DataGrid from '../../components/DataGrid';
import DataCard from '../../components/DataCard';

const renderCards = () =>
  dummyData.map((data) => (
    <DataCard
      key={data.id}
      lastName={data.lastName}
      firstName={data.firstName}
      nhsNumber={data.nhsNumber}
      vaccineType={data.vaccineType}
    />
  ));

export default createBoard({
  name: 'DataGrid',
  Board: () => <DataGrid>{renderCards()}</DataGrid>,
  environmentProps: {
    canvasWidth: 1024,
    windowWidth: 1304,
    windowHeight: 667,
  },
});
