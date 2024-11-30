import { useLoaderData } from 'react-router';

type Wallet = {
  _id: string;
  person: string;
  wallet: string;
};

function Wallets() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      {data.map((wallet: Wallet) => {
        return (
          <div key={wallet._id}>
            <h3>{wallet.person}</h3>
            <p>{wallet.wallet}</p>
            <button>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default Wallets;

export async function loader() {
  const responce = await fetch('https://wallet-keeper-gilt.vercel.app/wallets');
  console.log(responce);
  if (!responce.ok) {
    throw new Error('Could not fetch wallets');
  } else {
    // console.log(responce);
    return responce;
  }
}
