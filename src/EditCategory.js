import React from 'react';
import classes from './AddUser.module.css'
import {withRouter, Link} from 'react-router-dom'

class EditCategory extends React.Component {
    state={
        // ID:'',
        title:'',
        
        pos:localStorage.getItem('Position1'),
        data: JSON.parse(localStorage[('Category')])
    }
    
    handleclick=()=>{
        console.log(this.state.data[this.state.pos]);
        let data = this.state.data;
        let pos = this.state.pos;
        data[pos].title = this.state.title;
        
        localStorage.setItem('Category',JSON.stringify(data))

        
       
    }
   
   onHandletitle = (e) => {
       console.log(e.target.value)
    this.setState({
       title:e.target.value
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
                                    <h2>Edit Category</h2>
                                </div>
                            </div>
                            <div className={classes.container}>
                                <div className={classes.col}>
                                    <form>
                                        
                                        
                                        <div className={classes.container1}>
                                            <div className={classes.form1}>
                                                <label for="expire_date">TITLE</label>
                                                <input type="text"  onChange={this.onHandletitle}/>
                                            </div>
                                          
                                        </div>
                                    </form>
                                </div>
                               
                                <div className={classes.btnWrapper}>
                                    <Link to="admin">
                                    <button type="submit" onClick={this.handleclick} className={classes.btn}>UPDATE NOW</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EditCategory;