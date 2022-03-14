import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

it('counts the checked list items', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const checkbox1 = screen
    .getByTestId('checkbox-100795229')
    // eslint-disable-next-line testing-library/no-node-access
    .querySelector('input[type="checkbox"]');
  const checkbox2 = screen
    .getByTestId('checkbox-100795227')
    // eslint-disable-next-line testing-library/no-node-access
    .querySelector('input[type="checkbox"]');

  fireEvent.click(checkbox1 as Element);
  expect(checkbox1).toHaveProperty('checked', true);
  expect(await screen.findByText('Number of ads: 1')).toBeInTheDocument();

  fireEvent.click(checkbox2 as Element);
  expect(checkbox2).toHaveProperty('checked', true);
  expect(await screen.findByText('Number of ads: 2')).toBeInTheDocument();

  fireEvent.click(checkbox1 as Element);
  expect(checkbox1).toHaveProperty('checked', false);
  expect(await screen.findByText('Number of ads: 1')).toBeInTheDocument();

  fireEvent.click(checkbox2 as Element);
  expect(checkbox2).toHaveProperty('checked', false);
  expect(await screen.findByText('Number of ads: 0')).toBeInTheDocument();
});

it('renders extra info when clicked on list item', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const listElement = screen.getByText('Zaoszczędź! OC już od 230 zł');

  fireEvent.click(listElement);

  expect(screen.getByText(/100795229/i)).toBeInTheDocument();
});

it('goes back on "GO BACK" button', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const listElement = screen.getByText('Zaoszczędź! OC już od 230 zł');

  fireEvent.click(listElement);

  const button = await screen.findByText(/GO BACK/i);

  fireEvent.click(button);

  expect(screen.getByText(/Number of ads: 0/i)).toBeInTheDocument();
});
