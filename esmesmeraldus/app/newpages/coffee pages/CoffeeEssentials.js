import React from 'react';

class MerchandisePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  handleChange = (event) => {
    this.setState({email: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  }

  render() {
    return (
      <div>
        <h1>Cislubion Coffee</h1>
        <p>Sold out</p>
        <p>Free delivery for purchases of $50 or over! Only in Calgary!</p>

        <div>
          <h2>Shop / Coffee Essentials</h2>
          <ul>
            <li>
              <h3>Grinder - Manual Personal</h3>
              <p>CAD$19.50</p>
            </li>
            <li>
              <h3>Grinder - Electric Personal</h3>
              <p>CAD$19.50</p>
            </li>
          </ul>
        </div>

        <form onSubmit={this.handleSubmit}>
          <label>
            Subscribe for more news!<br/>
            We send out news, deals and recipes! Don't miss out!<br/>
            <input type="email" value={this.state.email} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>

        <div>
          <h2>Coffee Essentials</h2>
          <p>Sold out</p>
        </div>

        <footer>
          <p>About</p>
          <p>Coffee, rich as an emerald.</p>
          <ul>
            <li>Sign Up</li>
            <li>Terms of Service</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Login</li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default MerchandisePage;