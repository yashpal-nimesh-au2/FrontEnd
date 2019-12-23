import React from 'react';
import { connect } from 'react-redux';
import {Action} from '../actions/Action';

function form(props){

        return ( 
            <div class="input-group mb-3">
  <input type="text" id="inputValue" class="form-control" 
  placeholder="Paste Youtube Link" 
 aria-describedby="button-addon2"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" onClick={props.LinkSubmit} 
    type="button" id="button-addon2">Submit</button>
  </div>
</div>
         );
    }

 
function mapActionToProps(dispatch) {
    return {
        LinkSubmit: function() {
  let input=document.getElementById("inputValue").value;
//   console.log(input.slice(0,24))
  let id=input.slice(32)
//   console.log(id)
  if(input===""){
  }else{
            dispatch(Action(id));}
            document.getElementById("inputValue").value="";
  
        }
    }
  }
  
  
  export default connect(null, mapActionToProps)(form);
  