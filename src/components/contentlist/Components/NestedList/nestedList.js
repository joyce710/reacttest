import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import FolderIcon from '@material-ui/icons/Folder';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MyTemplete  from '../../../templete/index.js';
import CodeBlock from '../../../CodeBlock.js';
import ReactMarkdown from 'react-markdown';
import DraftsIcon from '@material-ui/icons/Drafts';
import Divider from '@material-ui/core/Divider';
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: "400px",
    margin: "auto",
    backgroundColor: "#cee5f4",
    justifyContent: "Center",
    marginTop: "50px",
    marginBottom: "50px",
  },
  nested: {
    paddingLeft: theme.spacing.unit * 1,
  },
  title: {
    paddingTop: theme.spacing.unit * 2,
  },
});

class MyNestedList extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  renderNestedList()
  {
    const { classes } = this.props;
    return (
      <List
        subheader={<h3 className={classes.title}>Typical Folder</h3>}
        className={classes.root}
      >
        <ListItem button>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText inset primary="File 1" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem button>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText inset primary="File 2" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText inset primary="Folder 1" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <Divider />
              <ListItemText inset primary="File 3" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText inset primary="File 4" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  }

  render()
  {
    let output = this.renderNestedList();
    let myName = "Nested List";
    let string = `
    import List from '@material-ui/core/List';
    import ListItem from '@material-ui/core/ListItem';
    import ListItemIcon from '@material-ui/core/ListItemIcon';
    import ListItemText from '@material-ui/core/ListItemText';
    import Collapse from '@material-ui/core/Collapse';

    return (
      <List>
        <ListItem button>
          <Your Icon>
          <ListItemText inset primary="Your text" />
        </ListItem>
        <ListItem button onClick={Your on click function}>
          <ListItemIcon>
            <Your Icon>
          </ListItemIcon>
          <ListItemText inset primary="Your text" />
        </ListItem>
        <Collapse in={Your state} timeout="auto" unmountOnExit>
          <List>
            <ListItem button>
              <Your Icon>
              <ListItemText inset primary="Your text" />
            </ListItem>
          </List>
        </Collapse>
      </List>
     );`;

      let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);

      return(
        <div>
        <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
        </div>
      );
  }

}

MyNestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyNestedList);
