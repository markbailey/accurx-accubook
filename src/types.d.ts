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
declare type DataField = keyof PatientRecord;
declare interface DataColumn {
  label: string;
  fields: DataField[];
}

// Global Context
declare interface GlobalAction {
  type: string;
  payload?: PatientRecord[] | boolean | string | null;
}

declare interface GlobalState {
  totalPages: number;
  perPage: number;
  records: PatientRecord[];
  isLoading: boolean;
  error: string | null;

  getPagedRecords(page: number): void;
  searchRecords(search: string): void;
}
