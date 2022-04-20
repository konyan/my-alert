import './App.css';
import AlertManager from './components/alert/AlertManager';
import Button from './components/button/button';

function App() {
  return (
    <div className='App'>
      <AlertManager>
        <Button />
      </AlertManager>
    </div>
  );
}

export default App;
