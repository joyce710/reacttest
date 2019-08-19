import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import MyTemplete  from '../../../templete/index.js';
import CodeBlock from '../../../CodeBlock.js';
import ReactMarkdown from 'react-markdown';

const styles = theme => ({
  root:{
    margin: "auto",
    width: '100%',
    justifyContent: "Center",
    marginTop: "50px",
    marginBottom: "50px",
    padding: "auto",
    display:"flex",
  },
  snackbar1: {
    margin: theme.spacing.unit*3,
    padding: theme.spacing.unit*2,
    color: "forestgreen",
    fontSize: 15,
  },
  snackbar2: {
    margin: theme.spacing.unit*3,
    padding: theme.spacing.unit*2,
    color: "red",
    fontSize: 15
  }
});

function MyMessageBar(props) {
  const { classes } = props;

  let output = (
    <div className = {classes.root}>
      <SnackbarContent className={classes.snackbar1} message=" Have you finished our assignment?" />
      <SnackbarContent
        className={classes.snackbar2}
        message={
          'Still working on it. \
          And  you?'
        }
      />
      <SnackbarContent
        className={classes.snackbar1}
        message="I have not either. Can professor accept late submission?"
      />
      <SnackbarContent
        className={classes.snackbar2}
        message={
          'No. \
          But there is one week remaining, do not be upset.'
        }
      />
  </div>
  );

  let myName = "Message Bar";

  let string = `

    import SnackbarContent from '@material-ui/core/SnackbarContent';

    function LongTextSnackbar(props) {

      return (
        <div>
          <SnackbarContent message="hello"  />
            <SnackbarContent message={your content}/>
            <SnackbarContent message="hi"/>
        </div>
      );
     }`;

  let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);

  return (
    <div>
    <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
    </div>
    );

}

MyMessageBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyMessageBar);
