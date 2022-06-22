import { Redirect } from "react-router-dom";

export const Dashboard = ({ authenticated }) => {
  console.log(authenticated);
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return <div>Dashboard</div>;
};
