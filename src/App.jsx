import Products from "./components/Products/Products";
import Button from "./components/UI/Button";

function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
      <Button color="success" size="lg">
        Add
      </Button>
      <br />
      <Button color="danger" size="md">
        <strong>Delete</strong>
      </Button>
      <br />
      <Button color="primary" size="sm">
        Update
      </Button>
      <Products />
    </div>
  );
}

export default App;
