import React, { Component } from 'react'
import {withRouter, Link} from 'react-router-dom'
import axios from 'axios'
import classes from './Admin.module.css'


export class Admin extends Component {

    componentWillMount(){
        axios.get(`https://5dfb77c50301690014b8fbdb.mockapi.io/new`)
              .then(resp => {
                localStorage.setItem("LocalData",JSON.stringify(resp.data));
              })
              axios.get(`https://5dfb77c50301690014b8fbdb.mockapi.io/Category`)
              .then(resp => {
                localStorage.setItem("Category",JSON.stringify(resp.data));
              })
    }
    render() {
        const csvData=JSON.parse(localStorage.getItem('LocalData'));
        return (
            <div className={classes.btnWrapper}>
                <Link to='./admin' style={{textDecoration:'none'}}><button className={classes.btn}>GO TO ADMIN</button></Link>
                
            </div>
        )
    }
}

export default Admin
