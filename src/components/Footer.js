import React from "react";
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import "../css/footer.css";

const Footer = () => {
  return (
    <>
      
      <div>
      <img  style={{width:"100%" , height:'300px' , backgroundSize:'cover'}} src="https://cdn.pixabay.com/photo/2022/09/05/14/53/onion-7434358_1280.jpg" />

   
</div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                lorem Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2022 All Rights Reserved by
                <a href="#">companyName</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
