import { Link, Outlet } from 'react-router';

function Navigation() {
  return (
    <>
      <ul>
        <li>
          <p>
            <Link to="/">Home</Link>
          </p>
        </li>
        <li>
          <p>
            <Link to="wallets">Wallets</Link>
          </p>
        </li>
      </ul>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Navigation;
