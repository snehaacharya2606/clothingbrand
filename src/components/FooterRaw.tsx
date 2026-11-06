import BackToTop from "./BackToTop"

export default function FooterRaw() {
  return (
<>			<div className="footer-container footer-color color">
    <div className="block-footer-top block-footer-top-index">
      <div className="container">
        <div className="main">
          <div className="footer">
            <div className="collapsible mobile-collapsible">
              <div className="block-newletter">
                <div className="block block-subscribe">
                  <div className="block-title"> <strong><span>Newsletter</span></strong></div>
                  <form action="#" method="post" id="newsletter-validate-detail">
                    <div className="block-content">
                      <div className="form-subscribe-header">
                        <p>Do You Want<strong>Discover Us?</strong><span>Just Subscribe Now!</span></p>
                      </div>
                      <div className="input-box">
                        <input type="text" name="email" id="newsletter" title="Sign up for our newsletter" className="input-text required-entry validate-email" placeholder="Your email adress ..." />
                      </div>
                      <div className="actions">
                        <button type="submit" title="Subscribe" className="button">
                          <span><i className="fa fa-play" /></span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>	
    <div className="block-footer-bottom">
      <div className="container">
        <div className="main">
          <div className="footer">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="collapsible mobile-collapsible">
                  <h3 className="block-title heading">about</h3>
                  <div className="title-divider"><span>&nbsp;</span></div>
                  <div className="block1 block-content-statick">
                    <ul className="list-info">
                      <li className="feature-icon first">
                        <span className="icon-pointer icons">
                          <span className="hidden">hidden</span>
                        </span>
                        <p className="no-margin">Any Street, 126BM RosiTower Newyork, USA</p>
                      </li>
                      <li className="feature-icon">
                        <span className="icon-envelope-open icons">
                          <span className="hidden">hidden</span>
                        </span>
                        <p><a href="mailto:suport@nouthemes.com">suport@nouthemes.com</a></p>
                      </li>
                      <li className="feature-icon">
                        <span className="icon-call-in icons">
                          <span className="hidden">hidden</span>
                        </span>
                        <p><span>Phone: </span>+84 912. 345. 678</p>
                      </li>
                    </ul>
                    <ul className="list-inline">
                      <li><a className="social-link facebook" href="#"><i className="icon-social-facebook"><span className="hidden">facebook</span></i></a></li>
                      <li><a className="social-link twitter" href="#"><i className="icon-social-twitter"><span className="hidden">twitter</span></i></a></li>
                      <li><a className="social-link youtube" href="#"><i className="icon-social-youtube"><span className="hidden">youtube</span></i></a></li>
                      <li><a className="social-link github" href="#"><i className="icon-camera"><span className="hidden">github</span></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="collapsible mobile-collapsible">
                  <h3 className="block-title heading">Userful Links</h3>
                  <div className="title-divider"><span>&nbsp;</span></div>
                  <div className="block-content block-content-statick">
                    <ul className="bullet">
                      <li><a href="#">My Account</a></li>
                      <li><a href="#">Internet-Based Ads</a></li>
                      <li><a href="#">Orders and Returns</a></li>
                      <li><a href="#">Terms of Use</a></li>
                      <li><a href="#">Shipping Information</a></li>
                      <li><a href="#">Gift Voucher</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="collapsible mobile-collapsible">
                  <h3 className="block-title heading">Customer Care</h3>
                  <div className="title-divider"><span>&nbsp;</span></div>
                  <div className="block-content block-content-statick">
                    <ul className="bullet">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Terms &amp; Condition</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Sale &amp; Special Offers</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Return Policy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <h3 className="block-title heading">Featured News</h3>
                <div className="title-divider"><span>&nbsp;</span></div>
                <div className="collapsible mobile-collapsible">
                  <div className="block">
                    <div className="block-content">
                      <ul className="featured-list list-info">
                        <li>
                          <a href="#" className="thumb"><img src="http://placehold.it/60x60" alt="" /></a>
                          <a href="#" className="title">Mauris bandit aliqut elit</a>
                          <div className="date">11 hours ago</div>
                        </li>
                        <li>
                          <a href="#" className="thumb"><img src="http://placehold.it/60x60" alt="" /></a>
                          <a href="#" className="title">Reget felis volutpat</a>
                          <div className="date">11 hours ago</div>
                        </li>
                        <li>
                          <a href="#" className="thumb"><img src="http://placehold.it/60x60" alt="" /></a>
                          <a href="#" className="title">Praesent sapien massa  convallis</a>
                          <div className="date">11 hours ago</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>	
    <div className="block-footer-copyright">
      <div className="container">
        <div className="footer">
          <div className="main">
            <div className="row">
              <address>© 2015 Designed by <a className="active" href="#">Math Tran</a> - All rights reserved.</address>
              <div className="paypal"><img className="img-responsive" alt="" src="/assets/images/paypal.png" /></div>
            </div>
          </div>
        </div>
      </div>
    </div> 	
    <BackToTop />
  </div>	
</>
  )
}
