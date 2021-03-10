import { CardList } from './components/card-list/card-list.component'
import './App.css';
import { Component } from 'react';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users').then(responseddd => responseddd.json()).then(users => this.setState({ monsters: users }))
  }
  handelChange = e => {
    this.setState({ searchField: e.target.value })
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredmonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters rolodex</h1>
        <SearchBox placeholder='search monsters'
          handelChange={this.handelChange} />
        <CardList monsters={filteredmonsters} />


      </div>
    );
  }
}



export default App;
