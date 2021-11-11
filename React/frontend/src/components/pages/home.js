import ButtonAppBar from './navbar';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
export default class Home extends React.Component{

    constructor(){
        super()
        this.state = {
            myCarList:[]
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:8083/api/v1/getCars`).then(res=>{  
                this.setState({myCarList:res.data}); 
      });
    }


    render(){

        const myCars = this.state.myCarList;

        return(
            <>
            <Showlist myCars={myCars}/>
            </>
        )
    } 
}

        const useStyles = makeStyles((theme)=>({
            root1: {
              maxWidth: 345,
            },
            media: {
              height: 140,
            },
            root: {
                flexGrow: 1,
              },
              paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
              },
              placeBody:{
                  marginTop: '5%',
                  marginRight: '20%',
                  marginLeft: '20%',
              }
          }));
  


function Showlist(carlist){
    const classes = useStyles();
    const {myCars}=carlist;
    console.log(myCars)
    return(
        <div>
              <ButtonAppBar/>
                
              <div className={classes.root}>
              <div className={classes.placeBody}>
              <Grid container spacing={3}>
              {
              myCars.map(mycar =>               
              <Grid item xs={12} sm={4} key={mycar.id}>               
              <Card className={classes.root1}>
              <CardActionArea>
              <CardMedia
              className={classes.media}
              image={mycar.picture}
              title="car"
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {mycar.brand} {mycar.model} 
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {mycar.details}
              </Typography>
              </CardContent>
              </CardActionArea>       
              </Card> 
              </Grid>
              )
              }
              </Grid>
              </div>               
              </div>
              </div>
    )
}