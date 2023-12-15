import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import RestaurantList from "./component/RestaurantList";
import "./style.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <RestaurantList />
    </div>
  );
}

export default App;
