import Image from "next/image";
import { Card } from "@/components/card";
import { Divider } from "@/components/divider";
import { Typography } from "@/components/typography";
import { heroCard } from "@/@fake_db/home";

import "./style.css";

const { Title, Paragraph } = Typography();
const { HeroCard } = Card();

export default function Home() {
    return (
        <main>
	
            {/* <!-- Nav and Logo
            ================================================== --> */}

            <div id="menu-wrap" className="cbp-af-header black-menu-background-1st-trans menu-fixed-padding-small menu-shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">	
                            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse bg-faded">
                                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavMenuMain" aria-controls="navbarNavMenuMain" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <a className="navbar-brand" href="index.html">
                                    {/* <Image width={100} height={100} src="/img/logo-light.png" alt="" className="" /> */}
                                </a>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarNavMenuMain">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a href="#home" className="nav-link">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#about" className="nav-link">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#testimonials" className="nav-link">Testimonials</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#services" className="nav-link">Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#pricing" className="nav-link">Pricing</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#support" className="nav-link">Support</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link colored-prim" href="#" id="navbarDropdownMenuLink-lng" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                USA
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink-lng">
                                                <a className="dropdown-item" href="#">Serbian</a>
                                                <a className="dropdown-item" href="#">French</a>
                                                <a className="dropdown-item" href="#">Spanish</a>
                                            </div>
                                        </li>
                                        <li className="nav-item icons-item-menu">
                                            <a className="nav-link ml-4" href="#"><i className="fa fa-heart"></i></a>
                                        </li>
                                        <li className="nav-item dropdown icons-item-menu">
                                            <a className="nav-link" href="#" id="navbarDropdownMenuLink-shop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fa fa-shopping-bag"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink-shop">
                                                <div className="drop-shop-block">
                                                    <span className="close"></span>
                                                    {/* <Image width={100} height={100} src="/img/shop1.jpg" alt="" className="rounded" /> */}
                                                    <h6>Shop item one</h6>
                                                    <div className="clearfix"></div>
                                                    <p>2 x $47.00</p>
                                                    <div className="clearfix"></div>
                                                    <div className="dropdown-divider"></div>
                                                </div>
                                                <div className="drop-shop-block">
                                                    <span className="close"></span>	
                                                    {/* <Image width={100} height={100} src="/img/shop2.jpg" alt="" className="rounded" /> */}
                                                    <h6>Shop item two</h6>
                                                    <div className="clearfix"></div>
                                                    <p>1 x $72.00</p>
                                                    <div className="clearfix"></div>
                                                    <div className="dropdown-divider"></div>
                                                </div>
                                                <div className="clearfix"></div>
                                                <p><span>Subtotal:</span> <strong>$166.00</strong></p>
                                                <div className="clearfix"></div>
                                                <div className="dropdown-divider"></div>
                                                <button className="btn btn-default btn-sm float-left">view cart</button>
                                                <button className="btn btn-primary btn-sm float-right">checkout</button>
                                                <div className="clearfix"></div>
                                            </div>
                                        </li>
                                        <li className="nav-item icons-item-menu modal-search">
                                            <a className="nav-link" href="#" data-toggle="modal" data-target="#Modal-search"><i className="fa fa-search"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>		
                        </div>
                    </div>	
                </div>		
            </div>


            {/* <!-- Search --> */}
            <div className="modal fade default search-modal" id="Modal-search" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header justify-content-end">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="hero-center-wrap move-top">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-md-6">
                                            {/* <input type="search" value="" placeholder="Search" className="form-control" />
                                            <button className="btn btn-primary btn-icon btn-round" type="submit" value="search">
                                                <i className="fa fa-search"></i>
                                            </button> */}
                                        </div>
                                    </div>	
                                </div>	
                            </div>	
                        </div>
                    </div>
                </div>
            </div>







            {/* <!-- Primary Page Layout
            ================================================== --> */}

            <div className="section" id="home">

                {/* <!-- Hero Slider Block
                ================================================== --> */}
                
                <div className="section padding-top-1st padding-bottom over-hide">
                    <div className="parallax" style={{ backgroundImage: 'img/parallax-hero-12.jpg' }}></div>
                    <div className="grey-fade-over"></div>
                    <div className="container parallax-fade-top">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="video-section">
                                    <figure className="vimeo rounded-2 img-raised over-hide"> 
                                        <a href="https://player.vimeo.com/video/219627581">
                                            {/* <Image width={100} height={100} src="/img/video-4.jpg" alt="image" className="rounded-2 over-hide" /> */}
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-lg-6 app-hero-text text-center text-lg-left pt-5 pt-lg-0 pl-lg-5 mt-xl-4">	
                                <h2 className="color-white">Give your startup<br />a jump start</h2>
                                <p className="mt-4 mb-5">beautifully carefully designed</p>	
                                <a href="#scroll-top" className="btn btn-primary btn-simple btn-round btn-long scroll" >discover more</a>
                            </div>
                        </div>	
                    </div>	
                </div>

                {/* <!-- Call To Action Block
                ================================================== --> */}
                <Divider />

                <div className="home-overview">
                    <div className="section padding-top-bottom-smaller" id="scroll-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">	
                                    <div className="call-box-3 text-center text-md-center">
                                        <Title className="mt-[70px] pb-4" align="center">Now we've come Omni Kingdom</Title>
                                        <Paragraph className="w-[90%] m-auto" align="center">The Great War had been raging for years. Five tribes had been locked in battle, each determined to prove their superiority. The Aketi, the strongest and most experienced fighters, had been the first to start the war. For weeks, the five tribes had fought in a brutal war, each using every tactic they could think of. But in the end, it was the Aketi who emerged as the victors. The other tribes were forced to accept their rule, and the Great War was finally over. Though the war had ended, the legacy of it remained. The scars of battle could still be seen throughout the land, as a reminder of the sacrifices made by all the tribes. But the war had also brought the five tribes together, and in the end, that was the greatest victory of all.</Paragraph>
                                    </div>
                                </div>
                            </div>	
                        </div>		
                    </div>

                    {/* <!-- Separator Line
                    ================================================== --> */}
                    
                    <div className="section pt-4">
                        <div className="container">	
                            <div className="row">
                                <div className="col-md-12">	
                                    <div className="home-separator"></div>
                                </div>
                            </div>
                        </div>		
                    </div>

                    {/* <!-- Services Block
                    ================================================== --> */}
                        
                    <div className="section py-[80px] over-hide">
                        <div className="container">
                            <Title className="pb-5" align="center">Choose your hero</Title>

                            <div className="row">
                                {
                                    heroCard.map((item, index) => (
                                        <div key={index} className="col-xs-12 col-md-6 col-lg-3" data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s">
                                            <HeroCard className="" content={item} />
                                        </div>
                                    ))
                                }
                            </div>	
                        </div>		
                    </div>
                </div>
                
                <Divider />
                
            </div>

            <div className="section" id="about">

                

                {/* <!-- Content With Images Block
                ================================================== --> */}
                
                <div className="section padding-top-bottom background-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                {/* <Image width={100} height={100} src="/img/content-1.jpg" alt="" className="img-fluid rounded img-raised" />	 */}
                            </div>
                            <div className="col-lg-1 col-md-12"></div>
                            <div className="col-lg-6 col-md-12 mt-5 mt-lg-0 mt-xl-5">	
                                <div className="main-title on-dark no-subtitle">
                                    <div className="main-subtitle-top mb-4">start your business</div>
                                    <h4 className="mb-0">We build brands!</h4>	
                                </div>
                                <p className="lead color-white mb-5">Some people think design means how it looks. But of course, if you dig deeper, it's really how it works. Design must reflect the practical and aesthetic in business but above all... good design must primarily serve people. Some people think design means how it looks.</p>
                                <a href="contact-map.html" className="btn btn-primary btn-simple btn-round btn-long">get in touch</a>
                            </div>
                        </div>	
                    </div>	
                </div>
                
            </div>

            <div className="section" id="testimonials">

                {/* <!-- Testimonials Block
                ================================================== --> */}
                    
                <div className="section padding-top-bottom background-white over-hide">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">		
                                <div className="main-title">
                                    <div className="main-subtitle-top mb-4">testimonials</div>
                                    <h4>Some of our clients saying about us.</h4>
                                    <div className="main-subtitle-bottom smaller mt-3">Built with passion & intuitiveness in mind. Funky is a masterclass piece of work presented to you.</div>	
                                </div>
                            </div>
                            <div className="col-lg-8 px-0">
                                <div id="owl-testimonials" className="owl-carousel owl-theme no-hidden">											 
                                    <div className="item">								 
                                        <div className="testimonials-box-1 bigger-img border-on-light">
                                            {/* <Image width={100} height={100}  src="/img/t1.jpg" alt="" /> */}
                                            <p className="mt-4 mb-5">Design must reflect the practical and aesthetic in business but above all... good design must primarily serve people.</p>
                                            <h6>Anna Furius</h6>
                                            <p><span>Alliance Motosport</span></p>
                                        </div>	
                                    </div>											
                                    <div className="item">						 
                                        <div className="testimonials-box-1 bigger-img border-on-light">
                                            {/* <Image width={100} height={100}  src="/img/t2.jpg" alt="" /> */}
                                            <p className="mt-4 mb-5">Design must reflect the practical and aesthetic in business but above all... good design must primarily serve people.</p>
                                            <h6>Alex Andrews</h6>
                                            <p><span>Creativity Media</span></p>
                                        </div>	
                                    </div>											
                                    <div className="item"> 						 
                                        <div className="testimonials-box-1 bigger-img border-on-light">
                                            {/* <Image width={100} height={100}  src="/img/t3.jpg" alt="" /> */}
                                            <p className="mt-4 mb-5">Design must reflect the practical and aesthetic in business but above all... good design must primarily serve people.</p>
                                            <h6>Frank Furius</h6>
                                            <p><span>Alliance Motosport</span></p>
                                        </div>	
                                    </div>												
                                    <div className="item"> 						 
                                        <div className="testimonials-box-1 bigger-img border-on-light">
                                            {/* <Image width={100} height={100}  src="/img/t4.jpg" alt="" /> */}
                                            <p className="mt-4 mb-5">Design must reflect the practical and aesthetic in business but above all... good design must primarily serve people.</p>
                                            <h6>Marco Kulis</h6>
                                            <p><span>Guide Magazin</span></p>
                                        </div>	
                                    </div>						
                                </div>
                            </div>
                        </div>	
                    </div>		
                </div>
                
            </div>

            <div className="section" id="services">

                {/* <!-- Half Blocks Grid
                ================================================== --> */}
                
                <div className="section background-grey over-hide">
                    <div className="container-fluid m-0 p-0 background-grey">
                        <div className="row">		
                            <div className="col-lg-4 row-in background-image-cover padding-top-bottom" style={{backgroundImage: 'img/parallax-6.jpg'}}>
                                <div className="grey-fade-over"></div>	
                            </div>
                            <div className="col-lg-8 row-in padding-top-bottom">	
                                <div className="section align-self-center text-left padding-on-grid-12">
                                    <div className="main-title no-subtitle">
                                        <div className="main-subtitle-top mb-4">unique and truly responsive</div>
                                        <h3 className="mb-0">Moving boundaries into digital solution!</h3>	
                                    </div>
                                    <p className="lead mb-5">Some people think design means how it looks. But of course, if you dig deeper, it's really how it works. Design must reflect the practical and aesthetic in business but above all... good design must primarily serve people. Some people think design means how it looks.</p>
                                    <a href="#pricing" className="btn btn-primary btn-simple btn-round btn-long scroll">our pricing</a>
                                </div>
                            </div>	
                        </div>	
                    </div>	
                </div>

                {/* <!-- Icons Block
                ================================================== --> */}
                
                <div className="section padding-top-bottom-small background-dark over-hide">
                    <div className="container">	
                        <div className="row">
                            <div className="col-md-4 col-lg-2">	
                                <div className="services-box-2 dark text-center">
                                    <i className="funky-ui-icon icon-Monitor-phone"></i>
                                    <p className="mt-3">Responsive</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-2 mt-4 mt-md-0">	
                                <div className="services-box-2 dark text-center">
                                    <i className="funky-ui-icon icon-Approved-Window"></i>
                                    <p className="mt-3">Perfect Design</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-2 mt-4 mt-md-0">	
                                <div className="services-box-2 dark text-center">
                                    <i className="funky-ui-icon icon-Duplicate-Window"></i>
                                    <p className="mt-3">Bootstrap 4</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-2 mt-4 mt-lg-0">	
                                <div className="services-box-2 dark text-center">
                                    <i className="funky-ui-icon icon-Downward"></i>
                                    <p className="mt-3">Free Updates</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-2 mt-4 mt-lg-0">	
                                <div className="services-box-2 dark text-center">
                                    <i className="funky-ui-icon icon-Layer-Forward"></i>
                                    <p className="mt-3">Modal Style</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-2 mt-4 mt-lg-0">	
                                <div className="services-box-2 dark text-center">
                                    <i className="funky-ui-icon icon-Support"></i>
                                    <p className="mt-3">Support</p>
                                </div>
                            </div>
                        </div>
                    </div>		
                </div>
                
            </div>

            <div className="section" id="pricing">

                {/* <!-- Pricing Block
                ================================================== --> */}
                    
                <div className="section padding-top-bottom background-grey over-hide" id="pricing">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">	
                                <div className="main-title text-center">
                                    <div className="main-subtitle-top mb-4">our pricing</div>
                                    <h3>From whiteboard sketches to pixel-perfect designs.</h3>
                                    <div className="main-subtitle-bottom mt-3">our numbers</div>	
                                </div>
                            </div>
                            <div className="clear"></div>
                            <div className="col-lg-4" data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s">
                                <div className="pricing p-xl-5 background-white text-center">
                                    <h5>Starter</h5>
                                    <div className="pricing-sub mb-4">billed annually or $12 month-to-month</div>
                                    <div className="pricing-price mt-3"><sup>$</sup>10</div>
                                    <div className="pricing-per mt-2">per month</div>
                                    <div className="pricing-line mt-4"></div>		
                                    <ul className="list-style mt-4">
                                        <li><i className="fa fa-check"></i>Up to 7 pages</li>
                                        <li><i className="fa fa-times grey"></i>Ecommerce</li>
                                    </ul>
                                    <button className="btn btn-primary mt-4" type="button">Order Now</button>	
                                </div>
                            </div>	
                            <div className="col-lg-4 mt-4 mt-lg-0" data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s">
                                <div className="pricing popular p-xl-5 background-white text-center">
                                    <div className="ribbon"><i className="funky-ui-icon icon-Ribbon-2"></i></div>
                                    <h5>Personal</h5>
                                    <div className="pricing-sub mb-4">billed annually or $20 month-to-month</div>
                                    <div className="pricing-price mt-3"><sup>$</sup>16</div>
                                    <div className="pricing-per mt-2">per month</div>
                                    <div className="pricing-line mt-4"></div>		
                                    <ul className="list-style mt-4">
                                        <li><i className="fa fa-check"></i>Up to 20 pages</li>
                                        <li><i className="fa fa-times grey"></i>Ecommerce</li>
                                    </ul>
                                    <button className="btn btn-primary mt-4" type="button">Order Now</button>	
                                </div>
                            </div>	
                            <div className="col-lg-4 mt-4 mt-lg-0" data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s">
                                <div className="pricing p-xl-5 background-white text-center">
                                    <h5>Ultimate</h5>
                                    <div className="pricing-sub mb-4">billed annually or $29 month-to-month</div>
                                    <div className="pricing-price mt-3"><sup>$</sup>24</div>
                                    <div className="pricing-per mt-2">per month</div>
                                    <div className="pricing-line mt-4"></div>		
                                    <ul className="list-style mt-4">
                                        <li><i className="fa fa-check"></i>Infinite pages</li>
                                        <li><i className="fa fa-check"></i>Ecommerce</li>
                                    </ul>
                                    <button className="btn btn-primary mt-4" type="button">Order Now</button>	
                                </div>
                            </div>
                        </div>	
                    </div>		
                </div>
                
            </div>

            <div className="section" id="support">

                {/* <!-- Support Block
                ================================================== --> */}
                    
                <div className="section padding-top background-white over-hide">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 hidden-sm-down" data-scroll-reveal="enter bottom move 80px over 1s after 0.2s">	
                                {/* <Image width={100} height={100} src="/img/woman.png" alt="" className="img-fluid" /> */}
                            </div>
                            <div className="col-md-1">	
                            </div>
                            <div className="col-md-7 mt-0 mt-lg-5 mb-5 mb-md-0">	
                                <div className="main-title text-left">
                                    <div className="main-subtitle-top mb-4">HELP & SUPPORT</div>
                                    <h4>24/7 Customer Care Team</h4>
                                    <div className="main-subtitle-bottom smaller mt-3">Some people think design means how it looks. But of course, if you dig deeper, it's really how it works.</div>	
                                </div>
                                <a href="contact-clean.html" className="btn btn-primary btn-simple btn-round btn-long">contact us</a>
                            </div>
                        </div>
                    </div>		
                </div>

                {/* <!-- Logos Block
                ================================================== --> */}
                    
                <div className="section padding-top-bottom-small background-dark over-hide">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                <a href="#">
                                    {/* <Image width={100} height={100}  src="/img/logos/white1.png" className="img-120 mx-auto" alt="" /> */}
                                </a>
                            </div>
                            <div className="col-md-2 mt-4 mt-md-0">
                                <a href="#">
                                    {/* <Image width={100} height={100}  src="/img/logos/white2.png" className="img-120 mx-auto" alt="" /> */}
                                </a>
                            </div>
                            <div className="col-md-2 mt-4 mt-md-0">
                                <a href="#">
                                    {/* <Image width={100} height={100}  src="/img/logos/white8.png" className="img-120 mx-auto" alt="" /> */}
                                </a>
                            </div>
                            <div className="col-md-2 mt-4 mt-md-0">
                                <a href="#">
                                    {/* <Image width={100} height={100}  src="/img/logos/white10.png" className="img-120 mx-auto" alt="" /> */}
                                </a>
                            </div>
                            <div className="col-md-2 mt-4 mt-md-0">
                                <a href="#">
                                    {/* <Image width={100} height={100}  src="/img/logos/white5.png" className="img-120 mx-auto" alt="" /> */}
                                </a>
                            </div>
                            <div className="col-md-2 mt-4 mt-md-0">
                                <a href="#">
                                    {/* <Image width={100} height={100}  src="/img/logos/white6.png" className="img-120 mx-auto" alt="" /> */}
                                </a>
                            </div>
                        </div>
                    </div>		
                </div>
                
            </div>

            {/* <!-- Footer Dark Block
            ================================================== --> */}

            <div className="section padding-top background-dark-2 over-hide footer-1 dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h6>Home concepts</h6>
                            <ul className="list-style">
                                <li><a href="digital-agency.html">Digital Agency</a></li>
                                <li><a href="design-studio.html">Design Studio</a></li>
                                <li><a href="app-landing.html">App Landing</a></li>
                                <li><a href="personal-portfolio.html">Personal Portfolio</a></li>
                                <li><a href="corporate.html">Home Corporate</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 mt-4 mt-md-0">
                            <h6>Picked Pages</h6>
                            <ul className="list-style">
                                <li><a href="portfolio-grid-3col.html">Portfolio Grid</a></li>
                                <li><a href="portfolio-masonry-3col.html">Portfolio Masonry</a></li>
                                <li><a href="blog-grid.html">Blog Grid</a></li>
                                <li><a href="careers-listing.html">Careers Listing</a></li>
                                <li><a href="contact-map.html">Contact Map</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 mt-4 mt-md-0">
                            <h6>Interesting</h6>
                            <ul className="list-style">
                                <li><a href="about-company.html">About</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="contact-modern.html">Contact</a></li>
                                <li><a href="shop-grid-sidebar.html">Shop</a></li>
                                <li><a href="create-account.html">Create Account</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 mt-4 mt-md-0 logo-footer-100">
                            {/* <Image width={100} height={100} src="/img/logo-light.png" alt="" className="mb-5" /> */}
                            <div className="separator-wrap">	
                                <span className="separator"><span className="separator-line dashed"></span></span>
                            </div>
                            <ul className="list-style mt-3 mb-3">
                                <li><i className="fa fa-envelope-o"></i><a href="#">info@funky.com</a></li>
                                <li><i className="fa fa-phone"></i><a href="#">+41-34-9653-3246</a></li>
                                <li><i className="fa fa-skype"></i><a href="#">FunkyOnSkype</a></li>
                            </ul>
                            <div className="separator-wrap">	
                                <span className="separator"><span className="separator-line dashed"></span></span>
                            </div>
                        </div>
                    </div>
                </div>	
                <div className="container scd-foot padding-top-small padding-bottom-smaller">
                    <div className="row">
                        <div className="col-md-6">
                            <p>© 2018 Funky. Powerd with <i className="fa fa-heart"></i> by <a href="https://themeforest.net/user/ig_design/portfolio?ref=IG_design" target="_blank">IG Design</a>!</p>
                        </div>
                        <div className="col-md-6">
                            <ul className="footer-social">
                                <li className="twitter">
                                    <a href="#">Tw</a>
                                </li>
                                <li className="facebook">
                                    <a href="#">Fb</a>
                                </li>
                                <li className="google">
                                    <a href="#">G+</a>
                                </li>
                                <li className="vimeo">
                                    <a href="#">Vm</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>	
            </div>


            <div className="scroll-to-top"><i className="fa fa-angle-up"></i></div>
        </main>
    )
}
