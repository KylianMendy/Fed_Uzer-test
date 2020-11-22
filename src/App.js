import Header from '../src/Components/Header/Header'
import Hero from '../src/Components/Hero/Hero'
import Footer from '../src/Components/Footer/Footer'
import Dashboard from '../src/Components/Dashboard/Dashboard'
import '../src/App.scss'
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
