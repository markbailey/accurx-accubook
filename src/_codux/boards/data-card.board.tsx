import { createBoard } from '@wixc3/react-board';

import dummyData from '../../data/dummy-data.json';
import DataCard from '../../components/DataCard';

const { firstName, lastName, vaccineType, nhsNumber } = dummyData[0];

export default createBoard({
  name: 'DataCard',
  Board: () => (
    <DataCard
      firstName={firstName}
      lastName={lastName}
      nhsNumber={nhsNumber}
      vaccineType={vaccineType}
    />
  ),
});
