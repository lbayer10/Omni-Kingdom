import Image from "next/image";
import { Container } from "@/components/container";
import { HeroesContainer } from "@/containers/heroes";

import "./style.css";

export default () => {
    return (
        <div className="heroes-container">
            <div className="section h-screen">
                <div className="parallax" style={{ backgroundImage: 'url(assets/img/heroes-bg.jpg)', backgroundPosition: '50% -50px', filter: 'grayscale(.5)' }}></div>
                <div className="grey-fade-over grey-fade-over-more"></div>
                <div className="pt-[130px]">
                    <Container className="" title="Heroes">
                        <HeroesContainer />
                    </Container>
                </div>
            </div>
        </div>
    )
}