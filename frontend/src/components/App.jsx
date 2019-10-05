import React,{useState} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import LoginContainer from "./Login/LoginContainer";
import UsersContainer from "./Users/UsersContainer";
import s from './App.module.css';

const App = () => {

    const [isAuth,setIsAuth] = useState(false);

    const auth = (flag) => {
        setIsAuth(flag)
    };

    return (
        <BrowserRouter>
            <div className={s.App}>
                <Switch>
                    {!isAuth && <Route exact path={'/'} render={() => <Redirect to={'/login'}/>}/>}
                    <Route path={'/login'} render={() => <LoginContainer auth={auth} isAuth={isAuth}/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route render={()=><div><h2>Not Found</h2></div>}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
