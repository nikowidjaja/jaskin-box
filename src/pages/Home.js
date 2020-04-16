import React, { Component } from "react";
import Navbars from "../partial/Navbar";
import Footer from "../partial/Footer";

class Home extends Component {
  render(){
  return (
    <React.Fragment>
      <div className="home">
        <Navbars />
        <div className="home__section">
          <div className="home__section--left">
            <h2>
              On time delivery, <br />
              no more waiting
            </h2>
            <p className="text-default">
            Perusahaan kami berdiri sejak tahun 1991 yang bergerak dibidang
            pembuatan corrugated carton box dan sheet.
          </p>
          </div>

          <div className="home__section--right">
            <img
              src={require("../assets/images/Illustration/I-Home.png")}
              alt="/"
            />
          </div>
        
        </div>

        {/* END OF HOME SECTION*/}

        <div className="home__service">
          <div className="home__service--top">
            <div className="home__service--top__title title-default">
              Service
            </div>
            <div className="home__service--top__text text-default">
              Perjalanan panjang telah membuat kami berkeinginan kuat untuk
              menjadikan pelayanan kami bukan sekedar penyedia jasa dalam hal
              pembuatan Corrugated Box.
            </div>
          </div>

          <div className="home__service--bottom">
            <div className="home__service--bottom__items">
              <img
                src={require("../assets/images/Paper/Paper (1).svg")}
                alt="/"
              />
              <p>
                Single Wall
                <br />B Flute
              </p>
            </div>
            <div className="home__service--bottom__items">
              <img
                src={require("../assets/images/Paper/Paper (1).svg")}
                alt="/"
              />
              <p>
                Single Wall
                <br />C Flute
              </p>
            </div>

            <div className="home__service--bottom__items">
              <img
                src={require("../assets/images/Paper/Paper (1).svg")}
                alt="/"
              />
              <p>
                Double Wall
                <br />
                CB Flute
              </p>
            </div>
          </div>

          {/* <div className="home__service__button button-default" onClick={()=>{
            window.location.href = './About';
          }}>
            See Service
          </div> */}

          <div className="home__partnership">
            <div className="home__partnership--left">
              <p className="title-default">Partnership</p>
              <p className="home__partnership--left__text text-default">
                Kami menyediakan pelayanan yang terbaik seperti motto perusahaan
                kami "Kualitas nomer satu". Oleh karena itu kami telah dipercaya
                oleh berbagai perusahaan ternama di Indonesia.
              </p>
              <div className="button-default">About Us</div>
            </div>
            <div className="home__partnership--right">
              <img
                src={require("../assets/images/Illustration/I-Partnership.png")}
                alt="/"
              />
            </div>
          </div>
        </div>

        <div className="home__contact">
          <div className="home__contact--right">
            {" "}
            <p className="title-default">Don't hesitate to contact us.</p>
            <div className="button-default">Contact Us</div>
          </div>
          <div className="home__contact--left">
          <img
            src={require("../assets/images/Illustration/I-Chat.png")}
            alt="/"
          />
          </div>
        
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
        }
}

export default Home;
