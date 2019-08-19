import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import MyTemplete  from '../../../templete/index.js';
import CodeBlock from '../../../CodeBlock.js';
import ReactMarkdown from 'react-markdown';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing.unit * 3,
  },
});

class MyTabs extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      value : 0
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  renderTabs()
  {
    const {classes} = this.props;
    const { value } = this.state;
    let content1 = `
    Also known as Rosa blush ramblers, these roses are found in older cottage gardens and are nearly thorn-free. Attractive and healthy, blush roses have light green leaves and smell sweet and extraordinary. They are usually light pink in color and make excellent climbing roses, which is why they are often used in arbors or pergolas. They can grow up to 15 feet in height and do best in zones 5-10. The roses open up in early spring and have a cluster look that is very attractive.
    `;
    let content2 =`
    These roses were introduced in the 1860s and have a large number of berry-like rose hips, or fruit, as well as a great aroma. In fact, if you’re curious about whether or not a certain rose is truly an “old” type, all you have to do is smell it because antique roses have a wonderful aroma that sticks around for a while. It blooms in late summer or early fall and comes in several different sub-categories.
    `;
    let content3 = `
    These roses flower once in the summertime and they have rich, dark-red single blooms. They originate from an old rose group from Europe and Asia and they are considered by many to be the nicest type of old garden roses.
    `;
    let content4 = `
    Also called Celsiana Damask roses, these flowers originated from Damascus and bloom only once during the summer months. They are a cross between two other varieties of roses and have a lovely light pink-and-white color.
    `;
    let content5 = `
    Known as the modern garden rose of today, there were once four varieties of this type of rose. They were brought into the United States in the 18th and 19th centuries by people from eastern Asia and China. The ones brought in at that time flowered several times a year, including throughout the entire summer and into the fall.
    `;
    return(
      <div className={classes.root}>
      <h1 className = "tab-title"><b>Summary of 5 Classic Types of Rose</b></h1>
      <AppBar position="static">
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Blush roses" />
          <Tab label="Antique climbing roses" />
          <Tab label="Gallica roses" />
          <Tab label="Damask roses" />
          <Tab label="Louis Phillippe China rose" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer><h1 className = "tab-content">{content1}</h1></TabContainer>}
      {value === 1 && <TabContainer><h1 className = "tab-content">{content2}</h1></TabContainer>}
      {value === 2 && <TabContainer><h1 className = "tab-content">{content3}</h1></TabContainer>}
      {value === 3 && <TabContainer><h1 className = "tab-content">{content4}</h1></TabContainer>}
      {value === 4 && <TabContainer><h1 className = "tab-content">{content5}</h1></TabContainer>}
    </div>
    );
  }
  render() {
    let output = this.renderTabs();
    let myName = "Tabs";
    let string = `
    import AppBar from '@material-ui/core/AppBar';
    import Tabs from '@material-ui/core/Tabs';
    import Tab from '@material-ui/core/Tab';

    <div >
      <AppBar >
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>Item One</TabContainer>}
      {value === 1 && <TabContainer>Item Two</TabContainer>}
      {value === 2 && <TabContainer>Item Three</TabContainer>}
    </div>`;

    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);

    return (
      <div>
      <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
      </div>
    );
  }
}

MyTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyTabs);
