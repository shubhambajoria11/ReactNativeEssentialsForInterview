import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import SignIn from '../signin';

describe('Sign In Screen', () => {
  it('should match with snapshot', () => {
    const container = render(<SignIn />);
    expect(container).toMatchSnapshot();
  });

  it('should render correctly', () => {
    render(<SignIn />);
  });
  describe('check component availability on Screen', () => {
    it('should have email field ', () => {
      render(<SignIn />);
      const emailElement = screen.getByPlaceholderText('Email');
      expect(emailElement).toBeTruthy();
    });

    it('should have password field ', () => {
      render(<SignIn />);
      const passwordElement = screen.getByPlaceholderText('Password');
      expect(passwordElement).toBeTruthy();
    });
    it('should have login button ', () => {
      render(<SignIn />);
      const buttonElement = screen.getByText('Submit');
      expect(buttonElement).toBeTruthy();
    });
  });
  describe('Email text input case', () => {
    it('should give error if email field is empty on button Press', async () => {
      render(<SignIn />);
      const emailElement = screen.getByPlaceholderText('Email');
      fireEvent.changeText(emailElement, '');
      const buttonElement = screen.getByText('Submit');
      fireEvent.press(buttonElement);
      await waitFor(() => {
        const errorTextEmail = screen.getByText('Email can not be empty');
        expect(errorTextEmail).toBeTruthy();
      });
    });
    it("should give error if email field doesn't contain @ symbol", async () => {
      render(<SignIn />);
      const emailElement = screen.getByPlaceholderText('Email');
      fireEvent.changeText(emailElement, 'abc');
      const buttonElement = screen.getByText('Submit');
      fireEvent.press(buttonElement);
      await waitFor(() => {
        const errorTextEmail = screen.getByText(
          'Email should be of proper format',
        );
        expect(errorTextEmail).toBeTruthy();
      });
    });
  });
  describe('Password text input case', () => {
    it('should give error if password is empty', async () => {
      render(<SignIn />);
      const passwordElement = screen.getByPlaceholderText('Password');
      fireEvent.changeText(passwordElement, '');
      const buttonElement = screen.getByText('Submit');
      fireEvent.press(buttonElement);
      await waitFor(() => {
        // this has to be used for every useState
        const errortext = screen.getByText('Password can not be empty');
        expect(errortext).toBeTruthy();
      });
    });
    it('should show error in case password is less than 10 chrs', async () => {
      render(<SignIn />);
      const passwordElement = screen.getByPlaceholderText('Password');
      fireEvent.changeText(passwordElement, 'abciuyr');
      const buttonElement = screen.getByText('Submit');
      fireEvent.press(buttonElement);
      await waitFor(() => {
        // this has to be used for every useState
        const errortext = screen.getByText('Password should have min 10 chrs');
        expect(errortext).toBeTruthy();
      });
    });
  });
  describe('Login Button case', () => {
    it('login button press success', async () => {
      render(<SignIn />);
      const buttonElement = screen.getByText('Submit');
      const emailElement = screen.getByPlaceholderText('Email');
      fireEvent.changeText(emailElement, 'shsd@gmai');
      const passwordElement = screen.getByPlaceholderText('Password');
      fireEvent.changeText(passwordElement, 'dsiuhfuihuhfguifhguh');
      fireEvent.press(buttonElement);

      await waitFor(() => {
        const successMessage = screen.getByText('Button Press success');
        expect(successMessage).toBeTruthy();
      });
    });
  });
});
