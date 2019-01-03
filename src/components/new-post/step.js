import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './index.scss';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { fetchCategories } from '../../modules/category';
import { createPost } from '../../modules/post';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {history} from '../../index';

const styles = theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return ['Select a category', 'Create a review or question', 'Create tags'];
}


class NewPostStep extends React.Component {
  state = {
    activeStep: 0,
    categories: [],
    post: null
  };

  componentDidMount(){
    this.props.fetchCategories();
  }

  componentWillReceiveProps(np){
    this.setState({categories: np.category.categories})
  }

  handleNext = () => {
    const {activeStep, post} = this.state;
    switch (activeStep) {
      case 0:
      if(!post || (post.category_id == "")) {
        toast.error("Please select a category");
        return false
      }
        break;
      
      case 1:
      if((!post.title || post.title == "")) {
        toast.error("Please fill the title");
        return false
      }

      if((!post.details || post.details == "")) {
        toast.error("Please fill the details");
        return false
      }
        break;

      case 2:
      
      if((!post.tags || post.tags.length > 3)) {
        toast.error("You need to provide upto 3 tags");
        return false
      }
      const data = {
        postData: post
      }
      this.props.createPost(data);
      toast.success("You post has been published");
        break;

      default:
        break;
    }

    console.log(activeStep)
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    window.location.replace('/')
  };
  
  onStep1Change = value => {
    const { post} = this.state;
    let user = JSON.parse(localStorage.getItem("loggedUser"));
    let user_id = null;
    if(user) {
      user_id = user.id;
    }else {
      user_id = null
    }
    this.setState({post: { ...post ,"category_id": value, user_id}});
  }
  
  onStep2Change = value => {
    const { post} = this.state;
    this.setState({post: { ...post ,"details": value}});
  }
  
  onStep2ChangeTitle = value => {
    const { post} = this.state;
    this.setState({post: { ...post ,"title": value}});
  }
  
  onStep3Change = value => {
    const { post} = this.state;
    this.setState({post: { ...post ,"tags": value}});
  }
  

  getStepContent(step) {
    switch (step) {
      case 0:
        return <Step1 categories={this.state.categories} onStep1Change={this.onStep1Change}/>;
      case 1:
        return <Step2 onStep2Change={this.onStep2Change} onStep2ChangeTitle={this.onStep2ChangeTitle}/>;
      case 2:
        return <Step3 onStep3Change={this.onStep3Change}/>;
      default:
        return 'Unknown step';
    }
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root} id="new-post-steps">
      <ToastContainer/>
       <Grid container spacing={8}>
        <Grid item xs={1} />
        <Grid item xs>
        <Paper >
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{this.getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button variant="contained" onClick={this.handleReset}  color="primary" className={classes.button}>
              Back to Home
            </Button>
          </Paper>
        )}
        </Paper>
        </Grid>
        <Grid item xs={1} />
        </Grid>
      </div>
    );
  }
}

NewPostStep.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = {
  fetchCategories,
  createPost
}


export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(NewPostStep));
