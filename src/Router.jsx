import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./components/home-page/HomePage";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/Cart";
import ItemPage from "./components/item-page/ItemPage";
import ItemAddedPage from "./components/item-added-page/ItemAddedPage";

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
    {
      path: "/item-added-page",
      element: <ItemAddedPage />,
    },
  ]);

  return <RouterProvider router={router} />;

};

export default Router;