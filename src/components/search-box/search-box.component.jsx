import { Component } from 'react';
// import 'materialize-css/dist/css/materialize.min.css';
import './search-box.styles.css'

class SearchBox extends Component{
    render(){
        return(
            <input 
                className={`search-box ${this.props.className}`}          //className since js already has class
                type="search" 
                placeholder={this.props.placeholder} 
                onChange={this.props.onChangeHandler} //to avoid reinitializing unchanging function, assigned to a variable
            />
        );
    }
}

export default SearchBox;