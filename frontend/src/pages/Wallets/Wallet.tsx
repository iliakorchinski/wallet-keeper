import { useLoaderData } from 'react-router';
import { ChangeEvent, useState } from 'react';
import classes from './Wallet.module.css';
import { Link } from 'react-router';

export type Wallet = {
  _id: string;
  person: string;
  wallet: string;
  walletType: string | undefined;
};

function Wallets() {
  const [search, setSearch] = useState<string>('');
  const data = useLoaderData();
  console.log(data);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filterredData = data.filter((wallet: Wallet) => {
    return wallet.wallet.includes(search) || wallet.person.includes(search);
  });

  return (
    <>
      <input
        placeholder="search wallet"
        value={search}
        onChange={handleSearch}
        className={classes.search}
      />

      {filterredData &&
        filterredData.map((wallet: Wallet) => {
          return (
            <div key={wallet._id} className={classes.container}>
              <h3 className={classes.person}>
                От Кого:
                <br /> {wallet.person}
              </h3>
              <p className={classes.person}>
                Номер кошелька: <br /> {wallet.wallet}
              </p>
              <p>Тип кошелька: {wallet.walletType ? wallet.walletType : ''}</p>
              <Link to={`/wallets/${wallet._id}`}>
                Нажми, если хочешь удалить
              </Link>
            </div>
          );
        })}
    </>
  );
}

export default Wallets;

export async function loader() {
  const responce = await fetch('https://wallet-keeper-gilt.vercel.app/wallets');
  if (!responce.ok) {
    throw new Error('Could not fetch wallets');
  } else {
    // console.log(responce);
    return responce;
  }
}
