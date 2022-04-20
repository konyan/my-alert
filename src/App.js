import './App.css';
import AlertProvider from './components/alert/AlertProvider';
import Button from './components/button/button';

function App() {
  return (
    <div className='App'>
      <AlertProvider>
        <Button />
      </AlertProvider>
    </div>
  );
}

export default App;
