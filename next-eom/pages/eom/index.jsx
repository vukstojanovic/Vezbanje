import styles from "../../styles/Eom.module.css";

export default function Eom({ employee }) {
  console.log(employee);
  return (
    <div className={styles["main"]}>
      <h1 className={styles["eom-heading"]}>Employee of the month</h1>
      <div className={styles["eom-page"]}>
        <h3>{employee.name}</h3>
        <h5>{employee.position}</h5>
        <img src={employee.image} alt="employee-image" />
        <p>{employee.description}</p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );
  const employee = await response.json();
  return {
    props: {
      employee,
    },
  };
}
