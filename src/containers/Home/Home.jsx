import React from 'react';
import PropTypes from 'prop-types';

import { InputGroup, InputGroupButton, Col, Fade,
  Input, Button, Row, Container } from 'reactstrap';

import { push } from 'react-router-redux';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Parallax, Background } from 'react-parallax';

import Stats from '../../components/Icons/Stats/Stats';
import Target from '../../components/Icons/Target/Target';
import PayPerClick from '../../components/Icons/PayPerClick/PayPerClick';
import Broadcast from '../../components/Icons/Broadcast/Broadcast';
import PurchasePage from '../../components/Icons/PurchasePage/PurchasePage';
import Shield from '../../components/Icons/Shield/Shield';
import Funnel from '../../components/Icons/Funnel/Funnel';
import Analytics from '../../components/Icons/Analytics/Analytics';
import Circle from '../../components/Circle/Circle';
import Cart from '../../components/Icons/Cart/Cart';
import Devices from '../../components/Icons/Devices/Devices';
import Loyalty from '../../components/Icons/Loyalty/Loyalty';
import Profile from '../../components/Icons/Profile/Profile';
import Email from '../../components/Icons/Email/Email';
import BrowserEditor from '../../components/Icons/BrowserEditor/BrowserEditor';
import Customer from '../../components/Icons/Customer/Customer';

import gaImage from '../../assets/ga.jpg';
import gaLaptop from '../../assets/ga-laptop.jpg';
import ken from '../../assets/ken.jpg';
import john from '../../assets/JYeg.jpg';
import jason from '../../assets/jaypa.jpg';
import dashboard from '../../assets/analytics.png';


class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fadeIn: false };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ fadeIn: true}), 400);
  }

  render() {
    return (
      <div>
        <section className="marketing-section d-flex flex-column cta">
          <Container>
            <Fade in={this.state.fadeIn} tag="h4">
              Convert more of your visitors
            </Fade>
            <Fade in={this.state.fadeIn} tag="h6">
              By offering product incentives seamlessly from your website
            </Fade>
            <Row>
              <InputGroup className="col-xs-12 col-md-5">
                <Input type="email" placeholder="Enter your email"/>
                <InputGroupButton><Button color="success">Get Started</Button></InputGroupButton>
              </InputGroup>
            </Row>
          </Container>

        </section>
        <section className="marketing-section d-flex flex-column info-centered">
          <Container className="d-flex flex-column align-items-center">
            <h2 className="mb-5">
              Snapwagon increases the stickiness of your website
            </h2>
            <h4 className="mb-5">
              Easily run targeted marketing campaigns on your website.
            </h4>
            <Row className="mx-0">
              <div className="col-lg-4 d-flex flex-column align-items-center p-3">
                <Stats fillColor="#000"/>
                <h5 className="text-center my-4">Higher Conversion Rates</h5>
                <p><a className="btn btn-outline-secondary" href="#" role="button">Learn More</a></p>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center p-3">
                <Target fillColor="#000"/>
                <h5 className="text-center my-4">Increase Customer Targeting</h5>
                <p><a className="btn btn-outline-secondary" href="#" role="button">Learn More</a></p>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center p-3">
                <PayPerClick fillColor="#000"/>
                <h5 className="text-center my-4">Decreased Cost Per Acquisition</h5>
                <p><a className="btn btn-outline-secondary" href="#" role="button">Learn More</a></p>
              </div>
            </Row>
          </Container>
        </section>
        <section className="marketing-section d-flex flex-column info-centered mt-5 marketing-side-by-side gradient">
          <Container className="d-flex flex-column marketing-side-by-side">
            <h1 className="text-center mt-5 text-white">Start selling on your existing website now</h1>
            <div className="mt-5 d-flex flex-column rounded bg-light align-self-center justify-content-around mktg-info-container">
              <Row className="mx-0 bd-callout bd-callout-success">
                <Col className="d-flex justify-content-end">
                  <Broadcast />
                </Col>
                <Col>
                  <h5>Showcase your best products</h5>
                </Col>
              </Row>
              <Row className="mx-0">
                <Col className="d-flex justify-content-end">
                  <h5>Allow customers to make impulse buys</h5>
                </Col>
                <Col>
                  <PurchasePage />
                </Col>
              </Row>
              <Row className="mx-0">
                <Col className="d-flex justify-content-end">
                  <Shield />
                </Col>
                <Col>
                  <h5>Browse products, signup, and checkout all within a singular experience</h5>
                </Col>
              </Row>
            </div>

          </Container>
        </section>

        <section className="marketing-section d-flex flex-column info-centered">
            <Row>
              <Col className="col-sm-12 col-md-6 p-4 d-flex flex-column justify-content-center">
                <h3>Integrate with your marketing funnel</h3>
                <h5>Collect attribution and conversion data on the performance of the offering.</h5>
                {/* <Funnel containerClassNames="align-self-center" /> */}
              </Col>
              <Col className="sm-hide col-sm-12 col-md-6 mktg-image">
                <img src={gaLaptop} className="rounded"/>
              </Col>
            </Row>
        </section>

        <section className="marketing-section d-flex flex-column info-centered">
          <Container>
           <Row>
             <Col className="mx-0">
               <img src={dashboard} className="rounded mw-100"/>
             </Col>
             <Col className="">
               <h2>Analyze</h2>
               <h4>Use the platform to analyze product performance, tweak and optimize offering.</h4>
             </Col>
           </Row>
          </Container>
        </section>
        <section className="marketing-section d-flex flex-column about-platform info-centered">
          <Container className="d-flex flex-column align-items-center">
            <h2>The Platform</h2>
            <Row>

              <div className="d-flex flex-column align-items-center p-3">
                <Circle fillColor="">
                  <BrowserEditor fillColor=""/>
                </Circle>
                <h5 className="text-center my-2">Coupon Editor</h5>
              </div>
              <div className="d-flex flex-column align-items-center p-3">
                <Circle fillColor="">
                  <Email fillColor=""/>
                </Circle>
                <h5 className="text-center my-2">Email</h5>
              </div>
              <div className="d-flex flex-column align-items-center p-3">
                <Circle fillColor="">
                  <Analytics fillColor=""/>
                </Circle>
                <h5 className="text-center my-2">Analytics</h5>
              </div>
              <div className="d-flex flex-column align-items-center p-3">
                <Circle fillColor="">
                  <Customer fillColor=""/>
                </Circle>
                <h5 className="text-center my-2">Customer Profiles</h5>
              </div>
              <div className="d-flex flex-column align-items-center p-3">
                <Circle fillColor="">
                  <Shield fillColor=""/>
                </Circle>
                <h5 className="text-center my-2">Payment Management</h5>
              </div>
              <div className="d-flex flex-column align-items-center p-3">
                <Circle fillColor="">
                  <Devices fillColor=""/>
                </Circle>
                <h5 className="text-center my-2">Mobile Optimized</h5>
                {/* <p>With mobile traffic approaching 70%, snapwagon is built
                mobile first to look great on mobile.</p> */}
              </div>
            </Row>
          </Container>
        </section>
        <section className="marketing-section d-flex flex-column about-us info-centered gradient text-white">
          <Container className="d-flex flex-column align-items-center">
            <h2 className="mb-5">
              Our Team
            </h2>
            <Row>
              <div className="col-lg-4 d-flex flex-column align-items-center p-3 ">
                <img className="rounded-circle" src={john} alt="Generic placeholder image" width="140" height="140"/>
                <h5 className="text-center my-4">John</h5>
                <p>Product/Tech</p>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center p-3">
                <img className="rounded-circle" src={jason} alt="Generic placeholder image" width="140" height="140"/>
                <h5 className="text-center my-4">Jason</h5>
                <p>Tech</p>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center p-3">
                <img className="rounded-circle" src={ken} alt="Generic placeholder image" width="140" height="140"/>
                <h5 className="text-center my-4">Ken</h5>
                <p>Business</p>
              </div>
            </Row>
          </Container>
        </section>
        <section className="marketing-section d-flex flex-column about-us info-centered">
          <Container className="d-flex flex-column align-items-center">
            <h2 className="mb-5">
              Questions?
            </h2>
            <Button color="success" size="lg">Sign Up</Button>
          </Container>
        </section>
      </div>
    );
  }

}

HomeContainer.propTypes = {
  componentName: PropTypes.string
};

HomeContainer.defaultProps = {
  componentName: 'Home'
};

const Home = withRouter(
  connect((state) => ({}))(HomeContainer)
);

export default Home;
