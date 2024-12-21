import { TextField, Button } from '@mui/material';
import { Form, HTMLFormMethod } from 'react-router';

const WalletForm: React.FC<{ method: HTMLFormMethod }> = ({ method }) => {
  return (
    <Form method={method}>
      <TextField label="wallet" name="wallet" id="wallet" type="text" />
      <TextField label="person" name="person" id="person" type="text" />
      <select name="walletType">
        <option value="BTC">BTC</option>
        <option value="USDT">USDT</option>
      </select>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default WalletForm;
