import React from 'react';
import Header from '../components/Header/Header';
import Footer  from '../components/Footer/Footer';

export default class App extends React.Component {
    render(){
       return(
           <div>
               <Header/>
               <Footer/>

           </div>   
        )
     }
}