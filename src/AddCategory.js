import React from 'react';

import classes from './AddUser.module.css'
import {withRouter, Link} from 'react-router-dom'

class AddCategory extends React.Component {

    state = {
        
        ID: '',
        title: '',
        
    }

    onHandleID = (e) => {
         this.setState({
            ID:e.target.value
        })
    }
    onHandletitle = (e) => {
        this.setState({
           title:e.target.value
       })
   }
  

    onAddCategory = () => {

        let Storage = JSON.parse(localStorage[('Category')]);
        const updatedList = Storage;
        const pro=this.state

        const data = {
            id: pro.ID,
            title: pro.title,
            
        }

        if (pro.details===false) {
            alert('Please fill in all the fields!');
            return false;
        } else {
            updatedList.push(data);
            Storage = updatedList;
    
            localStorage.setItem('Category', JSON.stringify(Storage));
            
        }

    }

    render() {
        return (
            <div className={classes.main}>
                <div className={classes.container}>
                    <div className={classes.contentWrapper}>
                        <div className={classes.content}>
                            <div className={classes.container}>
                                <div className={classes.heading}>
                                    <h2>Add Category</h2>
                                </div>
                            </div>
                            <div className={classes.container}>
                                <div className={classes.col}>
                                    <form>
                                        <div className={classes.form}>
                                            <label for="name">ID</label>    
                                            <input type="number" onChange={this.onHandleID}/>
                                        </div>
                                        <div className={classes.form}>
                                            <label for="description">TITLE</label>
                                            <input type="text" onChange={this.onHandletitle} />
                                        </div>
                                        
                                        
                                       
                                            
                                        
                                    </form>
                                </div>
                                
                                      <div className={classes.btnWrapper}>
                                   
                                    <Link to='./admin'> <button onClick={this.onAddCategory} type="submit" className={classes.btn}>ADD Category NOW</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddCategory;