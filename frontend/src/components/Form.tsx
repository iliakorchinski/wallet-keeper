import { TextField, Button } from '@mui/material';
import { Form, HTMLFormMethod } from 'react-router';

const WalletForm: React.FC<{ method: HTMLFormMethod }> = ({ method }) => {
  return (
    <Form method={method}>
      <TextField label="wallet" name="wallet" id="wallet" type="text" />
      <TextField label="person" name="person" id="person" type="text" />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default WalletForm;
