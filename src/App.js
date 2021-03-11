import Myfirstcomponent from './components/myfirstcomponent'
import Mysecondcomponent from './components/mysecondcomponent'
import Mythirdcomponent from './components/mythirdcomponent'
import Myfourthcomponent from './components/myfourthcomponent'
import Myfifthcomponent from './components/myfifthcomponent'
import Mysixthcomponent from './components/mysixthcomponent'
import Myseventhcomponent from './components/myseventhcomponent'
import Myeigthcomponent from './components/myeigthcomponent'
import Myninthcomponent from './components/myninthcomponent'
import Mytenthcomponent from  './components/mytenthcomponent'
import Mastercomponent from './components/mastercomponent'
import ParentComponent from './components/parentcomponent'
import DashboardComponent from './propdrilling/DashboardComponent'
import Counter from './state/counter'
function App() {
  return (
    <div className="App">
      
          {/* <Myfirstcomponent/>
          <Mysecondcomponent/>
          <Mythirdcomponent/>
          <Myfourthcomponent/>
          <Myfifthcomponent/>
          <Mysixthcomponent/>
          <Myseventhcomponent/>
          <Myeigthcomponent/>
          <Myninthcomponent/>
          <Mytenthcomponent/> */}
          {/* <Mastercomponent name= "Afia" height= "45"/>
          <Mastercomponent name= "Pokuaa" height= "50"/>
          <Mastercomponent name= "Berfi" height= "30"/>
          <Mastercomponent name= "Nana" height= "34"/>
          <ParentComponent name='Afia' gender='Female' age='23' email='afipok19@yahoo.com'/> */}
          {/* <DashboardComponent name= 'John' lastname= 'Smith' email= 'johnsmith@yahoo.com' dob= '10th March 2020' mobile= '0244564839'/> */}
          <Counter/>
    </div>
  );
}

export default App;
