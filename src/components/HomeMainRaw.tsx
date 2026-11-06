import HeroSlider from "./HeroSlider"

export default function HomeMainRaw() {
  return (
<>			<div className="main-container col1-layout content-color color">
    <HeroSlider />
    <div className="container">
      <div className="main">
        <div className="row">
          <div className="col-main col-lg-12">
            <div className="block block-subscribe popup" style={{display: 'none'}}>
              <div id="popup-newsletter"> 
                <a href="/assets/images/popup-newletter.jpg" />
                <form action="#" method="post" id="popup-newsletter-validate-detail">
                  <div className="block-content">
                    <img src="/assets/images/logo-newletter.png" alt="" />
                    <div className="form-subscribe-header block-title">
                      <label htmlFor="newsletter">Subscribe</label>
                    </div>
                    <p>For all the latest news, products, collection...</p>
                    <p>Subscribe now to get 20% off</p>
                    <div className="newsletter-new clearfix">
                      <div className="input-box"> 
                        <input type="text" name="email" id="pnewsletter" title="Sign up for our newsletter" className="input-text required-entry validate-email" placeholder="Your email adress ..." />
                      </div>
                      <div className="actions">
                        <button type="submit" title="Subscribe" className="button">
                          <span><i className="fa fa-play" /></span>
                        </button>
                      </div>
                    </div>
                    <div className="subscribe-bottom"> <input type="checkbox" />Don’t show this popup again</div>
                  </div>
                </form>
              </div>
            </div>
            <div className="std">
              <div className="row">
                <div className="pa-lines">
                  <div className="banner-top banner1">
                    <div className="banner-inner size1of5">
                      <div className="banner1-1">
                        <div className="banner-inner-mall size1of2">
                          <div className="banner-inner-content">
                            <a href="#"> 
                              <img className="img-responsive-normal" alt="Banner" src="http://placehold.it/270x270" /> 
                            </a>
                          </div>
                        </div>
                        <div className="banner-inner-big size1of3 no-margin">
                          <div className="banner-inner-content">
                            <a href="#"> 
                              <img className="img-responsive-normal" alt="Banner" src="http://placehold.it/410x270" /> 
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="banner1-2">
                        <div className="banner-inner-mall size1of3">
                          <div className="banner-inner-content">
                            <a href="#"> <img className="img-responsive-normal" alt="Banner" src="http://placehold.it/410x270" /> </a>
                          </div>
                        </div>
                        <div className="banner-inner-big size1of2 no-margin">
                          <div className="banner-inner-content">
                            <a href="#"> <img className="img-responsive-normal" alt="Banner" src="http://placehold.it/270x270" /> </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="banner-top banner2">
                    <div className="banner-inner size1of4">
                      <div className="banner-inner-content">
                        <a href="#"> <img className="img-responsive-normal" alt="Banner" src="http://placehold.it/470x550" /> </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block-custom block-custom1">
                <div className="block-title">
                  <h2><span className="title-top">New Arrival</span></h2>
                </div>
                <div className="featured-product-tab">
                  <div className="magicproduct">
                    <div className="block-title-tabs">
                      <ul className="magictabs">
                        <li className="item active" data-type="mc-featured"><span className="title">Featured</span></li>
                        <li className="item" data-type="mc-bestseller"><span className="title">Top Rated</span></li>
                        <li className="item" data-type="mc-latest"><span className="title">Latest</span></li>
                      </ul>
                    </div>
                    <div className="content-products">
                      <div className="mage-magictabs mc-featured active">
                        <div className="flexisel-content products-grid featured zoomOut play">
                          <ul className="products-grid-rows">
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover"> 
                                    <a href="#" title="Clemence Blouse" className="product-image">
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Clemence Blouse" /> 
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions"> 
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left"><span><i className="icon-handbag icons" /><span>Add to Cart</span></span></button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span>
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name">
                                    <a href="#">Clemence Blouse</a>
                                  </h2>
                                  <div className="price-box"> 
                                    <p className="regular-price">
                                      <span className="price">$229.00</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover"> 
                                    <span className="sticker top-right">
                                      <span className="labelnew">New</span>
                                    </span>
                                    <a href="#" title="Short Sleeve Dress" className="product-image"> 
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Short Sleeve Dress" /> 
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions"> 
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span><i className="icon-handbag icons" /><span>Add to Cart</span></span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span> 
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name">
                                    <a href="#" title="Short Sleeve Dress">Short Sleeve Dress</a>
                                  </h2>
                                  <div className="price-box">
                                    <p className="old-price"> 
                                      <span className="price-label">Regular Price:</span>
                                      <span className="price"> $229.00 </span>
                                    </p>
                                    <p className="special-price">
                                      <span className="price-label">Special Price</span> 
                                      <span className="price"> $200.00 </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover"> 
                                    <a href="#" title="Rocha Sleeve Sweater" className="product-image"> 
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Rocha Sleeve Sweater" /> 
                                      <span className="product-img-back">
                                        <img className="img-responsive" src="http://placehold.it/278x355?text=hover" width={278} height={355} alt="Rocha Sleeve Sweater" />
                                      </span>
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions">
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span><i className="icon-handbag icons" /><span>Add to Cart</span></span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span> 
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left">
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name"> 
                                    <a href="#" title="Rocha Sleeve Sweater">Rocha Sleeve Sweater</a>
                                  </h2>
                                  <div className="price-box"> 
                                    <p className="regular-price">
                                      <span className="price">$229.00</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover">
                                    <span className="sticker top-right">
                                      <span className="labelhot">Hot</span>
                                    </span>
                                    <a href="#" title="Super Skinny in Tiger Camo" className="product-image"> 
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Super Skinny in Tiger Camo" /> 
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions">
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span>
                                          <i className="icon-handbag icons" /><span>Add to Cart</span>
                                        </span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span> 
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name"> 
                                    <a href="#" title="Super Skinny in Tiger Camo">Super Skinny in Tiger Camo</a>
                                  </h2>
                                  <div className="price-box"> 
                                    <p className="regular-price">
                                      <span className="price">$229.00</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover">
                                    <a href="#" title="Peace Pot Broochea" className="product-image"> 
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Peace Pot Broochea" />
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions"> 
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span><i className="icon-handbag icons" /><span>Add to Cart</span></span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span>
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name"> 
                                    <a href="#" title="Peace Pot Broochea">Peace Pot Broochea</a>
                                  </h2>
                                  <div className="price-box">
                                    <p className="regular-price">
                                      <span className="price">$229.00</span> 
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover"> 
                                    <a href="#" title="Achieve Zip Hoody" className="product-image">
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Achieve Zip Hoody" /> 
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions">
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span><i className="icon-handbag icons" /><span>Add to Cart</span></span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span>
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name"> 
                                    <a href="#" title="Achieve Zip Hoody">Achieve Zip Hoody</a>
                                  </h2>
                                  <div className="price-box"> 
                                    <p className="regular-price">
                                      <span className="price">$229.00</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover">
                                    <a href="#" title="Brown Arrows Cushion" className="product-image">
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Brown Arrows Cushion" /> 
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions"> 
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span>
                                          <i className="icon-handbag icons" />
                                          <span>Add to Cart</span>
                                        </span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span>
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left">
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name"> 
                                    <a href="#" title="Brown Arrows Cushion">Brown Arrows Cushion</a>
                                  </h2>
                                  <div className="price-box"> 
                                    <p className="regular-price"> 
                                      <span className="price">$229.00</span> 
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover"> 
                                    <span className="sticker top-right">
                                      <span className="labelsale">Sale</span>
                                    </span>
                                    <a href="#" title="Product Color" className="product-image">
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Product Color" /> 
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions"> 
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span>
                                          <i className="icon-handbag icons" />
                                          <span>Add to Cart</span>
                                        </span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span> 
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name">
                                    <a href="#" title="Product Color">Product Color</a>
                                  </h2>
                                  <div className="price-box">
                                    <p className="old-price"> 
                                      <span className="price-label">Regular Price:</span>
                                      <span className="price"> $220.00 </span>
                                    </p>
                                    <p className="special-price">
                                      <span className="price-label">Special Price</span> 
                                      <span className="price"> $180.00 </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mage-magictabs mc-latest">
                        <div className="flexisel-content products-grid featured zoomOut play">
                          <ul className="products-grid-rows">
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover"> 
                                    <span className="sticker top-left">
                                      <span className="labelnew">New</span>
                                    </span>
                                    <span className="sticker top-right">
                                      <span className="labelsale">Sale</span>
                                    </span> 
                                    <a href="#" title="Short Sleeve Dress" className="product-image"> 
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Short Sleeve Dress" /> 
                                      <span className="product-img-back">
                                        <img className="img-responsive" src="http://placehold.it/278x355?text=hover" width={278} height={355} alt="Short Sleeve Dress" />
                                      </span> 
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions"> 
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span><i className="icon-handbag icons" /><span>Add to Cart</span></span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span> 
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name">
                                    <a href="#" title="Short Sleeve Dress">Short Sleeve Dress</a>
                                  </h2>
                                  <div className="price-box">
                                    <p className="old-price"> 
                                      <span className="price-label">Regular Price:</span>
                                      <span className="price"> $229.00 </span>
                                    </p>
                                    <p className="special-price">
                                      <span className="price-label">Special Price</span> 
                                      <span className="price"> $200.00 </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover"> 
                                    <a href="#" title="Rocha Sleeve Sweater" className="product-image"> 
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Rocha Sleeve Sweater" /> 
                                      <span className="product-img-back">
                                        <img className="img-responsive" src="http://placehold.it/278x355?text=hover" width={278} height={355} alt="Rocha Sleeve Sweater" />
                                      </span>
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions">
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span><i className="icon-handbag icons" /><span>Add to Cart</span></span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span> 
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left">
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name"> 
                                    <a href="#" title="Rocha Sleeve Sweater">Rocha Sleeve Sweater</a>
                                  </h2>
                                  <div className="price-box"> 
                                    <p className="regular-price">
                                      <span className="price">$229.00</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover">
                                    <a href="#" title="Peace Pot Broochea" className="product-image"> 
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Peace Pot Broochea" />
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions"> 
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span><i className="icon-handbag icons" /><span>Add to Cart</span></span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span>
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name"> 
                                    <a href="#" title="Peace Pot Broochea">Peace Pot Broochea</a>
                                  </h2>
                                  <div className="price-box">
                                    <p className="regular-price">
                                      <span className="price">$229.00</span> 
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover"> 
                                    <a href="#" title="Achieve Zip Hoody" className="product-image">
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Achieve Zip Hoody" /> 
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions">
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span><i className="icon-handbag icons" /><span>Add to Cart</span></span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span>
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name"> 
                                    <a href="#" title="Achieve Zip Hoody">Achieve Zip Hoody</a>
                                  </h2>
                                  <div className="price-box"> 
                                    <p className="regular-price">
                                      <span className="price">$229.00</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover">
                                    <a href="#" title="Brown Arrows Cushion" className="product-image">
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Brown Arrows Cushion" /> 
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions"> 
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span>
                                          <i className="icon-handbag icons" />
                                          <span>Add to Cart</span>
                                        </span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span>
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left">
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name"> 
                                    <a href="#" title="Brown Arrows Cushion">Brown Arrows Cushion</a>
                                  </h2>
                                  <div className="price-box"> 
                                    <p className="regular-price"> 
                                      <span className="price">$229.00</span> 
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover"> 
                                    <span className="sticker top-right">
                                      <span className="labelsale">Sale</span>
                                    </span>
                                    <a href="#" title="Product Color" className="product-image">
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Product Color" /> 
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions"> 
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span>
                                          <i className="icon-handbag icons" />
                                          <span>Add to Cart</span>
                                        </span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span> 
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name">
                                    <a href="#" title="Product Color">Product Color</a>
                                  </h2>
                                  <div className="price-box">
                                    <p className="old-price"> 
                                      <span className="price-label">Regular Price:</span>
                                      <span className="price"> $220.00 </span>
                                    </p>
                                    <p className="special-price">
                                      <span className="price-label">Special Price</span> 
                                      <span className="price"> $180.00 </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover"> 
                                    <span className="sticker top-left">
                                      <span className="labelnew">New</span>
                                    </span>
                                    <a href="#" title="Swatches product" className="product-image">
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Swatches product" /> 
                                      <span className="product-img-back"> 
                                        <img className="img-responsive" src="http://placehold.it/278x355?text=hover-it" width={278} height={355} alt="Swatches product" />
                                      </span>
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions">
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span>
                                          <i className="icon-handbag icons" /><span>Add to Cart</span>
                                        </span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span> 
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name"> 
                                    <a href="#" title="Swatches product">Swatches product</a>
                                  </h2>
                                  <div className="price-box">
                                    <p className="regular-price"> 
                                      <span className="price">$234.00</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover"> 
                                    <a href="#" title="Senderos Riaculis" className="product-image">
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Senderos Riaculis" />
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions">
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span>
                                          <i className="icon-handbag icons" />
                                          <span>Add to Cart</span>
                                        </span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span> 
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name"> 
                                    <a href="#" title="Senderos Riaculis">Senderos Riaculis</a>
                                  </h2>
                                  <div className="price-box"> 
                                    <p className="regular-price">
                                      <span className="price">$126.00</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover"> 
                                    <span className="sticker top-right">
                                      <span className="labelsale">Sale</span>
                                    </span>
                                    <a href="#" title="Party Hat Cushion" className="product-image"> 
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Party Hat Cushion" /> 
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions">
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span>
                                          <i className="icon-handbag icons" />
                                          <span>Add to Cart</span>
                                        </span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span>
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left">
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name"><a href="#" title="Party Hat Cushion">Party Hat Cushion</a></h2>
                                  <div className="price-box">
                                    <p className="old-price">
                                      <span className="price-label">Regular Price:</span> 
                                      <span className="price"> $234.00 </span>
                                    </p>
                                    <p className="special-price"> 
                                      <span className="price-label">Special Price</span> 
                                      <span className="price"> $124.00 </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover">
                                    <span className="sticker top-right">
                                      <span className="labelsale">Sale</span>
                                    </span>
                                    <a href="#" title="Swatches Size" className="product-image">
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Swatches Size" />
                                      <span className="product-img-back"> 
                                        <img className="img-responsive" src="http://placehold.it/278x355?text=hover" width={278} height={355} alt="Swatches Size" />
                                      </span> 
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions"> 
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span>
                                          <i className="icon-handbag icons" />
                                          <span>Add to Cart</span>
                                        </span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span>
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name">
                                    <a href="#" title="Swatches Size">Swatches Size</a>
                                  </h2>
                                  <div className="price-box">
                                    <p className="old-price">
                                      <span className="price-label">Regular Price:</span> 
                                      <span className="price"> $239.00 </span>
                                    </p>
                                    <p className="special-price">
                                      <span className="price-label">Special Price</span>
                                      <span className="price"> $225.00 </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mage-magictabs mc-bestseller">
                        <div className="flexisel-content products-grid featured zoomOut play">
                          <ul className="products-grid-rows">
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover"> 
                                    <a href="#" title="Clemence Blouse" className="product-image">
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Clemence Blouse" /> 
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions"> 
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left"><span><i className="icon-handbag icons" /><span>Add to Cart</span></span></button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span>
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name">
                                    <a href="#">Clemence Blouse</a>
                                  </h2>
                                  <div className="price-box"> 
                                    <p className="regular-price">
                                      <span className="price">$229.00</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover"> 
                                    <span className="sticker top-left">
                                      <span className="labelnew">New</span>
                                    </span>
                                    <span className="sticker top-right">
                                      <span className="labelsale">Sale</span>
                                    </span> 
                                    <a href="#" title="Short Sleeve Dress" className="product-image"> 
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Short Sleeve Dress" /> 
                                      <span className="product-img-back">
                                        <img className="img-responsive" src="http://placehold.it/278x355?text=hover" width={278} height={355} alt="Short Sleeve Dress" />
                                      </span> 
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions"> 
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span><i className="icon-handbag icons" /><span>Add to Cart</span></span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span> 
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name">
                                    <a href="#" title="Short Sleeve Dress">Short Sleeve Dress</a>
                                  </h2>
                                  <div className="price-box">
                                    <p className="old-price"> 
                                      <span className="price-label">Regular Price:</span>
                                      <span className="price"> $229.00 </span>
                                    </p>
                                    <p className="special-price">
                                      <span className="price-label">Special Price</span> 
                                      <span className="price"> $200.00 </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover"> 
                                    <a href="#" title="Rocha Sleeve Sweater" className="product-image"> 
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Rocha Sleeve Sweater" /> 
                                      <span className="product-img-back">
                                        <img className="img-responsive" src="http://placehold.it/278x355?text=hover-it" width={278} height={355} alt="Rocha Sleeve Sweater" />
                                      </span>
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions">
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span><i className="icon-handbag icons" /><span>Add to Cart</span></span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span> 
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left">
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name"> 
                                    <a href="#" title="Rocha Sleeve Sweater">Rocha Sleeve Sweater</a>
                                  </h2>
                                  <div className="price-box"> 
                                    <p className="regular-price">
                                      <span className="price">$229.00</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover">
                                    <a href="#" title="Super Skinny in Tiger Camo" className="product-image"> 
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Super Skinny in Tiger Camo" /> 
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions">
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span>
                                          <i className="icon-handbag icons" /><span>Add to Cart</span>
                                        </span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span> 
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name"> 
                                    <a href="#" title="Super Skinny in Tiger Camo">Super Skinny in Tiger Camo</a>
                                  </h2>
                                  <div className="price-box"> 
                                    <p className="regular-price">
                                      <span className="price">$229.00</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover">
                                    <a href="#" title="Peace Pot Broochea" className="product-image"> 
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Peace Pot Broochea" />
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions"> 
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span><i className="icon-handbag icons" /><span>Add to Cart</span></span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span>
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name"> 
                                    <a href="#" title="Peace Pot Broochea">Peace Pot Broochea</a>
                                  </h2>
                                  <div className="price-box">
                                    <p className="regular-price">
                                      <span className="price">$229.00</span> 
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover"> 
                                    <a href="#" title="Achieve Zip Hoody" className="product-image">
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Achieve Zip Hoody" /> 
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions">
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span><i className="icon-handbag icons" /><span>Add to Cart</span></span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span>
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name"> 
                                    <a href="#" title="Achieve Zip Hoody">Achieve Zip Hoody</a>
                                  </h2>
                                  <div className="price-box"> 
                                    <p className="regular-price">
                                      <span className="price">$229.00</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover">
                                    <a href="#" title="Brown Arrows Cushion" className="product-image">
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Brown Arrows Cushion" /> 
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions"> 
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span>
                                          <i className="icon-handbag icons" />
                                          <span>Add to Cart</span>
                                        </span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span>
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left">
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name"> 
                                    <a href="#" title="Brown Arrows Cushion">Brown Arrows Cushion</a>
                                  </h2>
                                  <div className="price-box"> 
                                    <p className="regular-price"> 
                                      <span className="price">$229.00</span> 
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover"> 
                                    <span className="sticker top-right">
                                      <span className="labelsale">Sale</span>
                                    </span>
                                    <a href="#" title="Product Color" className="product-image">
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Product Color" /> 
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions"> 
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span>
                                          <i className="icon-handbag icons" />
                                          <span>Add to Cart</span>
                                        </span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span> 
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name">
                                    <a href="#" title="Product Color">Product Color</a>
                                  </h2>
                                  <div className="price-box">
                                    <p className="old-price"> 
                                      <span className="price-label">Regular Price:</span>
                                      <span className="price"> $220.00 </span>
                                    </p>
                                    <p className="special-price">
                                      <span className="price-label">Special Price</span> 
                                      <span className="price"> $180.00 </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover"> 
                                    <span className="sticker top-left">
                                      <span className="labelnew">New</span>
                                    </span>
                                    <a href="#" title="Swatches product" className="product-image">
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Swatches product" /> 
                                      <span className="product-img-back"> 
                                        <img className="img-responsive" src="http://placehold.it/278x355?text=hover-it" width={278} height={355} alt="Swatches product" />
                                      </span>
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions">
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span>
                                          <i className="icon-handbag icons" /><span>Add to Cart</span>
                                        </span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span> 
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name"> 
                                    <a href="#" title="Swatches product">Swatches product</a>
                                  </h2>
                                  <div className="price-box">
                                    <p className="regular-price"> 
                                      <span className="price">$234.00</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover"> 
                                    <a href="#" title="Senderos Riaculis" className="product-image">
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Senderos Riaculis" />
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions">
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span>
                                          <i className="icon-handbag icons" />
                                          <span>Add to Cart</span>
                                        </span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span> 
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name"> 
                                    <a href="#" title="Senderos Riaculis">Senderos Riaculis</a>
                                  </h2>
                                  <div className="price-box"> 
                                    <p className="regular-price">
                                      <span className="price">$126.00</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover"> 
                                    <span className="sticker top-right">
                                      <span className="labelsale">Sale</span>
                                    </span>
                                    <a href="#" title="Party Hat Cushion" className="product-image"> 
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Party Hat Cushion" /> 
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions">
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span>
                                          <i className="icon-handbag icons" />
                                          <span>Add to Cart</span>
                                        </span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span>
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left">
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name"><a href="#" title="Party Hat Cushion">Party Hat Cushion</a></h2>
                                  <div className="price-box">
                                    <p className="old-price">
                                      <span className="price-label">Regular Price:</span> 
                                      <span className="price"> $234.00 </span>
                                    </p>
                                    <p className="special-price"> 
                                      <span className="price-label">Special Price</span> 
                                      <span className="price"> $124.00 </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item item-animate">
                              <div className="per-product">
                                <div className="images-container">
                                  <div className="product-hover">
                                    <span className="sticker top-right">
                                      <span className="labelsale">Sale</span>
                                    </span>
                                    <a href="#" title="Swatches Size" className="product-image">
                                      <img className="img-responsive" src="http://placehold.it/278x355" width={278} height={355} alt="Swatches Size" />
                                      <span className="product-img-back"> 
                                        <img className="img-responsive" src="http://placehold.it/278x355?text=hover" width={278} height={355} alt="Swatches Size" />
                                      </span> 
                                    </a>
                                  </div>
                                  <div className="actions-no hover-box">
                                    <div className="actions"> 
                                      <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                        <span>
                                          <i className="icon-handbag icons" />
                                          <span>Add to Cart</span>
                                        </span>
                                      </button>
                                      <ul className="add-to-links pull-left">
                                        <li className="pull-left">
                                          <a href="#" title="Add to Wishlist" className="link-wishlist"><i className="icon-heart icons" />Add to Wishlist</a>
                                        </li>
                                        <li className="pull-left">
                                          <span className="separator">|</span>
                                          <a href="#" title="Add to Compare" className="link-compare"><i className="icon-Files icon-stroke icons" />Add to Compare</a>
                                        </li>
                                        <li className="link-view pull-left"> 
                                          <a title="Quick View" href="#" className="link-quickview"><i className="icon-Search icon-stroke icons" />Quick View</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="products-textlink clearfix">
                                  <h2 className="product-name">
                                    <a href="#" title="Swatches Size">Swatches Size</a>
                                  </h2>
                                  <div className="price-box">
                                    <p className="old-price">
                                      <span className="price-label">Regular Price:</span> 
                                      <span className="price"> $239.00 </span>
                                    </p>
                                    <p className="special-price">
                                      <span className="price-label">Special Price</span>
                                      <span className="price"> $225.00 </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
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
      </div>
    </div>
    <div className="block-static block_deal">
      <div className="deal-of">
        <img className="img-responsive" alt="" src="/assets/images/img-dea.png" />
        <div className="deal">
          <div className="container">
            <div className="heading">
              <h2 className="title">Deal of the day</h2>
              <span className="intro">Elegant products many people waiting and crave</span>
            </div>
            <div className="per-product">
              <div className="images-container">
                <div className="product-hover"><div id="countbox_index" className="count_down_box timer-view" data-date-now="07/15/15 11:53:25 PM" data-date-then="04/26/16 11:59:00 PM" /></div>
              </div>
              <div className="products-textlink clearfix">
                <div className="price-box">
                  <p className="special-price">
                    <span className="price-label">Special Price</span>
                    <span className="price"> $180.00 </span>
                  </p>
                  <p className="old-price">
                    <span className="price-label">Regular Price:</span> 
                    <span className="price"> $220.00 </span>
                  </p>
                  <p className="discounts">
                    Discount: 4%
                  </p>
                </div>
                <div className="shop-now"><a href="#"> Shop Now </a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="block-static block_trending">
      <div className="container">
        <div className="main">
          <div className="row">
            <div className="trending col-lg-12">
              <div className="block-custom block-custom2">
                <div className="block-title">
                  <h2>
                    <span className="title-top">New Trending</span>
                    <span className="title-backgruond icon-badge icons">
                      <span className=" hidden">owesome</span>
                    </span>
                  </h2>
                </div>
                <div>
                  <div className="magicproduct_trending magicproduct">
                    <div className="block-title-tabs">
                      <ul className="magictabs">
                        <li className="item active loaded single" data-type="newproduct">
                          <span className="title">New Products</span>
                        </li>
                      </ul>
                    </div>
                    <div className="content-products" data-margin={20} data-slider="null" data-options="{&quot;480&quot;:&quot;1&quot;,&quot;640&quot;:&quot;2&quot;,&quot;768&quot;:&quot;3&quot;,&quot;992&quot;:&quot;4&quot;,&quot;993&quot;:&quot;5&quot;}">
                      <div className="mage-magictabs mc-newproduct">
                        <ul className="flexisel-content products-grid newproduct zoomOut play">
                          <li className="item item-animate">
                            <div className="per-product">
                              <div className="images-container">
                                <div className="product-hover">
                                  <a href="#" title="Mauris tincidunt" className="product-image">
                                    <img className="img-responsive" src="http://placehold.it/212x270" width={212} height={270} alt="Mauris tincidunt" /> 
                                  </a>
                                </div>
                                <div className="actions-no hover-box">
                                  <div className="actions"> 
                                    <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                      <span>
                                        <i className="icon-handbag icons" /><span>Add to Cart</span>
                                      </span>
                                    </button>
                                    <ul className="add-to-links pull-left" />
                                  </div>
                                </div>
                              </div>
                              <div className="products-textlink clearfix">
                                <h2 className="product-name">
                                  <a href="#" title="Mauris tincidunt">Mauris tincidunt</a>
                                </h2>
                                <div className="price-box"> 
                                  <p className="regular-price"> 
                                    <span className="price">$389.00</span> 
                                  </p>
                                </div>
                                <div className="ratings">
                                  <div className="rating-box">
                                    <div className="rating" style={{width: '40%'}} />
                                  </div>
                                  <span className="amount">
                                    <a href="#">1 Review(s)</a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="item item-animate">
                            <div className="per-product">
                              <div className="images-container">
                                <div className="product-hover">
                                  <a href="#" title="Crew Neck Jumper" className="product-image">
                                    <img className="img-responsive" src="http://placehold.it/212x270" width={212} height={270} alt="Crew Neck Jumper" /> 
                                    <span className="product-img-back">
                                      <img className="img-responsive" src="http://placehold.it/212x270?text=hover" width={212} height={270} alt="Crew Neck Jumper" /> 
                                    </span> 
                                  </a>
                                </div>
                                <div className="actions-no hover-box">
                                  <div className="actions"> 
                                    <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                      <span>
                                        <i className="icon-handbag icons" /><span>Add to Cart</span>
                                      </span>
                                    </button>
                                    <ul className="add-to-links pull-left" />
                                  </div>
                                </div>
                              </div>
                              <div className="products-textlink clearfix">
                                <h2 className="product-name">
                                  <a href="#" title="Crew Neck Jumper">Crew Neck Jumper</a>
                                </h2>
                                <div className="price-box">
                                  <p className="old-price"> 
                                    <span className="price-label">Regular Price:</span> 
                                    <span className="price"> $245.00 </span>
                                  </p>
                                  <p className="special-price">
                                    <span className="price-label">Special Price</span>
                                    <span className="price"> $134.00 </span>
                                  </p>
                                </div>
                                <div className="ratings">
                                  <div className="rating-box">
                                    <div className="rating" style={{width: '100%'}} />
                                  </div>
                                  <span className="amount">
                                    <a href="#">1 Review(s)</a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="item item-animate">
                            <div className="per-product">
                              <div className="images-container">
                                <div className="product-hover">
                                  <a href="#" title="Knitted T-Shirt" className="product-image"> 
                                    <img className="img-responsive" src="http://placehold.it/212x270" width={212} height={270} alt="Knitted T-Shirt" /> 
                                  </a>
                                </div>
                                <div className="actions-no hover-box">
                                  <div className="actions"> 
                                    <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                      <span>
                                        <i className="icon-handbag icons" /><span>Add to Cart</span>
                                      </span>
                                    </button>
                                    <ul className="add-to-links pull-left" />
                                  </div>
                                </div>
                              </div>
                              <div className="products-textlink clearfix">
                                <h2 className="product-name"> 
                                  <a href="#" title="Knitted T-Shirt">Knitted T-Shirt</a>
                                </h2>
                                <div className="price-box">	
                                  <p className="regular-price">
                                    <span className="price">$24.00</span>
                                  </p>
                                </div>
                                <div className="ratings">
                                  <div className="rating-box">
                                    <div className="rating" style={{width: '60%'}} />
                                  </div> 
                                  <span className="amount">
                                    <a href="#">1 Review(s)</a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="item item-animate">
                            <div className="per-product">
                              <div className="images-container">
                                <div className="product-hover">
                                  <a href="#" title="Crew Neck Jumper color" className="product-image"> 
                                    <img className="img-responsive" src="http://placehold.it/212x270" width={212} height={270} alt="Crew Neck Jumper color" /> 
                                    <span className="product-img-back">
                                      <img className="img-responsive" src="http://placehold.it/212x270?text=hover" width={212} height={270} alt="Crew Neck Jumper color" /> 
                                    </span>
                                  </a>
                                </div>
                                <div className="actions-no hover-box">
                                  <div className="actions"> 
                                    <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                      <span>
                                        <i className="icon-handbag icons" /><span>Add to Cart</span>
                                      </span>
                                    </button>
                                    <ul className="add-to-links pull-left" />
                                  </div>
                                </div>
                              </div>
                              <div className="products-textlink clearfix">
                                <h2 className="product-name"> 
                                  <a href="#" title="Crew Neck Jumper color">Crew Neck Jumper color</a>
                                </h2>
                                <div className="price-box">
                                  <p className="regular-price">
                                    <span className="price">$35.00</span>
                                  </p>
                                </div>
                                <div className="ratings">
                                  <div className="rating-box">
                                    <div className="rating" style={{width: '80%'}} />
                                  </div> 
                                  <span className="amount">
                                    <a href="#">1 Review(s)</a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="item item-animate">
                            <div className="per-product">
                              <div className="images-container">	
                                <div className="product-hover">
                                  <a href="#" title="fermentum suscipit." className="product-image">
                                    <img className="img-responsive" src="http://placehold.it/212x270" width={212} height={270} alt="fermentum suscipit." />
                                  </a>
                                </div>
                                <div className="actions-no hover-box">
                                  <div className="actions">
                                    <button type="button" title="Add to Cart" className="button btn-cart pull-left">
                                      <span>
                                        <i className="icon-handbag icons" /><span>Add to Cart</span>
                                      </span>
                                    </button>
                                    <ul className="add-to-links pull-left" />
                                  </div>
                                </div>
                              </div>
                              <div className="products-textlink clearfix">
                                <h2 className="product-name">
                                  <a href="#" title="fermentum suscipit.">fermentum suscipit.</a>
                                </h2>
                                <div className="price-box">
                                  <p className="regular-price">
                                    <span className="price">$345.00</span>
                                  </p>
                                </div>
                                <div className="ratings">
                                  <div className="rating-box">
                                    <div className="rating" style={{width: '60%'}} />
                                  </div>
                                  <span className="amount">
                                    <a href="#">1 Review(s)</a>
                                  </span>
                                </div>
                              </div>
                            </div>
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
    </div>
    <div className="block-static block_policy">
      <div className="policy">
        <div className="container">
          <div className="support-policy">
            <div className="support-footer-inner row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="row-normal">
                  <div className="col-icon">
                    <div className="support-icon square-round"><i className="icon-stroke icon-Truck icons" /></div>
                  </div>
                  <div className="col-text">
                    <div className="support-info">
                      <div className="info-title">Free Delivery Worldwide</div>
                      <div className="info-details">We are free shipping worldwide, you can buy and receive goods anywhere. Fast and safe</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="row-normal">
                  <div className="col-icon">
                    <div className="support-icon square-round"><i className="icon-wallet icons" /></div>
                  </div>
                  <div className="col-text">
                    <div className="support-info">
                      <div className="info-title">100% Money Back</div>
                      <div className="info-details">If you are not satisfied with the quality of products, our services, you can return the goods &amp; receive a 100% money back</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="row-normal">
                  <div className="col-icon">
                    <div className="support-icon square-round"><i className="icon-Users icon-stroke icons" /></div>
                  </div>
                  <div className="col-text">
                    <div className="support-info">
                      <div className="info-title">Member Discount</div>
                      <div className="info-details">Please register with us to receive friendly member gifts and discounts on purchases weekly</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="block-static alo-blog">
      <div className="container">
        <div className="main">
          <div className="row">
            <div className="col-lg-12">
              <div className="block-custom block-custom3">
                <div className="block-title">
                  <h2>
                    <span className="title-top">News &amp; Blog</span>
                    <span className="title-backgruond icon-note icons">
                      <span className=" hidden">owesome</span>
                    </span>
                  </h2>
                </div>
                <div className="magicproduct_news">
                  <div className="blogtabs block-title-tabs">
                    <h3 className="item active loaded section-title title_left" data-type="blog">
                      <span>Latest Posts Blog</span>
                    </h3>
                  </div>
                  <div className="content-blog" data-margin={60} data-slider="{&quot;moveSlides&quot;:2,&quot;infiniteLoop&quot;:0,&quot;maxSlides&quot;:&quot;2&quot;,&quot;slideWidth&quot;:&quot;555&quot;,&quot;slideMargin&quot;:60,&quot;pager&quot;:1,&quot;controls&quot;:0,&quot;speed&quot;:800,&quot;visibleItems&quot;:2,&quot;responsiveBreakpoints&quot;:{&quot;480&quot;:1,&quot;640&quot;:1,&quot;768&quot;:1,&quot;992&quot;:2}}" data-options="{&quot;480&quot;:&quot;1&quot;,&quot;640&quot;:&quot;1&quot;,&quot;768&quot;:&quot;1&quot;,&quot;992&quot;:&quot;2&quot;,&quot;993&quot;:&quot;2&quot;}">
                    <div className="mc-blog">
                      <ul className="flexisel-content">
                        <li className="item">
                          <div className="postcontent">
                            <div className="blog-image image-container">
                              <a href="#">
                                <img className="img-responsive" src="http://placehold.it/540x290" alt="imgBlog" />
                              </a>
                            </div>
                            <div className="blog_short_text clearfix">
                              <div className="icon-blog">
                                <i className="icon-camera icons" />
                              </div>
                              <div className="blog_text"> 
                                <a href="#">
                                  <span className="title">Rulam phareta</span>
                                </a>
                                <div className="post-date">
                                  <span>21 Feb 2015</span>-By<span className="title">nouthemes alo</span>
                                  <i className="icon-speech icons" />
                                  <span className="comments"> comments</span>
                                </div>
                                <div className="shortcontent-text">
                                  <p className="short-text">Donec commodo finibus massa, in malesuada arcu tincidunt tristique! In rutrum non nisi id volutpat. Integer rhoncus...</p>
                                </div> 
                                <a className="read-more-blog" href="#">read more</a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="postcontent">
                            <div className="blog-image image-container"> 
                              <a href="#"><img className="img-responsive" src="http://placehold.it/540x290" alt="imgBlog" /></a>
                            </div>
                            <div className="blog_short_text clearfix">
                              <div className="icon-blog"> <i className="icon-control-play icons" /></div>
                              <div className="blog_text"> 
                                <a href="#">
                                  <span className="title">Duis bibendum</span>
                                </a>
                                <div className="post-date"> 
                                  <span>07 Apr 2015</span>-By<span className="title">admin</span>
                                  <i className="icon-speech icons" />
                                  <span className="comments"> comments</span>
                                </div>
                                <div className="shortcontent-text">
                                  <p className="short-text">Donec commodo finibus massa, in malesuada arcu tincidunt tristique! In rutrum non nisi id volutpat. Integer rhoncus...</p>
                                </div>
                                <a className="read-more-blog" href="#">read more</a>
                              </div>
                            </div>
                          </div>
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
    <div className="block-static block_bottom">
      <div className="container">
        <div className="main">
          <div className="row">
            <div className="bottom">
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="magicproduct_bottom magicproduct mage-custom">
                  <div className="block-title-tabs">
                    <ul className="magictabs">
                      <li className="item active loaded single" data-type="mostviewed">
                        <span className="title">Most Viewed</span>
                      </li>
                    </ul>
                  </div>
                  <div className="content-products" data-margin={30} data-slider="null" data-options="{&quot;480&quot;:&quot;1&quot;,&quot;640&quot;:&quot;1&quot;,&quot;768&quot;:&quot;1&quot;,&quot;992&quot;:&quot;1&quot;,&quot;993&quot;:&quot;1&quot;}">
                    <div className="mage-magictabs mc-mostviewed">
                      <ul className="flexisel-content products-grid mostviewed zoomOut play">
                        <li className="item item-animate">
                          <div className="per-product clearfix">
                            <div className="images-container col-lg-4 col-md-4 col-sm-4 col-xs-4">
                              <div className="product-hover">
                                <a href="#" title="Configurable Product" className="product-image">
                                  <img className="img-responsive" src="http://placehold.it/100x128" width={100} height={128} alt="Configurable Product" /> 
                                </a>
                              </div>
                              <div className="actions-no hover-box"> 
                                <a className="detail_links" href="#" />
                                <div className="actions">
                                  <ul className="add-to-links" />
                                </div>
                              </div>
                            </div>
                            <div className="products-textlink col-lg-8 col-md-8 col-sm-8 col-xs-8 product-featured-custom clearfix">
                              <h2 className="product-name"> 
                                <a href="#" title="Configurable Product">Configurable Product</a>
                              </h2>
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating" style={{width: '80%'}} />
                                </div> 
                                <span className="amount">
                                  <a href="#">1 Review(s)</a>
                                </span>
                              </div>
                              <div className="price-box"> 
                                <p className="regular-price">
                                  <span className="price">$180.00</span> 
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="item item-animate">
                          <div className="per-product clearfix">
                            <div className="images-container col-lg-4 col-md-4 col-sm-4 col-xs-4">
                              <div className="product-hover">
                                <a href="#" title="Product Color" className="product-image"> 
                                  <img className="img-responsive" src="http://placehold.it/100x128" width={100} height={128} alt="Product Color" /> 
                                </a>
                              </div>
                              <div className="actions-no hover-box"> 
                                <a className="detail_links" href="#" />
                                <div className="actions">
                                  <ul className="add-to-links" />
                                </div>
                              </div>
                            </div>
                            <div className="products-textlink col-lg-8 col-md-8 col-sm-8 col-xs-8 product-featured-custom clearfix">
                              <h2 className="product-name">
                                <a href="#" title="Product Color">Product Color</a>
                              </h2>
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating" style={{width: '80%'}} />
                                </div> 
                                <span className="amount">
                                  <a href="#">1 Review(s)</a>
                                </span>
                              </div>
                              <div className="price-box">
                                <p className="old-price"> 
                                  <span className="price-label">Regular Price:</span>
                                  <span className="price"> $220.00 </span>
                                </p>
                                <p className="special-price">
                                  <span className="price-label">Special Price</span> 
                                  <span className="price"> $180.00 </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="item item-animate">
                          <div className="per-product clearfix">
                            <div className="images-container col-lg-4 col-md-4 col-sm-4 col-xs-4">
                              <div className="product-hover">
                                <a href="#" title="Clemence Blouse" className="product-image"> 
                                  <img className="img-responsive" src="http://placehold.it/100x128" width={100} height={128} alt="Clemence Blouse" /> 
                                </a>
                              </div>
                              <div className="actions-no hover-box"> 
                                <a className="detail_links" href="#" />
                                <div className="actions">
                                  <ul className="add-to-links" />
                                </div>
                              </div>
                            </div>
                            <div className="products-textlink col-lg-8 col-md-8 col-sm-8 col-xs-8 product-featured-custom clearfix">
                              <h2 className="product-name"> 
                                <a href="#" title="Clemence Blouse">Clemence Blouse</a>
                              </h2>
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating" style={{width: '60%'}} />
                                </div> 
                                <span className="amount">
                                  <a href="#">1 Review(s)</a>
                                </span>
                              </div>
                              <div className="price-box"> 
                                <p className="regular-price">
                                  <span className="price">$229.00</span> 
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="magicproduct_bottom magicproduct mage-custom">
                  <div className="block-title-tabs">
                    <ul className="magictabs">
                      <li className="item active loaded single" data-type="bestseller"><span className="title">Bestseller</span></li>
                    </ul>
                  </div>
                  <div className="content-products" data-margin={30} data-slider="null" data-options="{&quot;480&quot;:&quot;1&quot;,&quot;640&quot;:&quot;1&quot;,&quot;768&quot;:&quot;1&quot;,&quot;992&quot;:&quot;1&quot;,&quot;993&quot;:&quot;1&quot;}">
                    <div className="mage-magictabs mc-bestseller">
                      <ul className="flexisel-content products-grid bestseller zoomOut play">
                        <li className="item item-animate">
                          <div className="per-product clearfix">
                            <div className="images-container col-lg-4 col-md-4 col-sm-4 col-xs-4">
                              <div className="product-hover"> 
                                <a href="#" title="Short Sleeve Dress" className="product-image">
                                  <img className="img-responsive" src="http://placehold.it/100x128" width={100} height={128} alt="Short Sleeve Dress" /> 
                                </a>
                              </div>
                              <div className="actions-no hover-box">
                                <a className="detail_links" href="#" />
                                <div className="actions">
                                  <ul className="add-to-links" />
                                </div>
                              </div>
                            </div>
                            <div className="products-textlink col-lg-8 col-md-8 col-sm-8 col-xs-8 product-featured-custom clearfix">
                              <h2 className="product-name">
                                <a href="#" title="Short Sleeve Dress">Short Sleeve Dress</a>
                              </h2>
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating" style={{width: '60%'}} />
                                </div> 
                                <span className="amount">
                                  <a href="#">1 Review(s)</a>
                                </span>
                              </div>
                              <div className="price-box">
                                <p className="old-price">
                                  <span className="price-label">Regular Price:</span> 
                                  <span className="price"> $229.00 </span>
                                </p>
                                <p className="special-price">
                                  <span className="price-label">Special Price</span>
                                  <span className="price"> $200.00 </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="item item-animate">
                          <div className="per-product clearfix">
                            <div className="images-container col-lg-4 col-md-4 col-sm-4 col-xs-4">
                              <div className="product-hover"> 
                                <a href="#" title="Super Skinny in Tiger Camo" className="product-image"> 
                                  <img className="img-responsive" src="http://placehold.it/100x128" width={100} height={128} alt="Super Skinny in Tiger Camo" /> 
                                </a>
                              </div>
                              <div className="actions-no hover-box"> 
                                <a className="detail_links" href="#" />
                                <div className="actions">	
                                  <ul className="add-to-links" />
                                </div>
                              </div>
                            </div>
                            <div className="products-textlink col-lg-8 col-md-8 col-sm-8 col-xs-8 product-featured-custom clearfix">
                              <h2 className="product-name"> 
                                <a href="#" title="Super Skinny in Tiger Camo">Super Skinny in Tiger Camo</a>
                              </h2>
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating" style={{width: '40%'}} />
                                </div>
                                <span className="amount">
                                  <a href="#">1 Review(s)</a>
                                </span>
                              </div>
                              <div className="price-box"> 
                                <p className="regular-price">
                                  <span className="price">$229.00</span> 
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="item item-animate">
                          <div className="per-product clearfix">
                            <div className="images-container col-lg-4 col-md-4 col-sm-4 col-xs-4">
                              <div className="product-hover"> 
                                <a href="#" title="Mauris tincidunt" className="product-image">	
                                  <img className="img-responsive" src="http://placehold.it/100x128" width={100} height={128} alt="Mauris tincidunt" /> 
                                </a>
                              </div>
                              <div className="actions-no hover-box"> 
                                <a className="detail_links" href="#" />
                                <div className="actions">
                                  <ul className="add-to-links" />
                                </div>
                              </div>
                            </div>
                            <div className="products-textlink col-lg-8 col-md-8 col-sm-8 col-xs-8 product-featured-custom clearfix">	
                              <h2 className="product-name"> <a href="#" title="Mauris tincidunt">Mauris tincidunt</a></h2>
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating" style={{width: '40%'}} />
                                </div>
                                <span className="amount"><a href="#">1 Review(s)</a></span>
                              </div>
                              <div className="price-box"> 
                                <p className="regular-price"> <span className="price">$389.00</span> </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="magicproduct_lastest_product magicproduct mage-custom">
                  <div className="block-title-tabs">
                    <ul className="magictabs">
                      <li className="item active loaded single" data-type="latest">
                        <span className="title">Latest Products</span>
                      </li>
                    </ul>
                  </div>
                  <div className="content-products" data-margin={30} data-slider="null" data-options="{&quot;480&quot;:&quot;1&quot;,&quot;640&quot;:&quot;1&quot;,&quot;768&quot;:&quot;1&quot;,&quot;992&quot;:&quot;1&quot;,&quot;993&quot;:&quot;1&quot;}">
                    <div className="mage-magictabs mc-latest">
                      <ul className="flexisel-content products-grid latest zoomOut play">
                        <li className="item item-animate">
                          <div className="per-product clearfix">
                            <div className="images-container col-lg-4 col-md-4 col-sm-4 col-xs-4">
                              <div className="product-hover"> 
                                <a href="#" title="fermentum suscipit." className="product-image"> 
                                  <img className="img-responsive" src="http://placehold.it/100x128" width={100} height={128} alt="fermentum suscipit." /> 
                                </a>
                              </div>
                              <div className="actions-no hover-box"> 
                                <a className="detail_links" href="#" />
                                <div className="actions">
                                  <ul className="add-to-links" />
                                </div>
                              </div>
                            </div>
                            <div className="products-textlink col-lg-8 col-md-8 col-sm-8 col-xs-8 product-featured-custom clearfix">
                              <h2 className="product-name">
                                <a href="#" title="fermentum suscipit.">fermentum suscipit.</a>
                              </h2>
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating" style={{width: '60%'}} />
                                </div> 
                                <span className="amount">
                                  <a href="#">1 Review(s)</a>
                                </span>
                              </div>
                              <div className="price-box">
                                <p className="regular-price"> 
                                  <span className="price">$345.00</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="item item-animate">
                          <div className="per-product clearfix">
                            <div className="images-container col-lg-4 col-md-4 col-sm-4 col-xs-4">
                              <div className="product-hover">
                                <a href="#" title="Cras sed rutrum" className="product-image">
                                  <img className="img-responsive" src="http://placehold.it/100x128" width={100} height={128} alt="Cras sed rutrum" />
                                </a>
                              </div>
                              <div className="actions-no hover-box">
                                <a className="detail_links" href="#" />
                                <div className="actions">
                                  <ul className="add-to-links" />
                                </div>
                              </div>
                            </div>
                            <div className="products-textlink col-lg-8 col-md-8 col-sm-8 col-xs-8 product-featured-custom clearfix">
                              <h2 className="product-name">
                                <a href="#" title="Cras sed rutrum">Cras sed rutrum</a>
                              </h2>
                              <div className="price-box">
                                <p className="regular-price"> <span className="price">$489.00</span> </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="item item-animate">
                          <div className="per-product clearfix">
                            <div className="images-container col-lg-4 col-md-4 col-sm-4 col-xs-4">
                              <div className="product-hover"> 
                                <a href="#" title="Mauris tincidunt" className="product-image">	
                                  <img className="img-responsive" src="http://placehold.it/100x128" width={100} height={128} alt="Mauris tincidunt" /> 
                                </a>
                              </div>
                              <div className="actions-no hover-box"> 
                                <a className="detail_links" href="#" />
                                <div className="actions">
                                  <ul className="add-to-links" />
                                </div>
                              </div>
                            </div>
                            <div className="products-textlink col-lg-8 col-md-8 col-sm-8 col-xs-8 product-featured-custom clearfix">	
                              <h2 className="product-name"> <a href="#" title="Mauris tincidunt">Mauris tincidunt</a></h2>
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating" style={{width: '40%'}} />
                                </div>
                                <span className="amount"><a href="#">1 Review(s)</a></span>
                              </div>
                              <div className="price-box"> 
                                <p className="regular-price"> <span className="price">$389.00</span> </p>
                              </div>
                            </div>
                          </div>
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
    <div className="alo-brands">
      <div className="container">
        <div className="main">
          <div className="row">
            <div className="col-lg-12">
              <div id="footer-brand">
                <ul className="magicbrand">
                  <li> <a href="#"> <img className="brand img-responsive" src="http://placehold.it/190x80/ffffff" alt="brands_01" title="brands_01" /> </a></li>
                  <li> <a href="#"> <img className="brand img-responsive" src="http://placehold.it/190x80/ffffff" alt="brands_02" title="brands_02" /> </a></li>
                  <li> <a href="#"> <img className="brand img-responsive" src="http://placehold.it/190x80/ffffff" alt="brands_03" title="brands_03" /> </a></li>
                  <li> <a href="#"> <img className="brand img-responsive" src="http://placehold.it/190x80/ffffff" alt="brands_04" title="brands_04" /> </a></li>
                  <li> <a href="#"> <img className="brand img-responsive" src="http://placehold.it/190x80/ffffff" alt="brands_05" title="brands_05" /> </a></li>
                  <li> <a href="#"> <img className="brand img-responsive" src="http://placehold.it/190x80/ffffff" alt="brands_06" title="brands_06" /> </a></li>
                </ul>
              </div>									
            </div>
          </div>
        </div>
      </div>
    </div>	
  </div>
</>
  )
}
