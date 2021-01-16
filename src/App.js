import './App.css';
import { Route} from "react-router-dom";
import { Home } from './components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';
import { Contacts } from './components/Contacts';
import { ContactSucess } from './components/ContactSucess';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/success" component={ContactSucess} />


    </>
  );
}

export default App;
