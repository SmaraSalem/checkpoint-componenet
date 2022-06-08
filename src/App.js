
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto.js';
import FullName from './Component/Profile/FullName';
import Adresse from './Component/Profile/Adresse';
function App() {
  return (
    <div className="App">
    <div className='elem'>
      <ProfilePhoto/>
      <FullName/>
      <Adresse/>
      </div>
     
    </div>
  );
}

export default App;
