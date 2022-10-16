
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';


const router = createBrowserRouter([{
  path: "/",
  element: <>
    <Header />
    <LandingPage />
    <Footer /></>,
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
