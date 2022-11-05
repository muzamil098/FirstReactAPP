// import logo from './logo.svg';
// /import './App.css';
import ExpenseItem from "./Components/ExpenseItem";
function App() {
  const array = [
    {
      title: "Muzamil",
      Amount: 256,
      Monthlyexpense: 2224,
      date: new Date(2021, 2, 28),
    },
    {
      title: "Sarmad",
      Amount: 334,
      Monthlyexpense: 456,
      date: new Date(2021, 2, 28),
    },
    {
      title: "Wasiullah",
      Amount: 456,
      Monthlyexpense: 224,
      date: new Date(2021, 2, 28),
    },
  ];
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <ExpenseItem
        title={array[0].title}
        Amount={array[0].Amount}
        Monthlyexpense={array[0].Monthlyexpense}
        date={array[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={array[1].title}
        Amount={array[1].Amount}
        Monthlyexpense={array[1].Monthlyexpense}
        date={array[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={array[2].title}
        Amount={array[2].Amount}
        Monthlyexpense={array[2].Monthlyexpense}
        date={array[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
