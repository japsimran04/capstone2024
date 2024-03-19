import React from 'react';

// Header component
const Header = () => {
  return (
    <header>
      <h1>Esmeraldus</h1>
      <nav>
        <ul>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#learn">Learn</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Coffee component
const Coffee = ({ coffee }) => {
  return (
    <div className="coffee">
      <h2>{coffee.name}</h2>
      <p>{coffee.roast}</p>
      <p>{coffee.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

// Shop component
const Shop = () => {
  const coffees = [
    { id: 1, name: "Classic", roast: "Citric and unrefined cane sugar", price: "$17.50", type: "specialty" },
    { id: 2, name: "Blend", roast: "Dark Roast", price: "$18.50", type: "blend" },
    { id: 3, name: "Supremo", roast: "Medium Roast", price: "$17.50", type: "specialty" },
    { id: 4, name: "Caturra", roast: "Specialty Coffee", price: "$18.50", type: "specialty" }
  ];

  return (
    <div id="shop">
      <h1>Coffee</h1>
      <div className="coffee-list">
        {coffees.map(coffee => (
          <Coffee key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}

// Home component
const Home = () => {
  return (
    <div id="home">
      <h1>Welcome to Esmeraldus</h1>
      <p>Your local coffee roaster and cafe.</p>
    </div>
  );
}

// Learn component
const Learn = () => {
  return (
    <div id="learn">
      <h1>Learn</h1>
      <p>Discover the world of coffee with us.</p>
      <h2>Colombian Coffee</h2>
      <p>Colombian coffee is known for its mild flavor and bright acidity.</p>
    </div>
  );
}

// About component
const About = () => {
  return (
    <div id="about">
      <h1>About</h1>
      <p>Esmeraldus is a small batch coffee roaster and cafe located in Calgary, Canada.</p>
      <p>We are passionate about sourcing and roasting the highest quality coffee beans from around the world.</p>
    </div>
  );
}

// Footer component
const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 Haldus Esmer. All rights reserved.</p>
      <p>Free delivery for purchases of $50 or over! Only in Calgary!</p>
      <form>
        <label htmlFor="email">Subscribe for more news:</label><br />
        <input type="email" id="email" name="email" placeholder="Enter your email address" />
        <button type="submit">Subscribe</button>
      </form>
    </footer>
  );
}

// App component
const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <Shop />
      <Learn />
      <About />
      <Footer />
    </div>
  );
}

export default App;