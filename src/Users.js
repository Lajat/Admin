import React, { Component } from 'react'
import classes from './Users.module.css'
import axios from 'axios';
import {withRouter, Link} from 'react-router-dom'
import { CSVLink, CSVDownload } from "react-csv";
import Category from './Category'

export class Users extends Component {
    state={
        persons:JSON.parse(localStorage.getItem('LocalData')),
        position:'',
        searchedUser: ' ',
        ifSearched: false
    }
   
    
      remove = (pos,e) => {
        e.preventDefault();

        const mArr = this.state.persons;
        let Storage = JSON.parse(localStorage[('LocalData')]);

        mArr.splice(pos, 1);

        Storage = mArr;
        localStorage.setItem('LocalData', JSON.stringify(Storage));
        this.setState({persons: mArr});
    }
    handlepos=(pos)=>{
        console.log(pos)
        localStorage.setItem('Position',pos)
       
    }
    onInputSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value);
        this.setState({searchedUser: e.target.value,ifSearched: true});
    }

    render() {
        
        const csvData=JSON.parse(localStorage.getItem('LocalData'));
      
        const renderingData = this.state.persons.map((item,pos) => {
            return (
                <tr key={pos+1} className={classes.mainRow}>
                <Link to="/EditUser" className={classes.underline} onClick={(e)=>this.handlepos(pos,e)} >
                   
                    <td className={classes.id}>{item.id}</td>
                    <td className={classes.name} >{item.name}</td>
                  
                    <td className={classes.stock}>{item.email}</td>
                    <td className={classes.expire}>{item.phone}</td>
                    <td className={classes.deleteIcon}>
                        <a href='/' onClick={(e)=>this.remove(pos,e)} >
                            <i className="far fa-trash-alt"></i>
                        </a>
                    </td>
                </Link>
                </tr>
            )
        });
        const filteredData = this.state.persons.filter(searched=>searched.name.includes(this.state.searchedUser)).map((item,pos) => {
            return (
                <tr key={pos+1} className={classes.mainRow}>
                <Link to="/EditUser" className={classes.underline} onClick={(e)=>this.handlepos(pos,e)} >
                   
                    <td className={classes.id}>{item.id}</td>
                    <td className={classes.name} >{item.name}</td>
                  
                    <td className={classes.stock}>{item.email}</td>
                    <td className={classes.expire}>{item.phone}</td>
                    <td className={classes.deleteIcon}>
                        <a href='/' onClick={(e)=>this.remove(pos,e)} >
                            <i className="far fa-trash-alt"></i>
                        </a>
                    </td>
                </Link>
                </tr>
            )
        });
        return (
            <div className={classes.main}>
                <div className={classes.userdiv}>
                 <div>
                     <input onChange={this.onInputSubmit} type="text" placeholder="Search for User" />
                 </div>
                  <div style={{padding: '0 1px'}}>
                            <table className={classes.table}>
                                <tbody>
                                    <tr>
                                        <th className={classes.id}>ID</th>
                                        <th>NAME</th>
                                        
                                        <th>EMAIL</th>
                                        <th>Ph.NUMBER</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <table className={[classes.table,classes.datatable].join(' ')}>
                            <tbody>        
                                {this.state.ifSearched === false ? renderingData : filteredData}
                            </tbody>
                            </table>
                    
                    <div className={classes.btnWrapper}>
                    
                    <Link to="/AddUser" className={classes.btn}>Create User</Link>
                    <CSVLink data={csvData} className={classes.btn}>Download me</CSVLink>;
                    
                    </div>
                    </div>
                    <Category/>
            </div>
        )
    }
}

export default Users
