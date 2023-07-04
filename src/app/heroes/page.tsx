import Image from "next/image";
import { Container } from "@/components/container";
import { heroList } from "@/@fake_db/heroes";

import "./style.css";

export default () => {
    return (
        <div className="heroes-container">
            <div className="section h-screen over-hide">
                <div className="parallax" style={{ backgroundImage: 'url(assets/img/heroes-bg.jpg)', backgroundPosition: '50% -50px', filter: 'grayscale(.5)' }}></div>
                <div className="grey-fade-over"></div>
                <div className="mt-[130px] my-[100px] mx-[100px]">
                    <Container className="container h-[750px]" title="Heroes">
                        {
                            heroList.map((item, index) => (
                                <Image key={index} src={item.src} width={200} height={200} alt="" />
                            ))
                        }
                    </Container>
                </div>
            </div>
        </div>
    )
}