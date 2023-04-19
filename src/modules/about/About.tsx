import { useAction } from "@tanstack/react-actions";
import { aboutRoute } from "./route-config";

export const About = () => {
  const randomNumber = aboutRoute.useLoader();
  const mutateRandomNumberAction = useAction({ key: "mutateRandomNumber" });

  return (
    <div>
      <h3>Hello from About</h3>
      <p>{randomNumber}</p>
      <button onClick={mutateRandomNumberAction.submit}>Mutate</button>
    </div>
  );
};
