import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
  const data = [
    {name: 'Will', salary: 2000, increase: true, id: 1},
    {name: 'Jane', salary: 1000, increase: true, id: 2},
    {name: 'Nik', salary: 4000, increase: false, id: 3},
    {name: 'Alex', salary: 1200, increase: true, id: 4},
  ];

  return (
    <div className="app">
      <AppInfo />
      
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;