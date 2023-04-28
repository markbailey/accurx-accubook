import { Fragment, useContext, useEffect } from 'react';

import { columns } from './data/datatable.json';
import dummyUser from './data/dummy-user.json';

import { StoreContext } from './context/store';
import useMediaQuery, { MediaQuery } from './hooks/useMediaQuery';
import { mount } from './utilities/show';

import Appbar from './components/Appbar';
import DataTable from './components/DataTable';
import DataGrid from './components/DataGrid';
import DataCard from './components/DataCard';

import PageHeader from './components/PageHeader';
import Pagination from './components/Pagination';
import ScrollToTop from './components/ScrollToTop';
import useFilters from './hooks/useFilters';
import { FormGroup, Select } from './components/form';
import Button from './components/Button';
import PageControls from './components/PageControls';
import Loader from './components/Loader';

import styles from './assets/stylesheets/app.module.scss';

function App() {
  const { totalPages, perPage, records, isLoading, error, getRecords } = useContext(StoreContext);
  const isMobile = useMediaQuery(MediaQuery.isMobile);
  const isDesktop = useMediaQuery(MediaQuery.isDesktop);

  const {
    initialSortBy,
    sortByRef,
    orderRef,
    sortByOptions,
    orderOptions,
    page,
    search,
    setPage,
    onSearchChange,
    onFilterChange,
    resetSorting,
  } = useFilters('lastName', perPage, getRecords);

  // Using alert for simplicity, but ideally we would use a modal or a toast
  useEffect(() => {
    if (error !== null) alert(error);
  }, [error]);

  return (
    <Fragment>
      <Appbar user={dummyUser} />
      <PageHeader title="Covid19 Vaccinations">
        <PageControls search={search} onSearchChange={onSearchChange} />
      </PageHeader>

      <Loader show={isLoading} />
      <main className={styles.content}>
        <FormGroup>
          <label>Filters</label>
          <Select
            ref={sortByRef}
            options={sortByOptions}
            defaultValue={initialSortBy}
            onChange={onFilterChange}
          />

          <Select
            ref={orderRef}
            options={orderOptions}
            defaultValue="asc"
            onChange={onFilterChange}
          />

          <Button onClick={resetSorting}>Reset</Button>
        </FormGroup>

        {mount(
          !isDesktop,
          <DataGrid
            pager={<Pagination page={page} totalPages={totalPages} onPageChange={setPage} />}
          >
            {records.map((data) => (
              <DataCard
                key={`dataCard${data.id}`}
                lastName={data.lastName}
                firstName={data.firstName}
                nhsNumber={data.nhsNumber}
                vaccineType={data.vaccineType}
              />
            ))}
          </DataGrid>
        )}

        {mount(
          isDesktop,
          <DataTable
            columns={columns as DataColumn[]}
            records={records}
            pager={<Pagination page={page} totalPages={totalPages} onPageChange={setPage} />}
          />
        )}
      </main>

      {mount(
        isMobile,
        <footer className={styles.footer}>
          <PageControls search={search} onSearchChange={onSearchChange} />
        </footer>
      )}

      <ScrollToTop offset={0} />
    </Fragment>
  );
}

export default App;
