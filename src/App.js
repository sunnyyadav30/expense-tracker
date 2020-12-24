import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <Router basename={'/expense-tracker'}>
      <Switch>
        <Route path="/">
          <GlobalProvider>
            <div className="App">
              <div className="App-item">
                <Header />
                <div className="container">
                  <Balance />
                  <IncomeExpenses />
                  <TransactionList />
                  <AddTransaction />
                </div>
              </div>
            </div>
          </GlobalProvider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
