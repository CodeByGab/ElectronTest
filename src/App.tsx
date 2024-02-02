import MenuPage from "./pages/MenuPage";
import SheetPage from "./pages/SheetPage";
import CreateSheetPage from "./pages/CreateSheetPage";

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <MenuPage />
  },
  {
    path: 'sheets',
    element: <SheetPage />
  },
  {
    path: 'createSheet',
    element: <CreateSheetPage />
  }
])
function App() {
  console.log('app iniciado')
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  return (
    
    <RouterProvider router={router}/>

  );
}

export default App;
