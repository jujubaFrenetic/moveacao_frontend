import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Paginas Principais
import Home from '../pages/Home/Home'
import TelaAcolhido from '../pages/TelaAcolhido/TelaAcolhido'
import TelaAjudador from '../pages/TelaAjudador/TelaAjudador'
import TelaLogin from '../pages/TelaLogin/TelaLogin'

export default props => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tela_acolhido" component={TelaAcolhido} />
        <Route exact path="/tela_ajudador" component={TelaAjudador} />
        <Route exact path= "/tela_login" component={TelaLogin}/>
        
    </Switch>
)