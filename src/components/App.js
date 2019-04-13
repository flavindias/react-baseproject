import React from 'react';
import Header from '../components/Header/Header';

export default class App extends React.Component {
    render(){
       return(
           <div>
               <Header/>
               <h1> the list  </h1>
           </div>   
        )
     }
}