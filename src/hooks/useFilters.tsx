import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { sortByOptions, orderOptions } from '../data/filters.json';
import useDebounce from './useDebounce';

function useFilters(
  initialSortBy: string,
  perPage: number,
  queryCallback: (options: QueryOptions) => void
) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const sortByRef = useRef<HTMLSelectElement>(null);
  const orderRef = useRef<HTMLSelectElement>(null);

  const getSearchCriteria = useCallback(() => (search.length > 1 ? { search } : {}), [search]);
  const getPaging = useCallback(() => {
    const isSearching = getSearchCriteria().search !== undefined;
    return { page: isSearching ? 1 : page, limit: perPage };
  }, [page, perPage, getSearchCriteria]);

  const getQueryOptions = useCallback(
    () => ({
      sortBy: sortByRef.current?.value ?? initialSortBy,
      order: (orderRef.current?.value ?? 'asc') as SortOrder,
      ...getSearchCriteria(),
      ...getPaging(),
    }),
    [initialSortBy, getSearchCriteria, getPaging]
  );

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);
  const onFilterChange = useCallback(() => {
    const queryOptions = getQueryOptions();
    queryCallback(queryOptions);
  }, [getQueryOptions, queryCallback]);

  const resetSorting = () => {
    sortByRef.current!.value = initialSortBy;
    orderRef.current!.value = 'asc';
    const queryOptions = getQueryOptions();
    queryCallback(queryOptions);
  };

  useDebounce(() => search.length !== 1 && onFilterChange(), 500, [search, onFilterChange]);

  useEffect(() => {
    const queryOptions = getQueryOptions();
    queryCallback(queryOptions);
  }, []);

  return Object.freeze({
    initialSortBy,
    sortByRef,
    orderRef,
    orderOptions,
    sortByOptions,
    page,
    search,
    setPage,
    onSearchChange,
    onFilterChange,
    resetSorting,
  });
}

export default useFilters;
