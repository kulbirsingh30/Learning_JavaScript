import React from 'react';
import './App.scss';
import ContactList from './contact-list/ContactList';
import NewContact from './new-contact/NewContact';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      contacts:[]
    } 
  }
  
  addContact(){
    let contacts =[];
    this.setState((state,props)=>
    {
      contacts.push(...state.contacts,newContact);
      return {contacts};


    });
  }
  render(){
  return (
  <div >
    <nav className="brand-bar">
      <h1 className="title"> Contact App</h1>
    </nav>
    <div className="fluid-container">
      <ContactList></ContactList>
      <NewContact>add={this.addContact.bind(this)}</NewContact>
    </div>
    
  </div>);
  }
}

export default App;
