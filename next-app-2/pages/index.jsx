import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

const dummy_meetups = [
  {
    id: 1,
    image:
      "https://a.cdn-hotels.com/gdcs/production94/d1197/e5ff975b-37ba-462c-93ce-d668467f5428.jpg",
    title: "Vuk",
    address: "Cvijiceva 4",
    description: "This is a first meetup",
  },
  {
    id: 2,
    image:
      "https://www.sncf-connect.com/assets/styles/ratio_2_1_max_width_961/public/media/2021-06/vue-sur-paris-depuis-la-tour-montparnasse.jpg?h=ce8c2c19&itok=Ru2ysUYF",
    title: "Aca",
    address: "Cvijiceva 8",
    description: "This is a second meetup",
  },
];

export default function Home() {
  return <MeetupList meetups={dummy_meetups} />;
}
