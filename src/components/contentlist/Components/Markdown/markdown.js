
import MyTemplete  from '../../../templete/index.js';
import CodeBlock from '../../../CodeBlock.js';
import ReactMarkdown from 'react-markdown';
import React from 'react';

class MyMarkdown extends React.Component
{
  buildString (){

    let text =   `
        import Badge from '@material-ui/core/Badge';
        import MailIcon from '@material-ui/icons/Mail';

        <React.Fragment>
          <Badge className={classes.margin} badgeContent={99} color="primary">
            <MailIcon />
            </Badge>
          <Badge className={classes.margin} badgeContent={100} color="primary">
            <MailIcon />
          </Badge>
        </React.Fragment>
       `;
    return text;
  }

  renderMarkdown()
  {
    let string = this.buildString();

    let rendered = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);

    return rendered;
  }

  render()
  {

      let myName = "Markdown";
      let output = this.renderMarkdown();
      let sign = "`";
      let string = `
      import ReactMarkdown from 'react-markdown';
      import React from 'react';
      import CodeBlock from 'your path';

      let string = ${sign}${this.buildString()}${sign}

      let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);

      return(
        {code}
      ); `;

      let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
      return(
        <div>
        <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
        </div>
      );
  }
}

export default MyMarkdown
