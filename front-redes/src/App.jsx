import "./App.css";
import { Header } from "./common/Header/Header";
import { Body } from "./pages/Body/Body";

function App() {
  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <Header />
      <Body />
    </div>
  );
}
export default App;
