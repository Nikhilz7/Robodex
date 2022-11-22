import { Component } from 'react';  //classcomponent

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';


//class component
class App extends Component {
  constructor(){
    super();

    this.state = {                //json object
      monsters: [],
      searchField: ''
    }
  }


  componentDidMount(){                //promise
    fetch('https://jsonplaceholder.typicode.com/users') //fetches the names from the url
      .then(response => response.json())            //if promise resolved convert the response into json format
      .then((users) => this.setState(() => {
        return {monsters: users}
       }   //assign the json formatted 'users' to state variable 'monsters'
      ))
  }

  onSearchChange = (event) => {    

    const searchField = event.target.value.toLocaleLowerCase();   //lowercased for includes()
    
    this.setState(() =>{
      return { searchField }; //shorthand in ES6 when you pass variable to object key = variable name and value = value of variable
    });

  };

  render() { 
    //readability this
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {  
      return monster.name.toLocaleLowerCase().includes(searchField); //since includes() is case sensitive we use toLocaleLowerCase
    });
    return(                           //jsx
    <div className="App">
      <h1 className='app-title'>RoboDEX</h1>
      {/* <input 
        className="search-box"          //className since js already has class
        type="search" 
        placeholder="search monsters" 
        onChange={onSearchChange} //to avoid reinitializing unchanging function, assigned to a variable
      /> */}
      {
        // filteredMonsters.map((monster) => {
        //   return (
        //   <div key={monster.id}>
        //     <h1>{monster.name}</h1>
        //   </div>
        //   );
        // })
      }
      <SearchBox 
        onChangeHandler={onSearchChange} 
        placeholder='search monsters' 
        className='monsters-search-box' 
      />
      <CardList monsters={filteredMonsters}/>
    </div>
    );
  }
}

export default App;
