import { PropsWithChildren, createContext, useCallback, useReducer } from 'react';
import Api from '../services/Api';

enum Actions {
  SetTotalPages = 'SET_TOTAL_PAGES',
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

  getRecords(options: QueryOptions) {},
};

export const StoreContext = createContext<GlobalState>(initialState);

function reducer(state: GlobalState, action: GlobalAction): GlobalState {
  switch (action.type) {
    case Actions.SetTotalPages:
      return { ...state, totalPages: action.payload as number };
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

  const setIsLoading = useCallback((isLoading: boolean) => {
    dispatch({ type: Actions.SetIsLoading, payload: isLoading });
  }, []);

  const setError = useCallback((error: string | null) => {
    dispatch({ type: Actions.SetError, payload: error });
  }, []);

  const setRecords = useCallback((records: PatientRecord[]) => {
    dispatch({ type: Actions.SetRecords, payload: records });
  }, []);

  const setTotalPages = useCallback(
    (totalRecords: number) => {
      const payload = Math.ceil(totalRecords / state.perPage);
      dispatch({ type: Actions.SetTotalPages, payload });
    },
    [state.perPage]
  );

  const getRecords = useCallback(
    (options: QueryOptions = {}) =>
      Api.before(() => setIsLoading(true))
        .vaccinations(options)
        .then((records) => {
          // Hardcoded 25 as API doesn't return total records
          const totalRecords = options.search !== undefined ? records.length : 25;
          setTotalPages(totalRecords);
          setRecords(records);
        })
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false)),
    [state.perPage, setIsLoading, setRecords, setError, setTotalPages]
  );

  return <StoreContext.Provider {...props} value={{ ...state, getRecords }} />;
}
