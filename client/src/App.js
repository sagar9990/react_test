import './App.css';
import Header from './components/organisms/Header/Header';
import Home from './components/pages/Home';
import {Routes,Route} from 'react-router-dom'
import Footer from './components/organisms/Footer/Footer'
import { Provider } from 'react-redux';
import store from './components/redux/store';
import AddEmployee from './components/pages/AddEmployee';
import UpdateEmployee from './components/pages/UpdateEmployee';
import PageNotFound from './components/pages/PageNotFound';

function App() {
  return (
    <>
    <Provider store={store}>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route path='/add' element={<AddEmployee/>} exact/>
      <Route path='/update/:id'  element={<UpdateEmployee/>} exact/>
      <Route path="*" element={<PageNotFound/>} exact />
    </Routes>
    <Footer/>    
    </Provider>
    </>
  );
}

export default App;
