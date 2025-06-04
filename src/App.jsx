
import './assets/tailwind.css';
import React from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
// import Dashboard from "./pages/Dashboard";
// import Customers from "./pages/Customers";
// import Orders from "./pages/Orders";
// import NotFound from "./pages/NotFound";
// import MainLayout from './layouts/MainLayout';
// import Login from './pages/auth/Login';
// import Register from './pages/auth/Register';
// import Forgot from './pages/auth/Forgot';
// import AuthLayout from './layouts/AuthLayout';
// import Loading from './components/Loading';
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Orders = React.lazy(() => import("./pages/Orders"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const HalamanUtama = React.lazy(() => import("./pages/guest/HalmanUtama"));
const Product = React.lazy(() => import("./pages/guest/Product"));
const About = React.lazy(() => import("./pages/guest/About"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductsDetail = React.lazy(() => import("./pages/ProductsDetail"))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetail />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route element={<GuestLayout/>}>
          <Route path="/home" element={<HalamanUtama/>}/>
          <Route path="/produk" element={<Product/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </Suspense>

  )
}

export default App
