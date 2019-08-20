
import React from 'react';
import MyTemplete  from '../../../templete/index.js';
import CodeBlock from '../../../CodeBlock.js';
import ReactMarkdown from 'react-markdown';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MailIcon from '@material-ui/icons/Mail';
import DoneIcon from '@material-ui/icons/Done';
import FaceIcon from '@material-ui/icons/Face';




class MyAvatar extends React.Component
{
  renderAvatar()
  {
    return(
      <div className='avatar-list'>
          <span className = "row1"> <h1><b>External Images</b></h1></span>


                   <div className = "avatar-display">
                       <Avatar
                           src='https://pixabay.com/illustrations/dancer-avatar-icon-red-man-1904467/'/>
                       <Avatar
                           src='https://pixabay.com/illustrations/dancer-avatar-icon-red-man-1904467/'/>
                       <Avatar
                           src='https://pixabay.com/illustrations/dancer-avatar-icon-red-man-1904467/'/>
                       <Avatar
                           src="https://pixabay.com/vectors/amusing-avatar-cartoon-1299757/"/>
                       <Avatar
                           src="https://pixabay.com/vectors/amusing-avatar-cartoon-1299757/"/>
                       <Avatar
                           src="https://pixabay.com/vectors/amusing-avatar-cartoon-1299757/"/>
                       <Avatar
                           src="https://pixabay.com/vectors/amusing-avatar-cartoon-1299757/"/>


                   </div>


           <h1 className = "row"><b>Svg Icons</b></h1>

                   <div className = "avatar-display">
                       <Avatar style={{backgroundColor: '#E8A5E5'}}>
                           <FolderIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#CAE561'}}>
                           <ThreeDRotationIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#5CE8AB'}}>
                          <DeleteOutlinedIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#67A9EC'}}>
                          <ShoppingCartIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#EC67D6'}}>
                          <MailIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#F4A658'}}>
                          <DoneIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#BE7DE9'}}>
                          <FaceIcon/>
                       </Avatar>

                   </div>


           <h1 className = "row"><b>Letters</b></h1>

                   <div className = "avatar-display">
                       <Avatar style={{backgroundColor: '#20b24a'}}>S</Avatar>
                       <Avatar style={{backgroundColor: '#46ffda'}}>U</Avatar>
                       <Avatar style={{backgroundColor: '#8c77b7'}}>P</Avatar>
                       <Avatar style={{backgroundColor: '#8CAAEF'}}>E</Avatar>
                       <Avatar style={{backgroundColor: '#f572a2'}}>R</Avatar>
                       <Avatar style={{backgroundColor: '#d3f440'}}>H</Avatar>
                       <Avatar style={{backgroundColor: '#e280cd'}}>A</Avatar>
                   </div>

       </div>
    );
  }

  render()
  {
    let output = this.renderAvatar();
    let myName = "Avatar";
    let string = `

    import Avatar from '@material-ui/core/Avatar';

     <div>
       <Avatar
           src="your link"
       />
       <Avatar>
         <Your Icon>
       </Avatar>
       <Avatar>
         Your Text
       </Avatar>
     </div>`;

    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
    return(
      <div>
      <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
      </div>
    );
  }

}

export default MyAvatar;
