import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./components/home-page/HomePage";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/Cart";
import ItemPage from "./components/item-page/ItemPage";

const Router = () => {

    const router = createBrowserRouter ([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/game/:id",
      element: <ItemPage />,
    },
  ]);

  return <RouterProvider router={router} />;

};

export default Router;