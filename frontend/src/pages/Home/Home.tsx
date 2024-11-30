import WalletForm from '../../components/Form';
import { redirect } from 'react-router-dom';

function Home() {
  return <WalletForm method="post" />;
}

export default Home;

type ActionProps = {
  request: any;
  params: any;
};

export async function action({ request, params }: ActionProps) {
  const method = request.method;
  const data = Object.fromEntries(await request.formData());
  const newWallet = {
    wallet: data.wallet,
    person: data.person,
  };
  // console.log('new wallet:', newWallet);
  const responce = await fetch(
    `https://wallet-keeper-9sgo.vercel.app/wallet/new`,
    {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newWallet),
    }
  );
  if (!responce.ok) {
    throw new Error('Cannot add wallet');
  }
  return redirect('wallets');
}
