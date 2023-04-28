import { render, screen } from '@testing-library/react';
import Pagination from '../components/Pagination';

const onPageChange = jest.fn();
const addEventListener = jest.fn();
const removeEventListener = jest.fn();
globalThis.matchMedia = jest
  .fn()
  .mockImplementation(() => ({ matches: false, addEventListener, removeEventListener }));

describe('Pagination', () => {
  it('Should render a set of buttons equal to totalPages + 2', () => {
    const { container } = render(
      <Pagination page={1} totalPages={10} onPageChange={onPageChange} />
    );
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBe(12);
  });

  it('Should trigger onPageChange when a button is clicked', () => {
    render(<Pagination page={1} totalPages={10} onPageChange={onPageChange} />);
    const button = screen.getByText('2');
    button.click();
    expect(onPageChange).toHaveBeenCalled();
  });
});
