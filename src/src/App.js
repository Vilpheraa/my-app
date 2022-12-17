import './App.css';
// import ladyimg from '../ladysmiling.jpg'
import TeachPage from './Udemy Pages/teachudemypage';
import PlanNav from './Udemy Pages/plan';
import {Routes, Route} from 'react-router-dom'
import RecVid from './Udemy Pages/rec';
import LaunchCourse from './Udemy Pages/launch';
import NavComp from './Nav Items/nav';

function App() {
  return (
    <>
    <div className="App">
      <TeachPage />
    </div>
    <NavComp />
    <Routes>
      <Route path='/plan' element={<PlanNav />}/>
      <Route path='/rec' element={<RecVid />}/>
      <Route path='/launch' element={<LaunchCourse />}/>
    </Routes>
    </>
  );
}

export default App;
