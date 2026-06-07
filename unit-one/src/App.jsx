import "./App.css";
import Card from "./Components/Card.jsx";

const App = () => {
  return (
    <div className="App">
      <h1>My Community Board</h1>

      <div className="card-grid">
        <Card
          title="Unity Learn"
          description="Official Unity tutorials"
          image="https://..."
          link="https://learn.unity.com"
        />
        <Card
          title="Event 2"
          description="Description 2"
          image="https://..."
          link="https://example.com"
        />
        <Card
          title="Event 3"
          description="Description 3"
          image="https://..."
          link="https://example.com"
        />
        <Card
          title="Event 4"
          description="Description 4"
          image="https://..."
          link="https://example.com"
        />
      </div>
    </div>
  );
};

export default App;
