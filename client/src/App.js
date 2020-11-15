import logo from "./logo.svg";
import "./App.css";
import "./style/style.css"
import "./style/animations.css"
import "./style/switch.css"

import Monitor from './components/monitor'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      {/* <Monitor></Monitor> */}
      <body class="theme-green" >
      <Monitor></Monitor>
      </body>
    </div>
  );
}

export default App;
