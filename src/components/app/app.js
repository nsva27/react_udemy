import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import WhoAmI from '../practice';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Will', salary: 2000, increase: true, id: 1 },
        { name: 'Jane', salary: 1000, increase: false, id: 2 },
        { name: 'Nik', salary: 4000, increase: false, id: 3 },
        { name: 'Alex', salary: 1200, increase: true, id: 4 },
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);

      return {
        data: data.filter(item => item.id !== id)
      }
    });
  }

  render() {
    return (
      <div className="app">
        {/* <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem} />
        <EmployeesAddForm /> */}
        <WhoAmI name='Valera' surname='Nesterovsky' email='nsva2728' />
      </div>
    );
  }
}

export default App;