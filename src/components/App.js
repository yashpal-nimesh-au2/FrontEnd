import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Form from './Form';


function App(props){
return(
<React.Fragment>
  <nav class="navbar navbar-light bg-light ">
  <span class="navbar-brand mb-0 h1 ">Frontend Assignment</span>
</nav>
<br/>
<Form/>
<br/>
<div>
  <h3>Playlists</h3>
  <hr></hr>

  {props.Data.map((data)=>
<div className="m-5">
  <iframe width="100%" height="50" src={`https://www.youtube.com/embed/${data.id}`} frameborder="0" 
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
  </iframe>
  </div> 
)}
</div>



</React.Fragment>
)
}


function mapStateToProps(state) {
  console.log("mapStateToProps");
  return {Data:state.Data
           };
}



export default connect(mapStateToProps)(App);

