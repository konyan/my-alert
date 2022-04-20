import logo from './logo.svg';
import './App.css';
import AlertProvider from './alert/AlertProvider';

function App() {
  return (
    <div className='App'>
      <AlertProvider>
        <p>Hello World 2</p>
      </AlertProvider>
    </div>
  );
}

export default App;
