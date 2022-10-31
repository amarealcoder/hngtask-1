import { Anchor } from "./anchor";
import { linksData } from './linksData';

export const Link = () => {
    
    return (
      <section>
        {linksData.map((anchor) => (
          <Anchor subtext={anchor.subtext} link={anchor.link} id={anchor.id} target={anchor.target} name={anchor.name}/>
        ))}
      </section>
    );
}