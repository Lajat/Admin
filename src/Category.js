import React, { Component } from 'react'
import classes from './Category.module.css'
import {withRouter, Link} from 'react-router-dom'
import { CSVLink, CSVDownload } from "react-csv";
import Category from './Category';

export class Users extends Component {
    state={
        persons:JSON.parse(localStorage.getItem('Category')),
        position:'',
        n:5,
        searchedTitle: ' ',
        ifSearched: false
    }
   
    
      removeProduct = (pos,e) => {
        e.preventDefault();

        const mArr = this.state.persons;
        let Storage = JSON.parse(localStorage[('Category')]);

        mArr.splice(pos, 1);

        Storage = mArr;
        localStorage.setItem('Category', JSON.stringify(Storage));
        this.setState({persons: mArr});
    }
    handlepos=(pos)=>{
        console.log(pos)
        localStorage.setItem('Position1',pos)
    }
    onBtnClick =()=>{
        this.setState({n:this.state.persons.length});
    }
    onInputSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value);
        this.setState({searchedTitle: e.target.value,ifSearched: true});
    }

    render() {
        
        const csvData=JSON.parse(localStorage.getItem('Category'));
        const renderingData = this.state.persons.slice(0,this.state.n).map((item,pos) => {
            return (
                <tr key={pos+1} className={classes.mainRow}>
                <Link to="/EditCategory" className={classes.underline} onClick={(e)=>this.handlepos(pos,e)} >
                    <td className={classes.ID}>{item.id}</td>
                    <td className={classes.title} >{item.title}</td>
                    <td className={classes.deleteIcon}>
                        <a href='/' onClick={(e)=>this.removeProduct(pos,e)} >
                            <i className="far fa-trash-alt"></i>
                        </a>
                    </td>
                </Link>
                </tr>
            )
        });
        const filteredData = this.state.persons.filter(searched=>searched.title.includes(this.state.searchedTitle)).map((item,pos) => {
            return (
                <tr key={pos+1} className={classes.mainRow}>
                <Link to="/EditCategory" className={classes.underline} onClick={(e)=>this.handlepos(pos,e)} >
                    <td className={classes.ID}>{item.id}</td>
                    <td className={classes.title} >{item.title}</td>
                    <td className={classes.deleteIcon}>
                        <a href='/' onClick={(e)=>this.removeProduct(pos,e)} >
                            <i className="far fa-trash-alt"></i>
                        </a>
                    </td>
                </Link>
                </tr>
            )
        });
        return (
            <div className={classes.main}>
                 <div>
                     <input onChange={this.onInputSubmit} type="text" placeholder="Search for Category" />
                 </div>
                  <div style={{padding: '0 1px'}}>
                            <table className={classes.table}>
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
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
                    <button onClick={this.onBtnClick} className={classes.btn}>Sub-Category({this.state.persons.length})</button>
                    <Link to="/AddCategory" className={classes.btn}>Create Category</Link>
                    
                    </div>
                    
            </div>
        )
    }
}

export default Users
