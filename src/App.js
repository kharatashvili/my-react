import Shop from "./components/shop";
import TicTackToe from "./components/tickTackToe";

function Home() {
  return <h1>Hello World</h1>;
}

function App() {
  return (
    <>
      <TicTackToe></TicTackToe>;<Shop></Shop>
      <Home />
    </>
  );
}
export default App;
