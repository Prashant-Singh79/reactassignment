
import './App.css';
import {makeStyles,Grid} from "@material-ui/core"
// import FirstPage from './FirstPage';
import FirstPage from './FirstPage';
import DetailScreen from './DetailScreen';
import {Switch,Route } from "react-router-dom"

const useStyles=makeStyles({
  box:{
    height:"100vh",
    border:"1px solid black",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"

  }
})
function App() {
const classes = useStyles()
  return (
 <Grid className={classes.box}>
 
<Switch> 
  <Route path="/"  component={FirstPage}/>
  <Route path="/detail" component={DetailScreen} />
</Switch>

</Grid>


  );
}

export default App;
