import "./style.css";

export default () => {
    return (
        <div className="maps-container">
            <div className="section h-screen over-hide">
                <div className="parallax" style={{ backgroundImage: 'url(assets/img/maps-bg.jpg)', backgroundPosition: '50% -50px', filter: 'grayscale(.5)' }}></div>
                <div className="grey-fade-over"></div>
            </div>
        </div>
    )
}