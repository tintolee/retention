import React, {useState,useEffect} from 'react'
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FruitDetails from './components/FruitDetails/FruitDetails';
import Api from './components/API/Api';



import NavbarImages from './components/Navbar/NavbarImages';
function App() {
  const [data, setData] = useState([]);
  const getData= async()=>{
    const response= await Api.get()
    setData(response.data)
 }
 
  useEffect(() => {
    getData()
    
  }, []);


  return (
    <Router>
       {data.map((item)=>{
        return(
          <Switch>
        <Route exact path={`/${item.name}` } component={() => <NavbarImages item={item} />} />
        
      </Switch>
        )
      })}
      
      <Navbar data={data}/>
      {data.map((item)=>{
        return(
          <Switch>
        <Route path='/' exact component={Home} />
        <Route exact path={`/${item.name}` } component={() => <FruitDetails item={item} />} />
        
      </Switch>
        )
      })}
      
    </Router>
  );
}
export default App;



