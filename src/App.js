import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Contact from './pages/Contact';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/competences' component={Knowledges}/>
      <Route exact path='/portfolio' component={Portfolio}/>
      <Route  component={NotFound}/>
     </Switch>
     </BrowserRouter>
    </>
  );
};

export default App;