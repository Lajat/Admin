import React from 'react';
import classes from './AddUser.module.css'
import {withRouter, Link} from 'react-router-dom'

class EditUser extends React.Component {
    state={
        name:'',
        email:'',
        phone:'',
        pos:localStorage.getItem('Position'),
        data: JSON.parse(localStorage[('LocalData')])
    }
    
    handleclick=()=>{
        console.log(this.state.data[this.state.pos]);
        let data = this.state.data;
        let pos = this.state.pos;
        console.log(this.state.name)

        data[pos].name = this.state.name;
        data[pos].email = this.state.email;
        data[pos].phone = this.state.phone;
        localStorage.setItem('LocalData',JSON.stringify(data))

        console.log(data);
       
    }
    onHandleName = (e) => {
        this.setState({
           name:e.target.value
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
    render() {
        return(
            <div className={classes.main}>
                <div className={classes.container}>
                    <div className={classes.contentWrapper}>
                        <div className={classes.content}>
                            <div className={classes.container}>
                                <div className={classes.heading}>
                                    <h2>Edit User</h2>
                                </div>
                            </div>
                            <div className={classes.container}>
                                <div className={classes.col}>
                                    <form>
                                        <div className={classes.form}>
                                            <label for="name">Name</label>
                                            <input rows="3" required onChange={this.onHandleName}/>
                                        </div>
                                        
                                        <div className={classes.container1}>
                                            <div className={classes.form1}>
                                                <label for="expire_date">Email</label>
                                                <input type="text"  onChange={this.onHandleemail}   />
                                            </div>
                                            <div className={classes.form1}>
                                                <label for="stocks">Ph.number</label>
                                                <input type="text" onChange={this.onHandlephone} required/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                               
                                <div className={classes.btnWrapper}>
                                    
                                    <Link to='./admin'><button type="submit" onClick={this.handleclick} className={classes.btn}>UPDATE NOW</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EditUser;