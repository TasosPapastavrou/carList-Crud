import ButtonAppBar from "./navbar";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import history from "./history";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Carlist extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            carList:[],
            model:'aaaa'
        };

        this.setModel = this.setModel.bind(this);
    }

    setModel(value){
      this.setState({model:value}); 
      console.log(value)
    }

    componentDidMount() { 
    axios.get(`http://localhost:8083/api/v1/getCars`).then(res=>{  
                this.setState({carList:res.data}); 
      });
    } 

    render(){
        const MyCars = this.state.carList;  
        console.log(this.state.carList)
        const modelName = this.state.model;
         
        return(
          <> 
            <ShowCarlist MyCars={MyCars} ModelName={modelName} SetModel={this.setModel}/> 
          </>
        )
    }
}





const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    placeBody:{
        marginTop: '5%',
        marginRight: '20%',
        marginLeft: '20%',
    }
  }); 
  
function ShowCarlist(MyCars){ 
  const {SetModel,ModelName} = MyCars;
    const mCars = MyCars.MyCars;
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
     
    const EditCarName = (id) =>{
      history.push(`/edit/car/${id}`)
      window.location.reload();  
    }
    const AddCarName = () =>{
      history.push(`/AddNewCar`)
      window.location.reload();  
    }
    const resp = (mdata)=>{
      console.log(mdata)
      window.location.reload(); 
    }

    
    return(
        <div>
            <ButtonAppBar/>   
            <div className={classes.placeBody}>
            {/* <Button style={{color:"green",marginBottom: '3%'}}><Link style={{ textDecoration: 'none', color: 'black' }} to={'/AddNewCar'}>Add new Car</Link></Button> */}
            <Button style={{color:"green",marginBottom: '3%'}} onClick={AddCarName}>Add new Car</Button>
                <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>number</TableCell>
                        <TableCell>name brand</TableCell> 
                        <TableCell>name model</TableCell> 
                        <TableCell>Edit</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {

                    mCars.map(Car => 
                        <TableRow key={Car.id}>
                        <TableCell component="th" scope="row">{Car.id}</TableCell>
                        <TableCell>{Car.brand}</TableCell> 
                        <TableCell>{Car.model}</TableCell> 
                        
                        <TableCell>
                        <Button color="primary" onClick={()=>EditCarName(Car.id)}>Edit</Button>
                        </TableCell>

                        <TableCell>
                        <Button 
                        color="secondary" 
                        onClick={()=>axios.get(`http://localhost:8083/api/v1/deleteCar/${Car.id}`)
                        .then(response => resp(response.data) )}>
                        Delete
                        </Button>
                        </TableCell> 
                        </TableRow>
                    )
                    }
                </TableBody>
                </Table>
                </TableContainer> 

            </div>
    </div>
    );
}  