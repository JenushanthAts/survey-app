
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import Results from './pages/Results';

const Layout = () => {
  return (<>
    <Header />
    <Outlet />
    <Footer />
  </>)
}
const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <FirstPage />
    }, {
      path: "/secondPage",
      element: <SecondPage />
    }, {
      path: "/thirdPage",
      element: <ThirdPage />
    }, {
      path: "/results",
      element: <Results />
    }
  ]
},


]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
