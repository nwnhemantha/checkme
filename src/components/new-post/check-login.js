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
import SecurityIcon from '@material-ui/icons/Security';
import { connect } from 'react-redux';

import { history } from '../../index';
import { signIn } from '../../modules/user';

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
    },
    warning: {
        color: 'orange'
    }
  });





class CheckLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogged: false
        }
    }

    componentDidMount(){
        
        let user = JSON.parse(localStorage.getItem("loggedUser"));

        if(user) {
            this.setState({ isLogged: true})
        }
        this.loadAd1(); 
        this.loadAd2(); 
    }

    loadAd1(){
        if (window.CHITIKA === undefined) { window.CHITIKA = { 'units' : [] }; };
        var unit = {"calltype":"async[2]","publisher":"checkme","width":320,"height":50,"sid":"Chitika Default"};
        var placement_id = window.CHITIKA.units.length;
        window.CHITIKA.units.push(unit);
    }

    loadAd2(){
        if (window.CHITIKA === undefined) { window.CHITIKA = { 'units' : [] }; };
        var unit = {"calltype":"async[2]","publisher":"checkme","width":728,"height":90,"sid":"Chitika Default"};
        var placement_id = window.CHITIKA.units.length;
        window.CHITIKA.units.push(unit);
    } 

    componentWillReceiveProps(np){

        if(np.user.loggedIn){
            this.setState({isLogged:true})
        }
    }

    responseGoogle = (response) => {
        const data = {
            userData: {
                    email:response.w3.U3,
                    login_type:2,
                    name: response.w3.ig,
                    picture: response.w3.Paa,
            }
        }
        this.props.signIn(data);
    }

    responseFacebook = (response) => {
         
        const data = {
            userData: {
                    email:response.email,
                    login_type:1,
                    name: response.name,
                    picture: response.picture.data.url
            }
        }
        this.props.signIn(data);

    }

    next = () => {
       this.setState({isLogged: true});
    }

    goPrivacyPage = () => {
        window.location.replace('privacy');
    }

    render() {
        const { classes } = this.props;
        if(this.state.isLogged){
            return (
                <Step />
            )
        }
    const isMobile = window.innerWidth < 720;

    return (
      <div style={{marginTop: '80px', marginLeft: isMobile? '-120px': '80px' }}>
      <Paper className={classes.root} elevation={1}>
      <div id={`chitikaAdBlock-0`}></div>
      <FacebookLogin
            appId="208836120062087"
            fields="name,email,picture"
            callback={this.responseFacebook} />
        <br />
        <GoogleLogin
            clientId="778699611723-ioeo1poist5anu9spbaumlrh1fa0ejlu.apps.googleusercontent.com"
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={this.responseGoogle}
            className={classes.google}
            onFailure={this.responseGoogle}
            />
            <br />
            <br />
            <Button color="primary" small onClick={this.goPrivacyPage}>
                Privacy Policy <SecurityIcon className={classes.warning}/>
            </Button>
        <Divider component="div" className={classes.divider}/>

        <div>
        <Typography className={classes.dividerInset} color="textSecondary"> 
            <h3>OR</h3> continue as <b>User_{moment().unix()}</b> 
        </Typography>
        <Button color="primary" onClick={this.next}>
            Continue >>>
        </Button>
        </div>
      </Paper>

      <div id={`chitikaAdBlock-1`} style={{ marginTop: "20px", marginLeft: "20%"}}></div>
        
        </div>

    );
  }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = {
    signIn
}

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(CheckLogin));
