import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';


test('renders guests label', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Number of guests");
    expect(headingElement).toBeInTheDocument();
});

