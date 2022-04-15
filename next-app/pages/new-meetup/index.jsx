import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import apiInstance from "../../axios";
import { useRouter } from "next/router";

export default function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await apiInstance.post("/new-meetup", enteredMeetupData);
    // const data = await response.json();
    const data = response.data;
    console.log(data);
    router.push("/");
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
