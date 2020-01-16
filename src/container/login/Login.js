import React , {Component} from 'react';
import { compose } from 'redux';
import {connect} from 'react-redux';
import {reduxForm , Field} from 'redux-form';
import * as actions from '../../actions/LoginActions';


class Login extends Component{

    state={
        creds:{
        username:'abcd',
        password:''
    },
        validate:true
    }

    onsubmit=(formProps)=>{
     
        this.props.signIndisp(formProps.email,formProps.password);
        if(this.props.crds.username==='sri'){
            console.log('Name captured*******************');
            
        }
        else{
            document.write("not validated username");
        }
        }
    
    render(){
        const {handleSubmit}=this.props;
        return(

            <div>
            <form onSubmit={handleSubmit(this.onsubmit)}>
                <fieldset>
                    <label>
                        Email
                    </label>
                    <Field
                    name="email"
                    type="text"
                    component="input"
                    autoComplete="none"
                    />
                </fieldset>
                <fieldset>
                    <label>
                        Password
                    </label>
                    <Field
                    name="password"
                    type="password"
                    component="input"
                    autoComplete="none"
                    />
                </fieldset>
                <button>SignIn</button>
            </form>
        
            </div>            
        );
    }
}

const mapStateToProps=state=>{
return{
    crds:state
};
}

const mapDispatchtoProps=dispatch=>{
return{
        signIndisp:(username, password)=>dispatch(actions.signin(username,password))
    }
}

//export default connect(mapStateToProps,mapDispatchtoProps)(Login);
export default compose(
connect(mapStateToProps,mapDispatchtoProps),
reduxForm({form:'signin'}),
)(Login);