import { render, screen } from '@testing-library/react';
import { columns } from '../data/datatable.json';
import DataTable from '../components/DataTable';

const dummyData = [
  {
    firstName: 'Gelato',
    lastName: 'Al Cioccolato',
    vaccineDate: 1637877061,
    vaccineType: 'Pfizer',
    nhsNumber: '4584318425',
    id: '1',
  },
];

describe('DataTable', () => {
  it('Should render a table', () => {
    const { container } = render(<DataTable columns={[]} records={[]} />);
    const table = container.querySelector('table');
    expect(table).toBeInstanceOf(HTMLTableElement);
  });

  it('Should render a table with headings (th)', () => {
    const { container } = render(<DataTable columns={columns} records={[]} />);
    const thead = container.querySelector('thead');
    const ths = container.querySelectorAll('th');
    expect(thead).toBeInstanceOf(HTMLTableSectionElement);
    expect(ths.length).toBe(columns.length);
  });

  it('Should render a table with cells (td)', () => {
    const { container } = render(<DataTable columns={columns} records={dummyData} />);
    const tbody = container.querySelector('tbody');
    const trs = tbody?.querySelectorAll('tr');
    const tds = tbody?.querySelectorAll('td');

    expect(tbody).toBeInstanceOf(HTMLTableSectionElement);
    expect(trs?.length).toBe(dummyData.length);
    expect(tds?.length).toBe(dummyData.length * columns.length);
  });

  it('Should render a table with no records message', () => {
    const { container } = render(<DataTable columns={[]} records={[]} />);
    const tbody = container.querySelector('tbody');
    const trs = tbody?.querySelectorAll('tr');
    const tds = tbody?.querySelectorAll('td');
    const span = screen.getByText('No records found');

    expect(tbody).toBeInstanceOf(HTMLTableSectionElement);
    expect(trs?.length).toBe(1);
    expect(tds?.length).toBe(1);
    expect(span).toBeInstanceOf(HTMLSpanElement);
  });
});
