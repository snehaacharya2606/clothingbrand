'use client'

import { useState } from 'react'

export default function HeaderRaw() {
  const [cartOpen, setCartOpen] = useState(false)
  return (
<>			<div className="header-container header-color color">
    <div className="header_full">
      <div className="header">
        <div className="header-logo show-992">
          <a href="/" className="logo"> <img className="img-responsive" src="/assets/images/logo.png" alt="" /></a>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="header-config-bg">
                <div className="header-wrapper-bottom">
                  <div className="custom-menu col-lg-12">
                    <div className="header-logo hidden-992">
                      <a href="/" className="logo"> <img className="img-responsive" src="/assets/images/logo.png" alt="" /></a>
                    </div>
                    <div className="magicmenu clearfix">
                      <ul className="nav-desktop sticker">
                        <li className="level0 logo display"><a className="level-top" href="/"><img alt="logo" src="/assets/images/logo.png" /></a></li>
                        <li className="level0 home">
                          <a className="level-top" href="/"><span className="icon-home fa fa-home" /><span className="icon-text">Home</span></a>
                          <div className="level-top-mega">
                            <div><a href="/"><span className="demo-home">Home 01 / Default</span></a></div>
                            <div><a href="/index2"><span className="demo-home">Home 02 / Digital</span></a></div>
                            <div><a href="/index3"><span className="demo-home">Home 03 / Fashion</span></a></div>
                            <div><a href="/index4"><span className="demo-home">Home 04 / Furniture</span></a></div>
                            <div><a href="/index5"><span className="demo-home">Home 05 / Furniture</span></a></div>
                            <div><a href="/index6"><span className="demo-home">Home 06 / Jewelry</span></a></div>
                          </div>
                        </li>
                        <li className="level0 cat first">
                          <a className="level-top" href="/list"><span>Men </span><span className="boder-menu" /></a>
                          <div className="level-top-mega">
                            <div className="content-mega">
                              <div className="content-mega-horizontal">
                                <ul className="mage-column cat-mega">
                                  <li className="children">
                                    <ul>
                                      <li className="level-3 first"><a href="#">Dresses <span className="cat_label Hot">Hot</span></a></li>
                                      <li className="nav"><a href="#">Cocktail </a></li>
                                      <li className="nav"><a href="#">Day </a></li>
                                      <li className="nav"><a href="#">Evening </a></li>
                                      <li className="nav"><a href="#">Sports </a></li>
                                    </ul>
                                  </li>
                                  <li />
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="level0 cat" data-options="{&quot;cat_columns&quot;:&quot;3&quot;,&quot;cat_proportions&quot;:&quot;3&quot;,&quot;right_proportions&quot;:&quot;2&quot;,&quot;left_proportions&quot;:null}">
                          <a className="level-top" href="/list">
                            <span>Women <span className="cat_label New">New</span></span>
                            <span className="boder-menu" />
                          </a>
                          <div className="level-top-mega">
                            <div className="content-mega">
                              <div className="content-mega-horizontal">
                                <ul className="mage-column cat-mega">
                                  <li className="children">
                                    <ul>
                                      <li className="level-3 first"><a href="#">Men's Wear</a></li>
                                      <li className="nav"><a href="#">Shirts &amp; Tops </a></li>
                                      <li className="nav"><a href="#">Dresses </a></li>
                                      <li className="nav"><a href="#">Swimwear <span className="cat_label New">New</span></a></li>
                                      <li className="nav"><a href="#">Sweaters </a></li>
                                      <li className="nav"><a href="#">Jeans </a></li>
                                      <li className="nav"><a href="#">Shoes </a></li>
                                    </ul>
                                  </li>
                                  <li className="children">
                                    <ul>
                                      <li className="level-3 first"><a href="#">Women's Wear </a></li>
                                      <li className="nav"><a href="#">Party Dress</a></li>
                                      <li className="nav"><a href="#">Sports &amp; Lifestyle </a></li>
                                      <li className="nav"><a href="#">Jean &amp; Trousers</a></li>
                                      <li className="nav"><a href="#">Sweaters</a></li>
                                      <li className="nav"><a href="#">Blouses </a></li>
                                      <li className="nav"><a href="#">T-Shirts </a></li>
                                    </ul>
                                  </li>
                                  <li className="children">
                                    <ul>
                                      <li className="level-3 first"><a href="#">Accessories </a></li>
                                      <li className="nav"><a href="#">Leather </a></li>
                                      <li className="nav"><a href="#">Bag &amp; Persess <span className="cat_label Hot">Hot</span></a></li>
                                      <li className="nav"><a href="#">Belts </a></li>
                                      <li className="nav"><a href="#">Sunglasses </a></li>
                                      <li className="nav"><a href="#">Sweaters </a></li>
                                      <li className="nav"><a href="#">Sassuawear </a></li>
                                    </ul>
                                  </li>
                                  <li />
                                </ul>
                                <div className="mage-column mega-block-right">
                                  <div>
                                    <img className="img-responsive" alt="" src="http://placehold.it/320x250" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="level0 cat ">
                          <a className="level-top" href="#"><span>Footwear </span><span className="boder-menu" /></a>
                          <div className="level-top-mega">
                            <div className="content-mega">
                              <div className="content-mega-horizontal">
                                <ul className="mage-column cat-mega">
                                  <li className="children">
                                    <ul>
                                      <li className="level-3 first">
                                        <a href="#">Women’s Clothing </a>
                                        <img className="img-responsive" alt="images" src="http://placehold.it/335x200" />
                                      </li>
                                      <li className="nav"><a href="#">Sports </a></li>
                                      <li className="nav"><a href="#">Jeans <span className="cat_label New">New</span></a></li>
                                      <li className="nav"><a href="#">Cocktail </a></li>
                                      <li className="nav"><a href="#">Day </a></li>
                                      <li className="nav"><a href="#">Evening </a></li>
                                    </ul>
                                  </li>
                                  <li className="children">
                                    <ul>
                                      <li className="level-3 first">
                                        <a href="#">Men’s Shoe </a>
                                        <img className="img-responsive" alt="images" src="http://placehold.it/335x200" />
                                      </li>
                                      <li className="nav"><a href="#">Books </a></li>
                                      <li className="nav"><a href="#">Sports </a></li>
                                      <li className="nav"><a href="#">Run </a></li>
                                      <li className="nav"><a href="#">Sandals </a></li>
                                      <li className="nav">
                                        <a href="#">T-Shirts <span className="cat_label Hot">Hot</span></a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="children">
                                    <ul>
                                      <li className="level-3 first">
                                        <a href="#">Skirts </a>
                                        <img className="img-responsive" alt="images" src="http://placehold.it/335x200" />
                                      </li>
                                      <li className="nav"><a href="#">Sassuawear </a></li>
                                      <li className="nav"><a href="#">Leather </a></li>
                                      <li className="nav"><a href="#">Bag &amp; Persess </a></li>
                                      <li className="nav"><a href="#">Sunglasses </a></li>
                                      <li className="nav"><a href="#">Sweaters </a></li>
                                    </ul>
                                  </li>
                                  <li />
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="level0 cat last noChild">
                          <a className="level-top" href="#">
                            <span>Collections </span><span className="boder-menu" />
                          </a>
                        </li>
                        <li className="level0 home">
                          <a className="level-top" href="/portfolio-packery"><span className="icon-text">Portfolio</span><span className="boder-menu" /></a>
                          <div className="level-top-mega">
                            <div><a href="/portfolio-packery"><span className="demo-home">Portfolio / Packery</span></a></div>
                            <div><a href="/portfolio-2-col"><span className="demo-home">Portfolio / 02 Col</span></a></div>
                            <div><a href="/portfolio-3-col"><span className="demo-home">Portfolio / 03 Col</span></a></div>
                            <div><a href="/portfolio-4-col"><span className="demo-home">Portfolio / 04 Col</span></a></div>
                            <div><a href="/single-portfolio"><span className="demo-home">Portfolio / Single 01</span></a></div>
                            <div><a href="/detail-portfolio"><span className="demo-home">Portfolio / Single 02</span></a></div>
                          </div>
                        </li>
                        <li className="level0 home">
                          <a className="level-top" href="/blog-list"><span className="icon-text">Blog</span><span className="boder-menu" /></a>
                          <div className="level-top-mega">
                            <div><a href="/blog-list"><span className="demo-home">Blog / Full Page</span></a></div>
                            <div><a href="/blog-mansory"><span className="demo-home">Blog / Mansory</span></a></div>
                            <div><a href="/blog-large"><span className="demo-home">Blog / With Sidebar</span></a></div>
                            <div><a href="/blog-detail"><span className="demo-home">Blog Detail</span></a></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="nav-mobile">
                      <h3 className="mobi-title">Categories</h3>
                      <ul>
                        <li className="level-top">
                          <a className="level-top" href="/list"><span>Men </span><span className="boder-menu" /></a>
                          <ul>
                            <li>
                              <a href="/list">Dresses <span className="cat_label Hot">Hot</span></a>
                              <ul>
                                <li className="nav "><a href="#">Cocktail </a></li>
                                <li className="nav "><a href="#">Day </a></li>
                                <li className="nav "><a href="#">Evening </a></li>
                                <li className="nav "><a href="#">Sports </a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="level-top">
                          <a className="level-top" href="/list"><span>Women <span className="cat_label New">New</span></span><span className="boder-menu" /></a>
                          <ul>
                            <li>
                              <a href="#">New Arrivals <span className="cat_label New">New</span></a>
                              <ul>
                                <li className="nav "><a href="#">Shirts &amp; Tops </a></li>
                                <li className="nav "><a href="#">Outerwear </a></li>
                                <li className="nav "><a href="#">Sweaters <span className="cat_label New">New</span></a></li>
                                <li className="nav "><a href="#">Shoes </a></li>
                                <li className="nav "><a href="#">Bottoms </a></li>
                                <li className="nav "><a href="#">Shirts </a></li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Outerwear </a>
                              <ul>
                                <li className="nav "><a href="#">Vests </a></li>
                                <li className="nav "><a href="#">Jackets </a></li>
                                <li className="nav "><a href="#">Vests New Bags </a></li>
                                <li className="nav "><a href="#">Coats </a></li>
                                <li className="nav "><a href="#">Blazers </a></li>
                                <li className="nav "><a href="#">Sweaters </a></li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Accessories </a>
                              <ul>
                                <li className="nav "><a href="#">Cosmetics </a></li>
                                <li className="nav "><a href="#">Tights &amp; Socks <span className="cat_label Hot">Hot</span></a></li>
                                <li className="nav "><a href="#">Leather </a></li>
                                <li className="nav "><a href="#">Undergarments </a></li>
                                <li className="nav "><a href="#">Sunglasses </a></li>
                                <li className="nav "><a href="#">Watches </a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="level-top">
                          <a className="level-top" href="#">
                            <span>Footwear </span><span className="boder-menu" />
                          </a>
                          <ul>
                            <li>
                              <a href="#"> Women’s Clothing </a>
                              <img className="img-responsive" alt="images" src="http://placehold.it/335x200" />
                              <ul>
                                <li className="nav "><a href="#">Sports </a></li>
                                <li className="nav "><a href="#">Jeans <span className="cat_label New">New</span></a></li>
                                <li className="nav "><a href="#">Cocktail </a></li>
                                <li className="nav "><a href="#">Day </a></li>
                                <li className="nav "><a href="#">Evening </a></li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Men’s Shoe </a>
                              <img className="img-responsive" alt="images" src="http://placehold.it/335x200" />
                              <ul>
                                <li className="nav "><a href="#">Books </a></li>
                                <li className="nav "><a href="#">Sports </a></li>
                                <li className="nav "><a href="#">Run </a></li>
                                <li className="nav "><a href="#">Sandals </a></li>
                                <li className="nav "><a href="#">T-Shirts <span className="cat_label Hot">Hot</span></a></li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Skirts </a>
                              <img className="img-responsive" alt="images" src="http://placehold.it/335x200" />
                              <ul>
                                <li className="nav "><a href="#">Sassuawear </a></li>
                                <li className="nav "><a href="#">Leather </a></li>
                                <li className="nav "><a href="#">Bag &amp; Persess </a></li>
                                <li className="nav "><a href="#">Sunglasses </a></li>
                                <li className="nav "><a href="#">Sweaters </a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="level-top">
                          <a className="level-top" href="#">
                            <span>Collections </span><span className="boder-menu" />
                          </a>
                        </li>
                        <li className="level-top">
                          <a className="level-top" href="/portfolio-packery"><span className="icon-text">Portfolio</span><span className="boder-menu" /></a>
                          <ul className="level-top-mega">
                            <li><a href="/portfolio-packery"><span className="demo-home">Portfolio / Packery</span></a></li>
                            <li><a href="/portfolio-2-col"><span className="demo-home">Portfolio / 02 Col</span></a></li>
                            <li><a href="/portfolio-3-col"><span className="demo-home">Portfolio / 03 Col</span></a></li>
                            <li><a href="/portfolio-4-col"><span className="demo-home">Portfolio / 04 Col</span></a></li>
                            <li><a href="/single-portfolio"><span className="demo-home">Portfolio / Single 01</span></a></li>
                            <li><a href="/detail-portfolio"><span className="demo-home">Portfolio / Single 02</span></a></li>
                          </ul>
                        </li>
                        <li className="level-top">
                          <a className="level-top" href="/blog-list"><span className="icon-text">Blog</span><span className="boder-menu" /></a>
                          <ul className="level-top-mega">
                            <li><a href="/blog-list"><span className="demo-home">Blog / Full Page</span></a></li>
                            <li><a href="/blog-mansory"><span className="demo-home">Blog / Mansory</span></a></li>
                            <li><a href="/blog-large"><span className="demo-home">Blog / With Sidebar</span></a></li>
                            <li><a href="/blog-detail"><span className="demo-home">Blog Detail</span></a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-page clearfix">
          <div className="header-setting header-search">
            <div className="settting-switcher">
              <div className="dropdown-toggle">
                <div className="icon-setting"><i className="icon-magnifier icons" /></div>
              </div>
              <div className="dispaly-seach dropdown-switcher">
                <form id="search_mini_form" action="#" method="get">
                  <div className="form-search clearfix"> 
                    <input id="catsearch" type="hidden" name="cat" /> 
                    <input id="search" type="text" name="q" className="input-text" placeholder="Search ..." />
                    <select className="ddslick" id="cat" name="cat">
                      <option value="">Categories</option>
                      <option value={4}>Men</option>
                      <option value={22}>-Dresses</option>
                      <option value={23}>-&nbsp;-Cocktail</option>
                      <option value={24}>-&nbsp;-Day</option>
                      <option value={25}>-&nbsp;-Evening</option>
                      <option value={26}>-&nbsp;-Sports</option>
                      <option value={3}>Women</option>
                      <option value={5}>-New Arrivals</option>
                      <option value={7}>-&nbsp;-Shirts</option>
                      <option value={8}>-&nbsp;-Shirts &amp; Tops</option>
                      <option value={9}>-&nbsp;-Sweaters</option>
                      <option value={16}>-&nbsp;-Outerwear</option>
                      <option value={52}>-&nbsp;-Bottoms</option>
                      <option value={188}>-&nbsp;-Shoes</option>
                      <option value={6}>-Outerwear</option>
                      <option value={10}>-&nbsp;-Jackets</option>
                      <option value={11}>-&nbsp;-Coats</option>
                      <option value={12}>-&nbsp;-Blazers</option>
                      <option value={49}>-&nbsp;-Vests</option>
                      <option value={50}>-&nbsp;-Vests New Bags</option>
                      <option value={189}>-&nbsp;-Sweaters</option>
                      <option value={148}>-Accessories</option>
                      <option value={149}>-&nbsp;-Tights &amp; Socks</option>
                      <option value={150}>-&nbsp;-Undergarments</option>
                      <option value={151}>-&nbsp;-Sunglasses</option>
                      <option value={152}>-&nbsp;-Watches</option>
                      <option value={153}>-&nbsp;-Cosmetics</option>
                      <option value={187}>-&nbsp;-Leather</option>
                      <option value={13}>Footwear</option>
                      <option value={32}>-Women’s Clothing</option>
                      <option value={33}>-&nbsp;-Cocktail</option>
                      <option value={34}>-&nbsp;-Day</option>
                      <option value={35}>-&nbsp;-Evening</option>
                      <option value={36}>-&nbsp;-Sports</option>
                      <option value={302}>-&nbsp;-Jeans</option>
                      <option value={27}>-Men’s Shoe</option>
                      <option value={28}>-&nbsp;-Sports</option>
                      <option value={29}>-&nbsp;-Run</option>
                      <option value={30}>-&nbsp;-Sandals</option>
                      <option value={31}>-&nbsp;-Books</option>
                      <option value={303}>-&nbsp;-T-Shirts</option>
                      <option value={304}>-Skirts</option>
                      <option value={305}>-&nbsp;-Leather</option>
                      <option value={306}>-&nbsp;-Bag &amp; Persess</option>
                      <option value={307}>-&nbsp;-Sunglasses</option>
                      <option value={308}>-&nbsp;-Sweaters</option>
                      <option value={309}>-&nbsp;-Sassuawear</option>
                      <option value={15}>Accessories</option> 
                    </select>
                    <button type="submit" title="Search" className="button"><span><span><i className="icon-magnifier icons" /></span></span></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="header-setting">
            <div className="settting-switcher">
              <div className="dropdown-toggle">
                <div className="icon-setting"><i className="icon-settings icons" /></div>
              </div>
              <div className="dropdown-switcher">
                <div className="top-links-alo">
                  <div className="header-top-link">
                    <ul className="links">
                      <li><a href="#" title="My Account">My Account</a></li>
                      <li><a href="/my-wish-list" title="My Wishlist">My Wishlist</a></li>
                      <li><a href="/compare" title="Compare Products">Compare Products</a></li>
                      <li><a href="#" title="My Cart">My Cart</a></li>
                      <li><a href="/checkout-step1" title="Checkout" className="top-link-checkout">Checkout</a></li>
                      <li className=" last"><a href="#" title="Log In">Log In</a></li>
                    </ul>
                  </div>
                </div>
                <div className="currency_top">
                  <div className="currency-switcher">
                    <div className="label-title">Currency</div>
                    <ul className="currency-switcher dropdown">
                      <li className="current">US DOLAR</li>
                      <li><a href="#">EUR</a></li>
                      <li><a href="#">GBP</a></li>
                      <li><a href="#">JPY</a></li>
                      <li><a href="#">CNY</a></li>
                    </ul>
                  </div>
                </div>
                <div className="top-form-language">
                  <div className="lang-switcher">
                    <div className="label-title">Language</div>
                    <ul className="language-switcher dropdown">
                      <li className="current"><span className="label dropdown-icon" style={{backgroundImage: 'url(/assets/images/flag_default.png)'}}>&nbsp;</span></li>
                      <li><a href="#"><span className="label dropdown-icon" style={{backgroundImage: 'url(/assets/images/flag_french.png)'}}>&nbsp;</span></a></li>
                      <li><a href="#"><span className="label dropdown-icon" style={{backgroundImage: 'url(/assets/images/flag_german.png)'}}>&nbsp;</span></a></li>
                      <li><a href="#"><span className="label dropdown-icon" style={{backgroundImage: 'url(/assets/images/flag_au.png)'}}>&nbsp;</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="miniCartWrap">
            <div className="mini-maincart" onMouseEnter={() => setCartOpen(true)} onMouseLeave={() => setCartOpen(false)}>
              <div className="cartSummary">
                <div className="crat-icon"> 
                  <span className="icon-handbag icons" />
                  <p className="mt-cart-title">My Cart</p>
                </div>
                <div className="cart-header"> 
                  <span className="zero">0 </span>
                  <p className="cart-tolatl"> 
                    <span className="toltal">Total:</span>
                    <span><span className="price">$0.00</span></span>
                  </p>
                </div>
              </div>
              <div className="mini-contentCart" style={{display: cartOpen ? 'block' : 'none'}}>
                <div className="block-content">
                  <p className="block-subtitle">Recently added item(s)</p>
                  <ol id="cart-sidebar" className="mini-products-list clearfix">
                    <li className="item clearfix">
                      <div className="cart-content-top">
                        <a href="#" className="product-image"><img src="http://placehold.it/60x75" width={60} height={77} alt="Brown Arrows Cushion" /></a>
                        <div className="product-details">
                          <p className="product-name"><a href="#">Brown Arrows Cushion</a></p>
                          <strong>1</strong> x <span className="price">$229.00</span>
                        </div>
                      </div>
                      <div className="cart-content-bottom">
                        <div className="clearfix"> <a href="#" title="Edit item" className="btn-edit"><i className="fa fa-pencil-square-o" /></a> <a href="#" title="Remove" className="btn-remove btn-remove2"><i className="icon-close icons" /></a></div>
                      </div>
                    </li>
                    <li className="item clearfix">
                      <div className="cart-content-top">
                        <a href="#" title="Peace Pot Broochea" className="product-image"><img src="http://placehold.it/60x75" width={60} height={77} alt="Peace Pot Broochea" /></a>
                        <div className="product-details">
                          <p className="product-name"><a href="#">Peace Pot Broochea</a></p>
                          <strong>1</strong> x <span className="price">$229.00</span>
                        </div>
                      </div>
                      <div className="cart-content-bottom">
                        <div className="clearfix"> <a href="#" title="Edit item" className="btn-edit"><i className="fa fa-pencil-square-o" /></a> <a href="#" title="Remove" className="btn-remove btn-remove2"><i className="icon-close icons" /></a></div>
                      </div>
                    </li>
                    <li className="item clearfix">
                      <div className="cart-content-top">
                        <a href="#" title="Rocha Sleeve Sweater" className="product-image"><img src="http://placehold.it/60x75" width={60} height={77} alt="Rocha Sleeve Sweater" /></a>
                        <div className="product-details">
                          <p className="product-name"><a href="#">Rocha Sleeve Sweater</a></p>
                          <strong>1</strong> x <span className="price">$229.00</span>
                        </div>
                      </div>
                      <div className="cart-content-bottom">
                        <div className="clearfix"> <a href="#" title="Edit item" className="btn-edit"><i className="fa fa-pencil-square-o" /></a> <a href="#" title="Remove" className="btn-remove btn-remove2"><i className="icon-close icons" /></a></div>
                      </div>
                    </li>
                  </ol>
                  <p className="subtotal"> <span className="label">Subtotal:</span> <span className="price">$687.00</span></p>
                  <div className="actions"> <a href="#" className="view-cart"> View cart </a> <a href="/checkout-step1">Checkout</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-setting hidden-sm hidden-xs">
            <div className="settting-switcher">
              <div className="dropdown-toggle">
                <div className="icon-setting">
                  <i className="icon-arrow-up icons" />
                </div>
              </div>
              <div className="dropdown-switcher dropdown-full">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <div className="collapsible top-dropdown1">
                        <h3 className="block-title heading">About Abani</h3>
                        <div className="block1 dropdown1 block-content-statick">
                          <p>Abani store where shopping is great for you to win trust, where you can reach passion shopping without having go to the store. The items provided as fashion, Computer, Book, Furniture...</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <div className="collapsible top-dropdown2">
                        <h3 className="block-title heading">Recent News</h3>
                        <div className="block2 dropdown2 block-content-statick">
                          <ul>
                            <li className="recent first">
                              <div className="recent-left">
                                <a href="#"><img className="img-responsive" alt="Recent News" src="http://placehold.it/60x60/ffffff" /></a>
                              </div>
                              <div className="recent-right"><p className="no-margin">Facilisis nifelis orci varius tellus nucorci</p></div>
                            </li>
                            <li className="recent">
                              <div className="recent-left">
                                <a href="#"><img className="img-responsive" alt="Recent News" src="http://placehold.it/60x60/ffffff" /></a>
                              </div>
                              <div className="recent-right"><p className="no-margin">Curabitur blandit aliquam consectetur aenean</p></div>
                            </li>
                            <li className="recent lasrt">
                              <div className="recent-left">
                                <a href="#"><img className="img-responsive" alt="Recent News" src="http://placehold.it/60x60/ffffff" /></a>
                              </div>
                              <div className="recent-right"><p className="no-margin">Cras ultricies ligula semagna dictum porta</p></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <div className="collapsible top-dropdown3">
                        <h3 className="block-title heading">Get in Touch</h3>
                        <div className="block3 dropdown3 block-content-statick">
                          <ul>
                            <li className="feature-icon first">
                              <span className="icon-pointer icons">
                                <span className="hidden">hidden</span>
                              </span>
                              <p className="no-margin">Any Street, 126BM RosiTower Newyork, USA</p>
                            </li>
                            <li className="feature-icon">
                              <span className="icon-envelope-open icons"><span className="hidden">hidden</span></span>
                              <p><span>Email: </span>suport@nouthemes.com</p>
                            </li>
                            <li className="feature-icon">
                              <span className="icon-call-in icons"><span className="hidden">hidden</span></span>
                              <p><span>Phone: </span>+84 912. 345. 678</p>
                            </li>
                            <li className="feature-icon">
                              <span className="icon-printer icons">
                                <span className="hidden">hidden</span>
                              </span>
                              <p><span>Phone: </span>+84 912. 345. 666</p>
                            </li>
                            <li className="feature-icon">
                              <span className="icon-link icons">
                                <span className="hidden">hidden</span>
                              </span>
                              <p><a href="#">http://domainname.com</a></p>
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
  </div>
</>
  )
}
