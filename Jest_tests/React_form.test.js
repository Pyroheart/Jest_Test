import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  it('renders all fields', () => {
    render(<Form />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('shows error message when input is invalid', async () => {
    render(<Form />);
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');
    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(messageInput, { target: { value: '' } });
    fireEvent.submit(screen.getByRole('button'));
    expect(await screen.findByText('Name is required')).toBeInTheDocument();
    expect(await screen.findByText('Email is invalid')).toBeInTheDocument();
    expect(await screen.findByText('Message is required')).toBeInTheDocument();
  });
  
  it('does not show error message when input is valid', async () => {
    render(<Form />);
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello World' } });
    fireEvent.submit(screen.getByRole('button'));
    expect(screen.queryByText('Name is required')).toBeNull();
    expect(screen.queryByText('Email is invalid')).toBeNull();
    expect(screen.queryByText('Message is required')).toBeNull();
  });
});