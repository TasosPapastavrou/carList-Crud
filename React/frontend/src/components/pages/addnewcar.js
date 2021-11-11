import React from 'react';
import ButtonAppBar from "./navbar";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import history from './history';

import { makeStyles } from '@material-ui/core/styles';
export default class AddNewCar extends React.Component{

    constructor(){
        super()

        this.state={
            newmodelName:'',
            newBrandName:'',
            picture:'',
            details:''
        }
        this.setModel = this.setModel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setBrand = this.setBrand.bind(this);
        this.setPicture = this.setPicture.bind(this);
        this.setDetails = this.setDetails.bind(this);
    }

    setModel(value){
      this.setState({newmodelName:value.target.value}); 
      console.log(value.target.value)
    } 
    setBrand(value){
        this.setState({newBrandName:value.target.value}); 
        console.log(value.target.value)
    }
    setPicture(value){
        this.setState({picture:value.target.value}); 
        console.log(value.target.value)
    }

    setDetails(value){
        this.setState({details:value.target.value}); 
        console.log(value.target.value)
    }

    handleSubmit(event){
        event.preventDefault();
        const newCar = {
                        'brand':this.state.newBrandName,
                        'model':this.state.newmodelName, 
                        'picture':this.state.picture, 
                        'details':this.state.details 
        }; 
        console.log(newCar)
        axios.post(`http://localhost:8083/api/v1/newCar`,newCar)
        .then(response => console.log(response.data));
        history.push(`/carlist`);
        window.location.reload(); 

    }

    render(){  
        return (
            <>
            <ButtonAppBar/>
            <EditOrUpdate setData={this.setModel} onSub={this.handleSubmit} setBrand={this.setBrand} setPicture={this.setPicture} setDetails={this.setDetails}/>
            </>
        );
    }
}
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    placeBody:{
        marginTop: '5%',
        marginRight: '20%',
        marginLeft: '45%',
    }
  });


function EditOrUpdate(tools){
    console.log(tools)
    const classes = useStyles();
    const {onSub,setData,setBrand,setPicture,setDetails} = tools;
    return( 
        <div className={classes.placeBody}>
    <form  noValidate autoComplete="off" onSubmit={onSub}>
            <div>
            <div>
            <TextField required id="standard-required" onChange={setBrand} label="Brand Name" /></div>
            <div>
            <TextField required id="standard-required" onChange={setData} label="Model Name" /></div>
            <div>
            <TextField required id="standard-required" onChange={setPicture} label="Picture" /></div>
            <div>
            <TextField required id="standard-required" onChange={setDetails} label="Details" /></div>
             <Button style={{color:"green"}}   type="submit" value="Submit">save</Button> 
            </div>
            </form>
        </div>
    )


}