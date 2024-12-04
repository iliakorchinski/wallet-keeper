import { useLoaderData, useParams } from 'react-router';
import { redirect } from 'react-router-dom';
import { Wallet } from './Wallets/Wallet';
export default function WalletsDetails() {
  const data = useLoaderData();
  console.log(data);
  const params = useParams();
  const handleDelete = async (id: string | undefined) => {
    const selectedWallet = data.find((wallet: Wallet) => {
      return wallet._id === id;
    });
    console.log(selectedWallet);
    const removeWallet = {
      wallet: selectedWallet.wallet,
      person: selectedWallet.person,
    };

    const responce = await fetch(
      `https://wallet-keeper-gilt.vercel.app/wallets/${id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(removeWallet),
      }
    );
    if (!responce.ok) {
      throw new Error('Could not delete wallet');
    }

    return redirect('/wallets');
  };
  return (
    <>
      <h1>{params.id}</h1>
      <button onClick={() => handleDelete(params.id)}>Delete</button>
    </>
  );
}
