import { HTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { mount } from '../utilities/show';
import styles from '../assets/stylesheets/components/data-table.module.scss';

type NoRecordsFoundProps = { columnSpan: number; show: boolean };
type TheadProps = PropsWithChildren<{ show: boolean }>;
type TFootProps = TheadProps & { columnSpan: number };
interface DataTableProps<RT> extends HTMLAttributes<HTMLTableElement> {
  columns: DataColumn[];
  records: RT[];
  headless?: boolean;
  pager?: JSX.Element;
}

const THead = ({ children, show }: TheadProps) => mount(show, <thead>{children}</thead>);
const TFoot = ({ children, show, columnSpan }: TFootProps) =>
  mount(
    show,
    <tfoot>
      <tr>
        <td colSpan={columnSpan}>{children}</td>
      </tr>
    </tfoot>
  );

const NoRecordsFound = ({ columnSpan, show }: NoRecordsFoundProps) =>
  mount(
    show,
    <tr>
      <td colSpan={columnSpan} align="center">
        <span>No records found</span>
      </td>
    </tr>
  );

function DataTable<RT extends Record<string, string | number>>(props: DataTableProps<RT>) {
  const { className: classNameProp, columns, records, headless, pager, ...otherProps } = props;
  const className = classNames(styles.dataTable, classNameProp);
  const showFooter = pager !== undefined && records.length > 0;

  const concatFieldValues = (fields: DataField[]) => fields.map((field) => field).join(' ');
  const concatRecordValues = (fields: DataField[], record: RT) =>
    fields.map((field) => record[field]).join(' ');

  return (
    <table {...otherProps} className={className}>
      <THead show={!headless}>
        <tr>
          {columns.map((column) => (
            <th key={column.label}>{column.label}</th>
          ))}
        </tr>
      </THead>

      <tbody>
        <NoRecordsFound show={records.length === 0} columnSpan={columns.length} />
        {records.map((record, index) => (
          <tr key={index} className={styles.dataRow}>
            {columns.map((column) => (
              <td key={concatFieldValues(column.fields)}>
                {concatRecordValues(column.fields, record)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>

      <TFoot show={showFooter} columnSpan={columns.length}>
        {pager}
      </TFoot>
    </table>
  );
}

export default DataTable;
