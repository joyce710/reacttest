import React from 'react';
import * as Icons from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import CodeBlock from '../../';
import ReactMarkdown from 'react-markdown';


class MyIconography extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      selected : null
    };
  }

  onSelect=(key)=>
  {
    this.setState({selected: key});
  }

  handleClose = () => {
    this.setState({ selected: null });
  };

//最开始给一个selected的状态是没有的，这样一开始selected才能是没有，当点击onclick，需要改变
  //改变他的state，让selected值为一个key。所以这里需要设定state来存放selected的值，因为要改变
  renderOneIcon = (icon)=>
  {
    let MyIcon = Icons[icon];
    return(
        <li className = "one-icon-display" onClick={()=>this.onSelect(icon)} key = {icon}>
          <MyIcon />//可以直接？？？
        </li>
    );
  }

  renderDialog=()=>
  {
    const {selected} = this.state;
    if(!selected) return;
    const SingleIcon = Icons[selected];
    const string = `
    import {Icons} from '@material-ui/icons/';
    const IconComponent = Icons['${selected}'];
    return <div><IconComponent /></div>;
    `;
    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
    return(
        //这里把selected转成Boolean
        <Dialog open={!!selected} onClose={this.handleClose}>
          <DialogTitle id="alert-dialog-title">
            {selected}
            {" Icon "}
            <SingleIcon/>
            {" Sample  Usage"}
          </DialogTitle>
          <DialogContent>
            {code}
          </DialogContent>

          <Button onClick={this.handleClose} color="primary">
            Close
          </Button>
        </Dialog>
    );
  }

  render()
  {
    let output = [];
    for(let oneIcon in Icons)
    {
      output.push(this.renderOneIcon(oneIcon));
    }
    return(
        <div >
          <Paper className = "icon-paper" elevation = {20}>
            <h1 className = "icon-title">Click on Icons to Check Sample Usage</h1>
            <ul className = "icons-display">{output}</ul>
            {this.renderDialog()}
            //这是函数，如果没有执行就不会显示
          </Paper>
        </div>
    );
  }

}

export default MyIconography;
