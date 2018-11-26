import React, {Component} from 'react';

class Story extends Component {
  render() {
    const {title, subtitle, heading, story} = this.props;
    return (
      <section id="about" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center marb-35">
              <h1 className="header-h">{title}</h1>
              <p className="header-p">{subtitle}</p>
            </div>
            <div className="col-md-12">
              <div className="col-md-8 col-sm-8">
                <div className="about-info">
                  <h2 className="heading">{heading}</h2>
                  <p>
                    {story}
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <img src="https://source.unsplash.com/weekly?water" alt="" className="img-responsive"/>
              </div>
            </div>
          </div>
        </div>
      </section>
     );
  }
}

export default Story;
