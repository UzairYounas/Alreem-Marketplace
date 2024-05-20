import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/style.css';
import Login from './pages/Login';
import HomePage from './pages/HomePage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashboardPage from './pages/DashboardPage';
import OrderPage from './pages/OrderPage';
import OrderDetailPage from './pages/OrderDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/manageorder",
    element: <OrderPage />,
  },
  {
    path: "/orderdetail",
    element: <OrderDetailPage />,
  }


]);

function App() {
  return (
    <>
    <RouterProvider router ={router} />
    </>
  );
}

export default App;
