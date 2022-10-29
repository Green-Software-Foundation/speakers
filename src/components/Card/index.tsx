import type { Speaker } from "../types";
import Styles from "./styles.module.css";
const Card = ({ url, location, image, name, position, company }: Speaker) => {
  return (
    <a href={url}>
      <div className={Styles.container}>
        <p className={Styles.location}>{location}</p>
        <img className={Styles.avatar} src={image} />
        <div>
          <h3 className={Styles.name}>{name}</h3>
          <p className={Styles.position}>{position}</p>
          <p className={Styles.company}>{company}</p>
        </div>
      </div>
    </a>
  );
};
export default Card;
