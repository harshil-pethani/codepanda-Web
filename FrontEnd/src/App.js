import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Form from './Pages/Form/Form';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/form" component={Form} />
      </div>      
    </>
  );
}

export default App;
