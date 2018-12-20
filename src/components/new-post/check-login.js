import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import Step from './step';
import { history } from '../../index';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        width: "400px",
        textAlign: 'center',
        marginLeft: "30%",
        // marginTop:"20%",
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    google: {
        width: "243px",
        height: "53px",
        marginTop: "15px"
    },

    divider: {
        margin: "20px 0px"
    }
  });


const responseFacebook = (response) => {
    console.log('+++++++++++++++',response);
}

const componentClicked = (response) => {
    console.log('==================',response);
}

const responseGoogle = (response) => {
    console.log(response);
}

class CheckLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            islogged: false
        }
    }

    next = () => {
       this.setState({islogged: true});
    }

    render() {
        const { classes } = this.props;
    
        if(this.state.islogged){
            return (
                <Step />
            )
        }

    return (
      <div style={{marginTop: '80px', marginLeft: '80px'}}>
      <Paper className={classes.root} elevation={1}>
      <FacebookLogin
            appId="1088597931155576"
            onClick={componentClicked}
            callback={responseFacebook} />
        <br />
        <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={responseGoogle}
            className={classes.google}
            onFailure={responseGoogle}
            />
        <Divider component="div" className={classes.divider}/>

        <div>
        <Typography className={classes.dividerInset} color="textSecondary"> 
            <h3>OR</h3> continue as <b>user_{moment().unix()}</b> 
        </Typography>
        <Button color="primary" onClick={this.next}>
            Continue >>>
        </Button>
        </div>
      </Paper>

        
        </div>

    );
  }
}

export default withStyles(styles)(CheckLogin);
