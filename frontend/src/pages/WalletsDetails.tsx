import { useLoaderData, useNavigate, useParams } from 'react-router';
import { Wallet } from './Wallets/Wallet';
export default function WalletsDetails() {
  const data = useLoaderData();
  const navigate = useNavigate();
  console.log(data);
  const params = useParams();
  const handleDelete = async (id: string | undefined) => {
    const selectedWallet = data.find((wallet: Wallet) => {
      return wallet._id === id;
    });

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
    console.log(responce);

    return navigate('/wallets');
  };
  return (
    <>
      <h1>{params.id}</h1>
      <button onClick={() => handleDelete(params.id)}>
        А теперь можешь удалить
      </button>
    </>
  );
}
