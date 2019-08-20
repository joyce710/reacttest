import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import MyTemplete  from '../../../templete/index.js';
import CodeBlock from '../../../CodeBlock.js';
import ReactMarkdown from 'react-markdown';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 3,
  },
});

function MySpinner(props) {
  const { classes } = props;
  let output = (

      <div className={classes.root}>
    <CircularProgress className={classes.progress} />
    <CircularProgress className={classes.progress} color="secondary" />
    <CircularProgress className={classes.progress} />
    <CircularProgress className={classes.progress} color="secondary" />
    <CircularProgress className={classes.progress} />
    <CircularProgress className={classes.progress} color="secondary" />
        <div>
          <CircularProgress className={classes.progress} />
          <CircularProgress className={classes.progress} color="secondary" />
        </div>
  </div>


);
  let myName = "Spinner";

  let string = `

    import CircularProgress from '@material-ui/core/LinearProgress';

    function Circular(props) {
    return (
      <div>
        <CircularProgress/>
        <br />
        <CircularProgress color="secondary" />
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

MySpinner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MySpinner);
