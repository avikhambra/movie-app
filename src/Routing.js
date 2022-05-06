import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

export function Home(){
    return(
        <div>Home</div>
    )
}

export function Login(){
    return(
        <div>Login</div>
    )
}

export function New(){
    return(
        <div>New</div>
    )
}

export function PageNotFound(){
    return(
        <div>404 page not found</div>
    )
}

function Routing(){
    return(
        <>
            <div className="border-b-2 mb-4">
              <button className="bg-blue-500 mr-4">Login</button>
              <button className="bg-blue-500">Home</button>
            </div>

            <Switch>
                <Route path = "/home/xyz">
                   <Home></Home>
                </Route>

                <Route path = "/home" exact>
                  <Home></Home>
                </Route>
                
                <Redirect from = "/" to = "/home">
                </Redirect>

                <Home>
                   <PageNotFound></PageNotFound>
                </Home>
            </Switch>    

        </>
    )
}

export default Routing;

