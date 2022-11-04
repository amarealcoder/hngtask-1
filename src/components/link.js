import { Anchor } from "./anchor";
import { Footer } from "./footer";
import Header from "./header";
import { linksData } from './linksData';
import { Socials } from "./socials";

export const Link = () => {
    
    return (
      <section>
        <Header/>
        {linksData.map((anchor) => (
          <Anchor key={anchor.id} subtext={anchor.subtext} link={anchor.link} id={anchor.id} target={anchor.target} name={anchor.name}/>
        ))}
        <Socials/>
        <Footer />
      </section>
    );
}