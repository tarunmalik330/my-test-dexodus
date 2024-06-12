import "./App.css";
import CopyTrading from "./components/CopyTrading";
import FocusOnTrading from "./components/FocusOnTrading";
import Ready from "./components/Ready";
import TopFeatures from "./components/TopFeatures";

function App() {
  return (
    <div>
      <FocusOnTrading />
      <TopFeatures />
      <CopyTrading />
      <Ready />
    </div>
  );
}

export default App;
