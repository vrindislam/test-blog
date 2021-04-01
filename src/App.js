import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.less';
import MainRoutes from './routes/MainRoutes';
import { postsFetching } from './services/postUpdate';



function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    postsFetching(dispatch)
  }, [])
  return (
    <div className='app'>
      <MainRoutes />
    </div>
  );
}

export default App;
