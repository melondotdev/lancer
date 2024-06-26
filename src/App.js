import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { EthosConnectProvider } from 'ethos-connect';

function App() {
  return (
    <EthosConnectProvider
      ethosConfiguration={{
        chain: "sui:mainnet",
        network: "https://fullnode.mainnet.sui.io/",
        hideEmailSignIn: true
      }}
    >
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </Router>
      </div>
    </EthosConnectProvider>
  );
}

export default App;
