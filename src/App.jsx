import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import FirstView from "./components/ConnexionComponent/FirstView";
import CreateAcount from "./components/ConnexionComponent/CreateAcount";
import InscriptionStepOne from "./components/ConnexionComponent/InscriptionStepOne";
import InscriptionStepTwo from "./components/ConnexionComponent/InscriptionStepTwo";
import Illustration from "./components/ConnexionComponent/Illustration";
import ConnexionPage from "./components/pages/ConnexionPage";

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <div>ERROR PAGE</div>,
    children: [
      {
        path: '',
        element: <FirstView />,
        errorElement: <div>ERROR PAGE</div>,
      },
      {
        path: '/CreateAcount',
        element: <CreateAcount />,
        errorElement: <div>ERROR PAGE</div>,
      },
      {
        path: '/Inscription-1',
        element: <InscriptionStepOne />,
        errorElement: <div>ERROR PAGE</div>
      },
      {
        path: '/Inscription-2',
        element: <InscriptionStepTwo />,
        errorElement: <div>ERROR PAGE</div>
      },
      {
        path: '/Illu',
        element: <Illustration />,
        errorElement: <div>ERROR PAGE</div>
      },
      {
        path: '/Connexion',
        element: <ConnexionPage />,
        errorElement: <div>ERROR PAGE</div>
      },
    ],
  },
  
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};
export default App