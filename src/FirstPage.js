import React, { useState } from 'react'
import {Grid,makeStyles,Paper,TextField,Button, Input} from "@material-ui/core"
import {useHistory} from "react-router-dom" 
import { Email } from '@material-ui/icons'
const useStyles=makeStyles({
  container: {
    display:"flex",
    marginTop: "50px"
  },
  
  loginBox:{
    background: "rgba(190, 182, 182, 0.562)",
    width: "300px",
    padding: "50px",
    borderRadius: "10px",
    boxShadow: "0 32px 64px rgb(0 0 0 / 20%)",
    margin:"10px"
  },
  sideBox:{
    background: "rgba(190, 182, 182, 0.562)",
    width: "500px",
    borderRadius: "10px",
    boxShadow: "0 32px 64px rgb(0 0 0 / 20%)",
    margin:"10px",
  },
  
  btn:{
    marginTop: "20px",
    padding: "10px 25px",
    cursor: "pointer",
    fontWeight: "bold",
    backgroundColor:"white"
  },
  navigation:{
    height:"400px",
    padding:"20px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-evenly"

  },
  sideBTN:{
    padding:"10px",
    borderRadius:"10px",
    boxShadow: "0 32px 64px rgb(0 0 0 / 20%)",
    cursor:"pointer",
    backgroundColor:"white",
    width:"100px"
  }
})

function FirstPage() {
    const history = useHistory()
const classes = useStyles()
    const [checked, setChecked] = React.useState(null);
  const [showdata,setShowData] = React.useState(false)
  const [profileData,setProfileData] = useState(0);
  const [valueData,setValueuData] = useState("")
    const handleChange = (event) => {
      setChecked(event.target.value);
    };


const fetchData = () =>{
  console.log("abc",showdata)
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    fetch(`https://reqres.in/api/users/${checked}`, requestOptions)
    .then(response => response.json())
    .then(data =>{
      if(data.data!=[]){
        console.log("data",data.data)
        setValueuData(data.data)
       setShowData(true)}
            
    });
}

const showProfile = (index) =>{
  setProfileData(index)
}
console.log("valueDta",valueData)
   
    
  return (

  <section className={classes.container}>
    <div className={classes.loginBox}>
      <Grid style={{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}} >
        <img
          src="https://i.imgur.com/NABQcXH.png"
          width="200px"
          alt="user icon"
        />
        <h2>Member login</h2>
        <Input
          type="number"
          placeholder="Enter your number"
          onChange={handleChange}
        
        />
        <Button onClick={checked ? fetchData : ""} className={classes.btn} type="submit">Submit</Button>

  

      </Grid>
    </div>
    {showdata && <div className={classes.sideBox}>
        <Grid container >
          <Grid>          <Grid className={classes.navigation} item>
            {["Name","Email","Photo","Description"].map((value,index)=>{
              return (
          <Grid className={classes.sideBTN} onClick={()=>{showProfile(index)}}>{value}</Grid>
          )
            })}
       
          </Grid>
          </Grid>
          <Grid style={{paddingTop:"45px",width:"300px"}} item>
            {profileData==0 && <Grid>Name: {valueData.first_name}{" "}{valueData.last_name}
          </Grid>}
          {profileData==1 && <Grid>Email: {valueData.email}{" "}
          </Grid>}
          {profileData==2 && <Grid><img height={100} width={100} src={valueData.avatar}/>
          </Grid>}
          {profileData==3 && <Grid> {valueData.description || "No description"}
          </Grid>}
          </Grid>
        </Grid>
    </div>}
  </section>

);
  
}

export default FirstPage