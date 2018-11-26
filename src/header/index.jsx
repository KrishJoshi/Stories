import React, {Component} from 'react';
class Header extends Component {
  render() {
    return (
      <section id="banner">
        <div className="bg-color">
          <div className="container">
            <div className="row">
              <div className="inner text-center">
                <h1 className="logo-name">Stories</h1>
                <h2>Share your life</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
