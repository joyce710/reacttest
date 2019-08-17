/*
To render app header,
including left menu button, home icon, app name, and right menu button
*/

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import LaunchIcon from '@material-ui/icons/Launch';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import DynamicSideBar from '../sideBar/index.js'
import Collapse from '@material-ui/core/Collapse';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import HomeIcon from '../../assets/images/home1.png';
import HomeAction from '../../redux/actions/headerAction.js';

class Header extends React.Component{

    loopMenu(content){
        let menu=[];
        for(let i in content){
            menu.push(<a href={content[i].link} key={content[i].label} target="_blank" rel="noopener noreferrer">
                <MenuItem key={content[i].label}> {content[i].label}</MenuItem></a>);
        }
        return(
            <div>{menu}</div>
        )
    }

    handleClick=(event)=>{
        this.props.showRightMenu(event);

    };

    handleClose=()=>{
        this.props.closeRightMenu();
    };

    render() {

        const {anchorEl} = this.props
        const {rightContent}=this.props
        let output=this.loopMenu(rightContent);

        return(
            <div className = "root">
                <AppBar className="appbar">
                    <Toolbar className = "toolbar">
                        <div>
                            <ListItem button onClick={()=>{this.props.SideBarOpen()}} >
                                <ListItemIcon><MenuIcon />{111}</ListItemIcon>
                            </ListItem>
                        </div>
                        <div className = "home-icon">
                            <NavLink to="/"><Avatar src = {HomeIcon} /></NavLink>
                        </div>
                        <Typography variant="h6" className = "grow">
                            <span className = "titleColor">Design Reference43</span>
                        </Typography>
                        <div className = "rightMenuButton">
                            <IconButton aria-label="More" aria-haspopup="true" onClick={this.handleClick}>
                                <LaunchIcon />
                            </IconButton>
                        </div>
                        {/*//anchorEl作用是告诉这个memu 组件里的内容会在哪里出现，所以 当在IconButton这个组件里点击时，它的*/}
                        {/*//这个anchorEl的值就变成了IconButton这个tag（在reducer里设置了）*/}
                        {/*//这个menu里当anchor值为null，不显示，当anchor值为一个目标tag时，就在那个tag里显示menu组件里内容。*/}
                        {/*//出发这个的是IconButton 里的handleClick这个event，这个event的currenttarget就是IconButton，*/}
                        {/*//所以在reducer里定义好anchor在有event时的值为IconButton*/}
                        <Menu  className="rightMenu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                            {output}
                        </Menu>
                    </Toolbar>
                </AppBar>
                <div>
                    <List>
                        <Collapse in={this.props.listOpenState} timeout="auto" unmountOnExit>
                            <div className="list">
                                <List component="div">
                                    <DynamicSideBar/>5555
                                </List>
                            </div>
                        </Collapse>
                    </List>
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state) =>{
    return{
        anchorEl: state.headerReducer.anchorEl,
        rightContent: state.headerReducer.rightContent
    }
}
 const mapDispatchtoProps=(dispatch)=>{
    return{
        //第一个是和声明的调用的方法一致，第二个和action里的一致 看到大小写
        showRightMenu: (event)=>{dispatch(HomeAction.ShowRightMenu(event))},
        closeRightMenu:()=>{dispatch(HomeAction.CloseRightMenu())}
    }
 }

 export  default  connect(mapStateToProps,mapDispatchtoProps)(Header);