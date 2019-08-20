import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import MyTemplete  from '../../../templete/index.js';
import CodeBlock from '../../../CodeBlock.js';
import ReactMarkdown from 'react-markdown';

const styles = theme =>({
  root: {
    flexGrow: 1,
  },
  progress: {
    padding: theme.spacing.unit * 0.5,
    margin:theme.spacing.unit * 7,
  },
});

function MyProgress(props) {
  const { classes } = props;
  let output = (<div className={classes.root}>
    <LinearProgress className={classes.progress}/>
    <LinearProgress className={classes.progress} color="secondary" />
    <LinearProgress className={classes.progress}/>
    <LinearProgress className={classes.progress} color="secondary" />
    <LinearProgress className={classes.progress}/>
    <LinearProgress className={classes.progress} color="secondary" />

  </div>
  );
  let myName = "Progress";
  let string = `

    import LinearProgress from '@material-ui/core/LinearProgress';

    function LinearIndeterminate(props) {
    return (
      <div>
        <LinearProgress />
        <br />
        <LinearProgress color="secondary" />
      </div>
     );
    }`;

  let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);

  return (
    <div>
    <MyTemplete content = {output} name = {myName} sampleUsage={code}/>
    </div>
  );
}

MyProgress.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyProgress);
