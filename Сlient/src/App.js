import './App.css';
import { RoutesTest } from './routes/Routes';

function App() {
  const routes = RoutesTest();

  return (
    <>
      {routes}
    </>
  );
}

export default App;
