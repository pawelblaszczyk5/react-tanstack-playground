import { homeRoute } from "./route-config";

export const Home = () => {
  const text = homeRoute.useLoader();

  return (
    <div>
      <h3>Welcome Home!</h3>
      <p>{text}</p>
    </div>
  );
};
