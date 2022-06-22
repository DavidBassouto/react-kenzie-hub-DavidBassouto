import { Redirect } from "react-router-dom";

export const Dashboard = ({ authenticated }) => {
  console.log(authenticated);
  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return <div>Dashboard</div>;
};
