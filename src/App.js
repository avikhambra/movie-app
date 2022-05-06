// rfce

import React from "react";
import Home from './components/Home';
import {Login} from './Routing';
import {New} from './Routing';

//import Main from "./components/Main";
import NavBar from "./components/NavBar";

import {PageNotFound} from './Routing';

import {Route , Switch , Redirect} from 'react-router-dom';

//import Routing from "./Routing";
// npm i react-router-dom
function App(){
    return(
        <>
            <NavBar></NavBar>

            <Switch>
                <Route path = "/home">
                  <Home></Home>
                </Route>

                <Route path = "/login">
                   <Login></Login>  
                </Route> 
                
                <Route path = "/new">
                    <New></New>
                </Route>


                <Route>
                   <Redirect from = "/" to = "/home"></Redirect> 
                </Route>  


                <Route>
                   <PageNotFound></PageNotFound>
                </Route>
           
                

            </Switch>
            
       
        </>
    )
}

export default App;