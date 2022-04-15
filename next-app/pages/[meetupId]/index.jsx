import { useRouter } from "next/router";
import { Fragment } from "react";

export default function MeetupIdPage(props) {
  const { title, address } = props.meetupData;
  const router = useRouter();
  return (
    <Fragment>
      <h1>MeetupId page</h1>
      <h2>{title}</h2>
      <h3>{address}</h3>
    </Fragment>
  );
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "1",
        },
      },
      {
        params: {
          meetupId: "2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        title: "Some title",
        address: "Cvijiceva br. 4",
      },
    },
  };
}
