import logo from './logo.svg';
import './App.css';
import ContextProvider ,{Context} from './context' 
import { useContext } from 'react';

function App() {

  const {setInfo,setSuccess,setError} = useContext(Context)
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Click on alert button to make alert boxes appear.
          </p>
          <button dangerouslySetInnerHTML={{__html:'Display Info alert'}} onClick={() => setInfo('I\'m an Info Alert Box !')}/>
          <button dangerouslySetInnerHTML={{__html:'Display Success alert'}} onClick={() => setSuccess('I\'m a Success Alert Box !')}/>
          <button dangerouslySetInnerHTML={{__html:'Display Error alert'}} onClick={() => setError('I\'m an Error Alert Box !')}/>
        </header>
      </div>
  );
}

export default App;
