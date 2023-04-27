// Patient and Treatment
declare interface Patient extends Record<string, string> {
  firstName: string;
  lastName: string;
  nhsNumber: string;
}

declare interface Vaccination extends Record<string | number> {
  id: string;
  vaccineType: string;
  vaccineDate: number;
}

declare type PatientRecord = Patient & Vaccination;

// DataTable
declare type SortOrder = 'asc' | 'desc';
declare type DataField = keyof PatientRecord;
declare interface DataColumn {
  label: string;
  fields: DataField[];
}

// Global Context
declare interface User {
  id: string;
  displayName: string;
  email: string;
  avatar: string;
}

declare interface GlobalAction {
  type: string;
  payload?: PatientRecord[] | boolean | string | number | null;
}

declare interface GlobalState {
  totalPages: number;
  perPage: number;
  records: PatientRecord[];
  isLoading: boolean;
  error: string | null;

  getRecords(options?: QueryOptions): void;
}

// API
declare interface QueryOptions {
  search?: string;
  // filter?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: SortOrder;
  [key: keyof PatientRecord]: string | number | undefined;
}
