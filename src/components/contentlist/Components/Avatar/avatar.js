
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
                           src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566350124372&di=80800c799b9d41b0b399bd4d988d8084&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F21%2F20180221223815_xkkyq.jpg'/>
                       <Avatar
                           src='http://pic.3h3.com/up/2012-12/20121212272714532426.jpg'/>
                       <Avatar
                           src='http://img.besoo.com/file/201807/17/10i2m3ciz2v.jpg?x-oss-process=style/besoo_shuiyin'/>
                       <Avatar
                           src="http://img.besoo.com/file/201807/17/pac3zizoq1a.jpg?x-oss-process=style/besoo_shuiyin"/>
                       <Avatar
                           src="http://img.besoo.com/file/201807/17/pnlp25pt0lv.jpg?x-oss-process=style/besoo_shuiyin"/>
                       <Avatar
                           src="http://img.besoo.com/file/201807/17/sbehqhm24u4.jpg?x-oss-process=style/besoo_shuiyin"/>
                       <Avatar
                           src="http://img.besoo.com/file/201807/17/dnpcb2eynrw.jpg?x-oss-process=style/besoo_shuiyin"/>


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
