import React from 'react';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import LandingPageBuilder from './pages/LandingPageBuilder';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <LandingPageBuilder />
      </div>
    </Provider>
  );
};

export default App;
