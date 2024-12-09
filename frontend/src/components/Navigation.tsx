import { Link, Outlet } from 'react-router';
import classes from './Navigation.module.css';
function Navigation() {
  return (
    <>
      <header className={classes.header}>
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
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Navigation;
