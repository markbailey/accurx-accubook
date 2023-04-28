import { render, screen } from '@testing-library/react';
import DataCard from '../components/DataCard';

const dummyData = {
  firstName: 'Gelato',
  lastName: 'Al Cioccolato',
  vaccineType: 'Pfizer',
  nhsNumber: '4584318425',
};

describe('DataCard', () => {
  it('Should render a card with the correct title and description', () => {
    render(<DataCard {...dummyData} />);

    const patientTitle = screen.getByText('Patient Name');
    const patientName = screen.getByText(`${dummyData.lastName} ${dummyData.firstName}`);
    const nhsNumberTitle = screen.getByText('NHS Number');
    const nhsNumber = screen.getByText(dummyData.nhsNumber);
    const vaccineTitle = screen.getByText('Vaccine');
    const vaccineType = screen.getByText(dummyData.vaccineType);

    expect(patientTitle).toBeInstanceOf(HTMLHeadingElement);
    expect(patientName).toBeInstanceOf(HTMLSpanElement);
    expect(nhsNumberTitle).toBeInstanceOf(HTMLHeadingElement);
    expect(nhsNumber).toBeInstanceOf(HTMLSpanElement);
    expect(vaccineTitle).toBeInstanceOf(HTMLHeadingElement);
    expect(vaccineType).toBeInstanceOf(HTMLSpanElement);
  });
});
