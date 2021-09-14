import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} / >
        <Redirect from='https://crudcrud.com/api/e414a84aaa9e4844a49a2eb55ae2b86b' to='/' />
    </Switch>