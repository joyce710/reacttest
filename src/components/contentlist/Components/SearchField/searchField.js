import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MyTemplete  from '../../../templete/index.js';
import CodeBlock from '../../../CodeBlock.js';
import ReactMarkdown from 'react-markdown';
import Avatar from '@material-ui/core/Avatar';
import MicIcon from '@material-ui/icons/Mic';



const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 500,
    margin: "auto",
    marginTop: "50px",
    marginBottom: "50px",
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
    color:"grey",
  },
  divider: {
    width: 1,
    height: "35px",
    marginLeft: 4,
    marginRight: 4,
  },
};

function MySearchField(props) {
  const { classes } = props;

  let output = (
    <Paper className={classes.root} elevation={20}>
      <IconButton className={classes.iconButton} aria-label="Menu">
        <Avatar style={{backgroundColor: '#83a8e1'}}>G</Avatar>
      </IconButton>
      <InputBase className={classes.input} placeholder="Search Google" />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} />
      <IconButton color="primary" className={classes.iconButton} aria-label="Mic">
        <MicIcon />
      </IconButton>
    </Paper>
  );

  let myName = "Search Field";
  let string = `
    import React from 'react';
    import Paper from '@material-ui/core/Paper';
    import InputBase from '@material-ui/core/InputBase';
    import IconButton from '@material-ui/core/IconButton';

    return (
      <Paper elevation={1}>
        <IconButton>
          <Your Icon />
        </IconButton>
        <InputBase placeholder="Your Text" />
        <IconButton>
          <Your Icon />
        </IconButton>
      </Paper>
    );`;

  let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);

  return (
    <div>
    <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
    </div>
  );
}

MySearchField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MySearchField);
