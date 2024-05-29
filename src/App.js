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
import OrderCompletePage from './pages/OrderCompletePage';
import OrderCancelPage from './pages/OrderCancelPage';
import DisputePage from './pages/DisputePage';
import DisputeDetailPage from './pages/DisputeDetailPage';
import ChatPage from './pages/ChatPage';
import InventoryPage from './pages/InventoryPage';
import InventoryDetaillPage from './pages/InventoryDetaillPage';
import AddProductPage from './pages/AddProductPage';
import DraftInventoryPage from './pages/DraftInventoryPage';
import InboxPage from './pages/InboxPage';
import EditShopPage from './pages/EditShopPage';

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
  },
  {
    path: "/complete",
    element: <OrderCompletePage />,
  },
  {
    path: "/cancel",
    element: <OrderCancelPage />,
  },
  {
    path: "/disputeorder",
    element: <DisputePage />,
  },
  {
    path: "/disputeorder/disputedetail",
    element: <DisputeDetailPage />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
  {
    path: "/inventory",
    element: <InventoryPage />,
  },
  {
    path: "/inventorydetail",
    element: <InventoryDetaillPage />,
  },
  {
    path: "/editproduct",
    element: <AddProductPage />,
  },
  {
    path: "/draftinventory",
    element: <DraftInventoryPage />,
  },
  {
    path: "/inbox",
    element: <InboxPage />,
  },
  {
    path: "/editshop",
    element: <EditShopPage />,
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
