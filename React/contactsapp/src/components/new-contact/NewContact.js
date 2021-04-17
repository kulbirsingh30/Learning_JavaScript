import React from 'react';
import './NewContact.scss';

class newContact extends React.Component{

    constructor(props){
        super(props);
    }


    clickHandler(event){
        event.preventDefault();
        const newContact = document.getElementById('name-input').value;
        this.props.add(newContact);

    }

    render(){
        return(
            <div>
                <form>
                    <input id="name-input" className="name-input" type="text" name="name"></input>
                    <button className="submit" type="submit" onClick={this.clickHandler.bind(this)}>Add to List</button>
                </form>

            </div>
        );
    }


}

export default newContact;