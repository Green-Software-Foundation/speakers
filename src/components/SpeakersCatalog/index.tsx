import { useState } from "react";
import Card from "../Card";
import type { Speaker } from "../types";
import Styles from "./styles.module.css";

type Props = {
  speakers: Speaker[];
};
const SpeakersCatalog = ({ speakers }: Props) => {
  const [speakerList, setSpeakerList] = useState(speakers);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSpeakerList(
      speakers.filter((speaker) => {
        return (
          speaker.name?.toLowerCase().includes(value.toLowerCase()) ||
          speaker.company?.toLowerCase().includes(value.toLowerCase()) ||
          speaker.location?.toLowerCase().includes(value.toLowerCase()) ||
          speaker.languages
            ?.join(", ")
            .toLowerCase()
            .includes(value.toLowerCase())
        );
      })
    );
  };

  return (
    <section className={Styles.container}>
      <h2 className={Styles.title}>SPEAKERS CATALOG</h2>
      <div>
        <div className={Styles.input_wrapper}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>

          <input
            type="text"
            placeholder="Speakers’ location, company, language,..."
            onChange={onSearch}
          />
        </div>
      </div>
      <div className={Styles.cards_wrapper}>
        {speakerList.map((speaker) => {
          if (speaker.url === undefined) return;
          return <Card key={speaker.name} {...speaker} image={speaker.image} />;
        })}
      </div>
      {/* <div className={Styles.btn_wrapper}>
        <button className="button outline">View All speakers</button>
      </div> */}
    </section>
  );
};
export default SpeakersCatalog;
