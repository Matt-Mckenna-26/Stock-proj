import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import react, {useState, useEffect} from 'react'
import axios from 'axios';
import NaviHeader from './components/NaviHeader';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {Router, navigate} from '@reach/router';
import DashBoard from './views/DashBoard';

const App = () => {
  const [loggedinUser, setLoggedinUser] = useState(undefined)
  const [isSomeoneLoggedIn, setIsSomeoneLoggedIn] = useState(false)
  const [ticker, setTicker] = useState('By ticker ex."tsla =tesla"');
  const [searched, setSearched] = useState(false);
  const [detailedStock, setDetailedStock] = useState({});
  const [detailedStockLoaded, setDetailedStockLoaded ] = useState(false);

  const getLoggedInUser = () => {
    axios.get("http://localhost:8000/api/users/loggedin", {
      withCredentials: true
    })
                .then(res => console.log(res))
                .catch(err => console.log(err))
            navigate('/')
  }
  const logout = () => {
  axios
  .post(
    "http://localhost:8000/api/logout",
    {},
    {
      withCredentials: true
    }
  )
    .then(res => {console.log(res)
      setIsSomeoneLoggedIn(false);
    })
    .catch(console.log)
        navigate('/')
}
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8000/api/stock/${ticker}`)
        .then(res => { 
          console.log(res.data)
          setDetailedStock(res.data)
        })
        .catch(err => console.log({err}))
          setSearched(true)
          setDetailedStockLoaded(true);
          navigate('/');
      }

  return (
    <div className="App pb-5">
      <NaviHeader ticker={ticker}  setTicker={setTicker} handleSubmit={handleSubmit} setSearch={setSearched} logout={logout} 
      isSomeoneLoggedIn={isSomeoneLoggedIn} logout={logout}/>
      <Router>
          <DashBoard path ='/' ticker={ticker}  setTicker={setTicker} handleSubmit={handleSubmit} setSearch={setSearched} 
          searched={searched} detailedStock ={detailedStock} detailedStockLoaded={detailedStockLoaded}  
          isSomeoneLoggedIn={isSomeoneLoggedIn} loggedInUser={loggedinUser}/>
          <Login setIsSomeoneLoggedIn={setIsSomeoneLoggedIn} setLoggedinUser={setLoggedinUser} 
          path='/login'/>
          <SignUp path='/register'/>
      </Router>
    </div>
  );
}

export default App;
