import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home, { action as addWalletAction } from './pages/Home/Home';
import Wallets, { loader as allWalletsLoader } from './pages/Wallets/Wallet';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigation />,
      children: [
        { index: true, element: <Home />, action: addWalletAction },
        { path: 'wallets', element: <Wallets />, loader: allWalletsLoader },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
