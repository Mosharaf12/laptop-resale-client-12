
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/Routers/Routers';

function App() {
  return (
    <div className='md:mx-14'>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
