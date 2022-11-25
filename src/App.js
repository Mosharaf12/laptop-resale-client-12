
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/Routers/Routers';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div data-theme="emerald" className='md:mx-14'>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
