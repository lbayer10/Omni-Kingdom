import { HeroCard } from "./HeroCard";
import { heroList } from "@/@fake_db/heroes";
import "./style.css";

export const HeroesContainer = () => {
    return (
        <div className="heroes-cards-container">
            {
                heroList.map((item, index) => (
                    <HeroCard key={index} img={item.src} name={item.name} />
                ))
            }
        </div>
    )
}