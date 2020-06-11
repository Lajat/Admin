import React from 'react';
import classes from './AddUser.module.css'
import {withRouter, Link} from 'react-router-dom'

class AddUser extends React.Component {

    state = {
        Name: '',
        ID: '',
        email: '',
        phone: 0,
        
    }

    onHandleID = (e) => {
         this.setState({
            ID:e.target.value
        })
    }
    onHandleName = (e) => {
        this.setState({
           Name:e.target.value
       })
   }
   onHandleemail = (e) => {
    this.setState({
       email:e.target.value
   })
}
onHandlephone = (e) => {
    this.setState({
       phone:e.target.value
   })
}

    onAddNewUser = () => {

        let Storage = JSON.parse(localStorage[('LocalData')]);
        const updatedList = Storage;
        const pro=this.state

        const data = {
            id: pro.ID,
            name: pro.Name,
            email: pro.email,
            phone: pro.phone,
        }
        if (pro.details===false) {
            alert('Please fill in all the fields!');
            return false;
        } else {
            updatedList.push(data);
            Storage = updatedList;
    
            localStorage.setItem('LocalData', JSON.stringify(Storage));
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
                                    <h2>Add User</h2>
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
                                            <label for="description">NAME</label>
                                            <input type="text" onChange={this.onHandleName} />
                                        </div>
                                        <div className={classes.form}>
                                            <label for="description">EMAIL</label>
                                            <input type="email" onChange={this.onHandleemail} />
                                        </div>
                                        <div className={classes.form}>
                                            <label for="description">Ph.NUMBER</label>
                                            <input type="number" onChange={this.onHandlephone} />
                                        </div>
                                    </form>
                                </div>
                                
                                      <div className={classes.btnWrapper}>
                                    
                                    <Link to='./admin'><button onClick={this.onAddNewUser} type="submit" className={classes.btn}>ADD USER NOW</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddUser;