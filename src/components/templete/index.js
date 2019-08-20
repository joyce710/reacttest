import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 2 }}>
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
        margin: theme.spacing.unit * 1,
        fontSize: 20

    },
});

class MyTemplete extends React.Component {
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

    render() {
        const {classes} = this.props;
        const { value } = this.state;
        return(
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs  value={value} onChange={this.handleChange}>
                        <Tab label={this.props.name} />
                        <Tab label="Usage" />

                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><h1 className = "tab-content">{this.props.content}</h1></TabContainer>}
                {value === 1 && <TabContainer><h1 className = "tab-content">{this.props.sampleUsage}</h1></TabContainer>}

            </div>
        );
    }

}

MyTemplete.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyTemplete);
