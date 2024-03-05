import React from 'react';

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({email: event.target.value});
  }

  render() {
    return (
      <div>
        <div className="home l shop subscribe">
          <input
            type="email"
            placeholder="Enter Email Address"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <button>Subscribe</button>
        </div>
        <div className="learn recipes">
          <div className="coffee-cookies-recipe">
            <h2>Coffee Cookies Recipe: <br/> Deliciously Addictive</h2>
            <p>Free delivery for purchases of $50 or over! Only in Calgary!</p>
          </div>
          <div className="esmeraldus-cappuccino-recipe">
            <h2>Esmeraldus Cappuccino Recipe:</h2>
          </div>
          <div className="about">
            <h2>About</h2>
            <p>Coffee, rich as an emerald.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipes;