//react imports
import { useEffect } from "react";
//rrd imports
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
//layout
import MainLayout from "./layout/MainLayout";
import {
  About,
  Cart,
  Contact,
  ErrorPage,
  Home,
  SingleProduct,
  Login,
  Register,
} from "./pages";
//axios
import { axiosClient } from "./utils/axiosClient";
//redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//features
import { AddProduct } from "./features/product/productSlice";
//components
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    axiosClient("/products")
      .then((data) => dispatch(AddProduct(data.data.data)))
      .catch((error) => console.log(error.message));
  }, []);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "singleProduct/:id",
          element: <SingleProduct />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  return <>{<RouterProvider router={routes} />}</>;
}

export default App;
