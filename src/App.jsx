import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import SecurityCards from "./Components/SecurityCards";
import BankOptions from "./Components/BankOptions";
import ConnectionOptions from "./Components/ConnectionOptions";
import ConnectCard from "./Components/ConnectCard";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SecurityCards />
      <BankOptions />
      <ConnectionOptions />
      <ConnectCard/>
    </>
  );
}

export default App;