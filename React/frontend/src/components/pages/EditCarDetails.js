import React from 'react';
import ButtonAppBar from "./navbar";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import history from './history'; 
import { makeStyles } from '@material-ui/core/styles';
export default class EditCarDetails extends React.Component{

    constructor(){
            super()
            this.state={
            oldmodelName:[],
            newmodelName:'',
            newBrandName:'',
            picture:'',
            details:''
        }
        this.setModel = this.setModel.bind(this);
        this.setBrand = this.setBrand.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    componentDidMount() { 
        const id = this.props.match.params.id;
        console.log(id)
    axios.get(`http://localhost:8083/api/v1/Car/${id}`).then(res=>{  
                this.setState({oldmodelName:res.data}); 
      });
    } 

    handleSubmit(event){
        event.preventDefault();
        const Update = {    
            'brand':this.state.newBrandName,
            'model':this.state.newmodelName, 
            'picture':this.state.picture, 
            'details':this.state.details
           };
                
        const id = this.props.match.params.id;
        axios.put(`http://localhost:8083/api/v1/update/${id}`,Update)
        .then(response => console.log(response.data));
        
        history.push(`/carlist`)
        window.location.reload();
    }

    render(){ 
        const modelname=this.state.oldmodelName.model;
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
