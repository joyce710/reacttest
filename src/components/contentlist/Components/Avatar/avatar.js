
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
                       <Avatar style={{backgroundColor: '#8abc89'}}>
                           <FolderIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#e91e63'}}>
                           <ThreeDRotationIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#4caf50'}}>
                          <DeleteOutlinedIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#AE13E6'}}>
                          <ShoppingCartIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#F01F6C'}}>
                          <MailIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#F06C1F'}}>
                          <DoneIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#16A177'}}>
                          <FaceIcon/>
                       </Avatar>

                   </div>


           <h1 className = "row"><b>Letters</b></h1>

                   <div className = "avatar-display">
                       <Avatar style={{backgroundColor: '#457ab2'}}>R</Avatar>
                       <Avatar style={{backgroundColor: '#ff5722'}}>U</Avatar>
                       <Avatar style={{backgroundColor: '#673ab7'}}>I</Avatar>
                       <Avatar style={{backgroundColor: '#1B61ED'}}>Y</Avatar>
                       <Avatar style={{backgroundColor: '#f572a2'}}>A</Avatar>
                       <Avatar style={{backgroundColor: '#a43ab7'}}>N</Avatar>
                       <Avatar style={{backgroundColor: '#38E265'}}>G</Avatar>
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
