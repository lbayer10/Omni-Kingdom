import "./style.css";

interface CarouselProps {
    images: string[];
}

export const Carousel = ({ images = [] }: CarouselProps) => {
    return (
        <section className="carousel" aria-label="Gallery">
            <div className="carousel-corner carousel-corner-top-left"></div>
            <div className="carousel-corner carousel-corner-top-right"></div>
            <div className="carousel-corner carousel-corner-bottom-left"></div>
            <div className="carousel-corner carousel-corner-bottom-right"></div>
            <div className="carousel-border carousel-border-top"></div>
            <div className="carousel-border carousel-border-right"></div>
            <div className="carousel-border carousel-border-bottom"></div>
            <div className="carousel-border carousel-border-left"></div>

            <ol className="carousel_viewport">
                {images.map((item, index) => (
                    <li
                        key={`carousel_slide${index}`}
                        id={`carousel_slide${index}`}
                        tabIndex={0}
                        className="carousel_slide"
                        style={{backgroundImage: `url(${item})`}}
                    >
                        <div className="carousel_snapper">
                            <a
                                href={`#carousel_slide${index === 0 ? images.length - 1 : index - 1}`}
                                className="carousel_prev"
                            >
                                Go to last slide
                            </a>
                            <a
                                href={`#carousel_slide${index === images.length - 1 ? 0 : index + 1}`}
                                className="carousel_next"
                            >
                                Go to next slide
                            </a>
                        </div>
                        <img src={item} alt={`Slide ${index + 1}`} loading="lazy" />
                    </li>
                ))}
            </ol>
            <aside className="carousel_navigation">
                <ol className="carousel_navigation-list">
                    {images.map((item, index) => (
                        <li key={`carousel_nav_${index}`} className="carousel_navigation-item">
                            <a
                                href={`#carousel_slide${index}`}
                                className="carousel_navigation-button"
                            >
                                Go to slide {index + 1}
                            </a>
                        </li>
                    ))}
                </ol>
            </aside>
        </section>
    );
};