import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';



//Importar as páginas

import Login from '../src/pages/login';
import Debt from '../src/pages/debt';

//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" component={Debt} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;