import React from 'react';
// import {connect} from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

class MyTemplete extends React.Component{
    constructor(props){
        super(props)
        //初始化状态
        this.state={
            value:true
        }
     //新增方法中this强制绑定为组件对象
        //bind 相当于把组建的上下文context给了新增函数
        this.handleChange=this.handleChange.bind(this)
    }
  //新添加方法，内部this默认不是组件对象而是undefined，所以要把新方法把this指向该对象
    handleChange(){
        //x先得到之前的状态并取反
        const value = !this.state.value
        //更新状态
        this.setState({value})

    }
    //重写组件方法
    render() {
        //读取状态
        const {value}=this.state
        return (
            <div className = "root">
                <Paper className="paper" elevation = {20}>
                    <AppBar position="static" className="templete-appbar">
                        <div className = "tab-content">
                            <Tabs value={value} onClick={this.handleChange}>
                                {console.log(value)}
                                <Tab label={this.props.name} value={value}/>
                                <Tab label="Usage" value={value}/>
                            </Tabs>
                        </div>
                    </AppBar>

                    {value===true ? this.props.content :this.props.sampleUsage}

                </Paper>
            </div>
        )
    }
}
export default MyTemplete