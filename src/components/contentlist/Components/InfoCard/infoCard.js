import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MyTemplete  from '../../../templete/index.js';
import CodeBlock from '../../../CodeBlock.js';
import ReactMarkdown from 'react-markdown';
import CardIMG from '../../../../assets/images/grandeC.jpg';

const styles = {
  card: {
    width: '100%',
    maxWidth: "400px",
    margin: "auto",
    marginTop: "20px",
    marginBottom: "50px",
  },
  media: {
    height: "250px",
  },
};

function MyInfoCard(props) {
  const { classes } = props;
  let output = (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={CardIMG}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Grand Canyon
            </Typography>
            <Typography component="p">
              The Grand Canyon is perhaps the world’s greatest natural wonder. It offers an innumerable variety of sensations from the sublime vistas at the canyon rim to the subtle charm of the tiny creeks and streams which nourish the backcountry traveler. From the raging rapids of the mighty Colorado River to the stark desert beauty of the Tonto plateau.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
  );

  let myName = "Info Card";

  let string = `

    import Card from '@material-ui/core/Card';
    import CardActionArea from '@material-ui/core/CardActionArea';
    import CardActions from '@material-ui/core/CardActions';
    import CardContent from '@material-ui/core/CardContent';
    import CardMedia from '@material-ui/core/CardMedia';
    import Button from '@material-ui/core/Button';
    import Typography from '@material-ui/core/Typography';

    return (
        <Card>
          <CardActionArea>
            <CardMedia image={Your IMG}/>
            <CardContent>
              <Typography>
                Your Title
              </Typography>
              <Typography component="p">
                 Your Content
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button> option 1 </Button>
            <Button> option 2</Button>
          </CardActions>
       </Card>
    );`;

  let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);

  return (
    <div>
    <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
    </div>
  );

}

MyInfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyInfoCard);
