import React, { Component } from "react";
import Navbars from "../partial/Navbar";
import Footer from "../partial/Footer";

class About extends Component {
  componentDidMount(){
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "#da8d7e";
    document.getElementsByClassName("footer")[0].style.backgroundColor="#da8d7e";
  }
  render() {
    const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
    let images = numbers.map(number => {
      return (
        <div className="logo__items">
          <img
            src={require(`../assets/images/Partner Logo/Logo (${number}).svg`)}
            alt="/"
          />
        </div>
      );
    });
    return (
      <React.Fragment>
        <Navbars />
        <div className="about">
          <div className="about__top-image">
            <img
              src={require("../assets/images/Illustration/I-About.png")}
              alt="/"
            />
          </div>
          <div className="about__aboutus">
            <div className="about__aboutus--left title-default">About Us</div>
            <div className="about__aboutus--right text-default">
              Perusahaan kami berdiri sejak tahun 1991 yang bergerak dibidang
              pembuatan corrugated carton box dan sheet. Perusahaan kami
              berkantor pusat di kota Semarang Jawa Tengah yang mencakup
              penjualan dan pengiriman ke seluruh kota-kota di Pulau Jawa.
            </div>
          </div>
        </div>

        <div className="partnership">
          <div className="partnership--left">
            <p className="title-default">Partnership</p>
            <p className="partnership--left__text text-default">
              Perjalanan panjang telah membuat kami berkeinginan kuat untuk
              menjadikan pelayanan kami bukan sekedar penyedia jasa dalam hal
              pembuatan Corrugated Box saja tetapi lebih kepada menghasilkan
              produksi dan pelayanan yang terbaik seperti motto perusahaan kami
              "Kualitas nomer satu". Oleh karena itu kami telah dipercaya oleh
              berbagai perusahaan ternama di Indonesia.
            </p>
          </div>
          <div className="partnership--right">
            <img
              src={require("../assets/images/Illustration/I-Partnership.png")}
              alt="/"
            />
          </div>
        </div>

        <div className="logo">
          <div className="logo__items">
            <img
              src={require("../assets/images/Partner Logo/Logo.svg")}
              alt="/"
            />
          </div>

          {images}
        </div>

        <div className="visi">
          <div className="visi--left">
            <div className="visi--left__title title-default">Visi dan Misi</div>
            <div className="visi--left__image">
              <img
                src={require("../assets/images/Illustration/I-Visi.png")}
                alt="/"
              />
            </div>
          </div>
          <div className="visi--right text-default">
            Menjadi perusahaan terbaik dalam bisnis Corrugated Carton Box dan
            Sheet di seluruh Indonesia yang mengedepankan Kualitas, Kuantitas,
            dan Prioritas. dalam segala aspek proses produksi berkesinambuangan
            yang ramah lingkungan serta berstandard nasional maupun
            internasional (ISO).<br/><br/> Dengan meningkatkan kinerja secara terus
            menerus kami ingin mewujudkan Moto perusahaan kami "Kualitas nomer
            satu". Prioritas kami adalah memenuhi permintaan pelanggan dengan
            kualitas terbaik dan pengiriman tepat waktu untuk meningkatkan
            kepuasan dan kepercayaan pelanggan.
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
