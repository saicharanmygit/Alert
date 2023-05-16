import logo from './logo.svg';
import './App.css';
import Swal from 'sweetalert2';

function App() {
  const Alert=()=>{
    Swal.fire("my alert")
    
  }
  return (
    <div className="App">
      <button onClick={Alert}>Alert</button>      
    </div>
  );
}

export default App;
