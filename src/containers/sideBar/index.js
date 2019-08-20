import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
// import Divider from '@material-ui/core/Divider';
import { NavLink } from 'react-router-dom';
import * as Icons from '@material-ui/icons';
import {connect} from 'react-redux';
import SideBarAction from '../../redux/actions/sideBarAction.js';
// import sideBarReducer from '../../redux/reducer/sideBarReducer.js';

class DynamicSideBar extends React.Component
{
    openSubList(oneState,bool){
        this.props.showSublist(oneState,bool);
    }
    resetTabView = () =>{
        this.props.resetValue();
    };
    renderSideItem(item){
        const MyIcon =Icons[item.icon];
        if(item.subNavItems) {
            let listItems = this.loopSubItems(item.subNavItems);
            const expand = this.props.state[item.label] === undefined ?
                window.location.hash.indexOf(item.url) > -1
                : this.props.state[item.label];

            this.props.setState(item.label, expand);

            return (
                <div key={item.label}>
                    <ListItem button onClick={() => {this.openSubList(item.label, expand)}}>
                        <ListItemIcon>
                            <MyIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary={item.label}/>
                        {expand ? <Icons.ExpandLess/> : <Icons.ExpandMore/>}
                    </ListItem>
                    {/*<Divider/>*/}
                    <Collapse in={expand} timeout="auto" unmountOnExit>
                        <List component="div">
                            {listItems}
                        </List>
                    </Collapse>
                </div>
            );
        }
        else{
            return (
                <div key={item.label}>
                    {console.log(item)}
                    <NavLink exact = {item.url === '/'} to={item.url} activeClassName="on-click">
                        <ListItem button onClick = {this.resetTabView}>
                            {/*//这个value值是什么？reset让value值等于0 控制了什么*/}
                            <ListItemIcon>
                                <MyIcon />
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItem>
                    </NavLink>
                    {/*<Divider />*/}
                </div>
            );
        }
    }

    listLoop(list)
    {
        let output=[];
        for(let i in list){
            output.push(this.renderSideItem(list[i]));
        }
        return(
            <div>
                {output}
            </div>
        )
    }
    loopSubItems(list)
    {
        let listItems = []
        for(let i in list)
        {
            listItems.push(this.renderSideItem(list[i]));
        }
        return listItems;
    }

    render(){
        const {data}=this.props;
        return (
            <div>
                {this.listLoop(data)}
            </div>
        );
    }
}
const mapStateToProps =(state)=>{
    return{
        data:state.sideBarReducer.data,
        state:state.sideBarReducer
    }
}
const mapDispatchtoProps=(dispatch)=>{
    return{
        showSublist:(oneState)=>{dispatch(SideBarAction.ShowSublist(oneState))},
        setState:(oneState,bool)=>{dispatch(SideBarAction.SetState(oneState,bool))},
        resetValue: () => {dispatch(SideBarAction.ResetValue())}

    }
}

export default  connect(mapStateToProps,mapDispatchtoProps)(DynamicSideBar)