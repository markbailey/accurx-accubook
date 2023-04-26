import { PropsWithChildren, createContext, useCallback, useMemo, useReducer } from 'react';
import Api from '../services/Api';

enum Actions {
  SetRecords = 'SET_RECORDS',
  SetIsLoading = 'SET_IS_LOADING',
  SetError = 'SET_ERROR',
}

const initialState: GlobalState = {
  totalPages: 1,
  perPage: 10,
  records: [],
  isLoading: false,
  error: null,

  searchRecords: () => {},
  getPagedRecords: () => {},
};

export const StoreContext = createContext<GlobalState>(initialState);

function reducer(state: GlobalState, action: GlobalAction): GlobalState {
  switch (action.type) {
    case Actions.SetRecords:
      return { ...state, records: action.payload as PatientRecord[] };
    case Actions.SetIsLoading:
      return { ...state, isLoading: action.payload as boolean };
    case Actions.SetError:
      return { ...state, error: action.payload as string | null };
    default:
      return state;
  }
}

export function StoreProvider(props: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const totalPages = useMemo(() => Math.ceil(25 / state.perPage), [state.perPage]); // Hardcoded 25 as API doesn't return total records

  const setIsLoading = useCallback((isLoading: boolean) => {
    dispatch({ type: Actions.SetIsLoading, payload: isLoading });
  }, []);

  const setError = useCallback((error: string | null) => {
    dispatch({ type: Actions.SetError, payload: error });
  }, []);

  const setRecords = useCallback((records: PatientRecord[]) => {
    dispatch({ type: Actions.SetRecords, payload: records });
  }, []);

  const getPagedRecords = useCallback(
    (page: number) =>
      Api.before(() => setIsLoading(true))
        .vaccinations.page(page, state.perPage)
        .then((records) => setRecords(records))
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false)),
    [state.perPage, setIsLoading, setRecords, setError]
  );

  const searchRecords = useCallback(
    (search: string) => {
      if (search.length < 2) return;
      Api.before(() => setIsLoading(true))
        .vaccinations.search(search)
        .then((records) => setRecords(records))
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    },
    [setIsLoading, setRecords, setError]
  );

  return (
    <StoreContext.Provider
      {...props}
      value={{ ...state, totalPages, searchRecords, getPagedRecords }}
    />
  );
}
