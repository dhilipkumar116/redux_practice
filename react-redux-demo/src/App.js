import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <ItemContainer cake/>
        <ItemContainer/>
        <HooksCakeContainer/>
        <IceCreamContainer/>
        <CakeContainer />
        <NewCakeContainer/> */}
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
