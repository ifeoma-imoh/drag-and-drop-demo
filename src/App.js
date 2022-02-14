import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './utility/routes';
const App = () => {
  const router = useRoutes(routes);
  return <div style={{ margin: '1%' }}>{router}</div>;
};
export default App;
