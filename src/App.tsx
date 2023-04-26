import { useContext, useEffect, useState } from 'react';

import { columns } from './data/datatable.json';
import dummyData from './data/dummy-data.json';

import { StoreContext } from './context/store';
import useMediaQuery, { MediaQuery } from './hooks/useMediaQuery';
import useDebounce from './hooks/useDebounce';
import { mount } from './utilities/show';

import Appbar from './components/Appbar';
import DataTable from './components/DataTable';
import DataGrid from './components/DataGrid';
import DataCard from './components/DataCard';

import PageHeader from './components/PageHeader';
import Pagination from './components/Pagination';
import styles from './assets/stylesheets/app.module.scss';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { totalPages, records, isLoading, error, getPagedRecords, searchRecords } =
    useContext(StoreContext);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const isDesktop = useMediaQuery(MediaQuery.isDesktop);
  useDebounce(() => searchRecords(search), 500, [search]);

  const renderDataCards = () =>
    records.map((data) => (
      <DataCard
        key={`dataCard${data.id}`}
        lastName={data.lastName}
        firstName={data.firstName}
        nhsNumber={data.nhsNumber}
        vaccineType={data.vaccineType}
      />
    ));

  useEffect(() => {
    getPagedRecords(page);
  }, [page, getPagedRecords]);

  return (
    <>
      <Appbar />
      <PageHeader title="Covid19 Vaccinations" />
      <main className={styles.content}>
        {mount(!isDesktop, <DataGrid>{renderDataCards()}</DataGrid>)}
        {mount(
          isDesktop,
          <DataTable
            columns={columns as DataColumn[]}
            records={records}
            pager={<Pagination page={page} totalPages={totalPages} onPageChange={setPage} />}
          />
        )}
      </main>
      <ScrollToTop offset={0} />
    </>
  );
}

export default App;
