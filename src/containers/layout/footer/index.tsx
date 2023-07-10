export const Footer = () => {
    return (
        <div className="section padding-top background-dark-2 over-hide footer-1 dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Home concepts</h6>
                        <ul className="list-style">
                            <li><a href="digital-agency.html">Digital Agency</a></li>
                            <li><a href="design-studio.html">Design Studio</a></li>
                            <li><a href="app-landing.html">App Landing</a></li>
                            <li><a href="personal-portfolio.html">Personal Portfolio</a></li>
                            <li><a href="corporate.html">Home Corporate</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mt-4 mt-md-0">
                        <h6>Picked Pages</h6>
                        <ul className="list-style">
                            <li><a href="portfolio-grid-3col.html">Portfolio Grid</a></li>
                            <li><a href="portfolio-masonry-3col.html">Portfolio Masonry</a></li>
                            <li><a href="blog-grid.html">Blog Grid</a></li>
                            <li><a href="careers-listing.html">Careers Listing</a></li>
                            <li><a href="contact-map.html">Contact Map</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mt-4 mt-md-0 logo-footer-100">
                        {/* <Image width={100} height={100} src="/img/logo-light.png" alt="" className="mb-5" /> */}
                        <div className="separator-wrap">
                            <span className="separator"><span className="separator-line dashed"></span></span>
                        </div>
                        <ul className="list-style mt-3 mb-3">
                            <li><i className="fa fa-envelope-o"></i><a href="#">support@omnikingdom.com</a></li>
                            <li><i className="fa fa-phone"></i><a href="#">+41-34-9653-3246</a></li>
                            <li><i className="fa fa-skype"></i><a href="#">OmniKingdom</a></li>
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
                        <p>© 2023 OmniKingdom. Powerd with by KAL</p>
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
    )
}