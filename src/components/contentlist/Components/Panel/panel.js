import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MyTemplete  from '../../../templete/index.js';
import CodeBlock from '../../../CodeBlock.js';
import ReactMarkdown from 'react-markdown';
const styles = theme => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  panel: {
    backgroundColor: theme.palette.grey['200'],
  },
  heading: {
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightRegular,
  },
  content: {
    textAlign: 'left',
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function MyPanel(props) {
  const { classes } = props;
  const content1 = `
  WhatsApp, which is owned by Facebook, said the attack targeted a "select number" of users and was orchestrated by "an advanced cyber-actor".

  A fix was rolled out on Friday.

  On Monday, WhatsApp urged all of its 1.5 billion users to update their apps as an added precaution.

  The surveillance software involved was developed by Israeli firm NSO Group, according to a report in the Financial Times.

  Facebook first discovered the flaw in WhatsApp earlier in May.
  `;
  const content2 =`
  Global stock markets have steadied amid hopes that the US and China will resume talks next month, following an escalation in their trade war.

On Monday, China announced tit-for-tat tariffs on $60bn (£46bn) of US exports, causing stock markets to tumble

But later US President Donald Trump said he expected to meet China's president at the G20 summit in Japan.

He also said he had not decided whether to go ahead with threatened tariffs on another $325bn of Chinese imports.

At a briefing on Tuesday, China's foreign ministry spokesman Geng Shuang said: "The two heads of state maintain contact through various means."

  `;
  const content3=`
  Two seaplanes carrying tourists from the same cruise ship have collided in south-eastern Alaska, with at least four people dead and two missing.

One plane was carrying 11 people when it hit the other, which had five people aboard, near Ketchikan.

Ten of those aboard the first plane survived and were taken to hospital.

Three of those killed were aboard the other aircraft, while it is unclear which plane carried the fourth victim.
  `;
  const content4 =`
  Former US President Jimmy Carter has undergone surgery for a broken hip after falling at his home in Georgia, his office says.

The 94-year-old, the oldest living former US president, was on his way to go turkey hunting when he fell.

Mr Carter was recovering comfortably at a medical centre in Americus, near his home in Plains, with his wife, Rosalynn, a statement said.

His surgeon was quoted as saying that the operation was successful.

A Democrat from Georgia, Mr Carter was a relative unknown in the US political world when he was elected president in 1976. He served from 1977 to 1981.

"President Carter said his main concern is that turkey season ends this week, and he has not reached his limit. He hopes the State of Georgia will allow him to rollover the unused limit to next year," the Carter Center said.
  `;
  const content5 = `
  A group of US consumers has been given the go-ahead by the Supreme Court to sue Apple over app prices.

The iPhone users argued that there is no alternative place to buy an iPhone app, but that Apple takes a 30% commission on every sale, so therefore they are being overcharged.

They claim that this puts Apple in breach of anti-trust laws.

Apple said that it was an agent for app developers and that it neither owned nor sold the apps itself.

However, while app developers set their own prices, Apple collects the payments.
  `;
  const content6 = `
  Hollywood legend Doris Day, whose films made her one of the biggest stars of all time, has died aged 97.

The singer turned actress starred in films such as Calamity Jane and Pillow Talk and had a hit in 1956 with Que Sera, Sera (Whatever Will Be, Will Be).

Her screen partnership with Rock Hudson is one of the best-known in the history of romantic movies.

In a statement, the Doris Day Animal Foundation said she died on Monday at her home in Carmel Valley, California.
It said she had been "in excellent physical health for her age, until recently contracting a serious case of pneumonia".

"She was surrounded by a few close friends as she passed," the statement continued.
  `;
  let output = (
    <div className={classes.root}>
      <h1 className = "panel-title"><b>Summary of Recent Head News (click to expand)</b></h1>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>WhatsApp discovers 'targeted' surveillance attack</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.content}>
            {content1}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Markets calm amid hopes for US-China talks</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.content}>
            {content2}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Deadly seaplane collision in Ketchikan Alaska</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.content}>
            {content3}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Jimmy Carter has surgery for broken hip after falling at home</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.content}>
            {content4}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Apple faces customer lawsuit over app store</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.content}>
            {content5}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Doris Day, Hollywood actress and singer, dies aged 97</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.content}>
            {content6}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );

  let myName = "Panel";

  let string = `

    import ExpansionPanel from '@material-ui/core/ExpansionPanel';
    import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
    import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
    import Typography from '@material-ui/core/Typography';
    import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

    function Panel(props) {
      const yourContent = "your content";
      return (
        <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Your Title</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography >
              {yourContent}
            </Typography>
          </ExpansionPanelDetails>
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

MyPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyPanel);
