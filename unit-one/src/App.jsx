import "./App.css";
import Card from "./Components/Card.jsx";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>Staten Island Coffee Guide</h1>
        <h2>
          Discover local cafés, specialty coffee spots, and community favorites
          across Staten Island.
        </h2>
      </div>

      <div className="card-grid">
        <Card
          title="Bloom Cafe"
          description="Specialty coffee, pastries, and a cozy atmosphere."
          image="bloomCafe.jpg"
          link="https://www.bloomcafesi.com/"
        />

        <Card
          title="Beans & Leaves"
          description="Popular local café serving coffee, tea, and desserts."
          image="beansLeaves.jpg"
          link="https://www.beansandleavescafe.com/"
        />

        <Card
          title="Moka & Co"
          description="Yemeni coffee and unique specialty drinks."
          image="mokaCo.jpg"
          link="https://mokanco.com/"
        />

        <Card
          title="Bunn Cafe"
          description="Fresh coffee and traditional Middle Eastern flavors."
          image="bunnCafe.jpg"
          link="https://bunncafe.com/"
        />

        <Card
          title="Mavi Cafe"
          description="A local favorite for breakfast and coffee."
          image="maviCafe.jpg"
          link="https://mavicafesi.com/"
        />

        <Card
          title="Americano Cafe"
          description="Great coffee and a welcoming atmosphere."
          image="americanoCafe.jpg"
          link="https://americanocafesi.com/"
        />

        <Card
          title="The Sweet Life"
          description="Coffee paired with delicious baked goods."
          image="sweetLife.jpg"
          link="https://www.sweetlifebakeshopsi.com/"
        />

        <Card
          title="Beanie Cafe"
          description="Known for creative lattes and matcha drinks."
          image="beanieCafe.jpg"
          link="https://beaniecafeny.com/"
        />

        <Card
          title="Island Coffee Shop"
          description="Neighborhood coffee shop with friendly service."
          image="islandCoffe.jpg"
          link="https://islandcoffeeshop.site/"
        />

        <Card
          title="Casita Cafe"
          description="Coffee, brunch, and specialty desserts."
          image="casitaCafe.jpg"
          link="https://www.casitaofbk.com/"
        />
      </div>
    </div>
  );
};

export default App;
