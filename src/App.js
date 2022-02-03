/* eslint-disable no-unused-vars */
import './App.css';
import Navbar from './components/Navbar'
import Pins from './components/Pins'
import ThePin from './components/ThePin';
import useFetch from './useFetch';




function App() {
  const { data, loading, error } = useFetch("https://picsum.photos/v2/list")

  return (
    <div className="App">
      <Navbar />
      
      {data && <Pins pins={data} loading={loading} />}
      
      {/* <ThePin /> */}
    </div>
  );
}

export default App;
