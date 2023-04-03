import { useAction } from "@tanstack/react-actions";
import { useLoaderInstance } from "@tanstack/react-loaders";

export const About = () => {
  const aboutLoaderInstance = useLoaderInstance({ key: "about" });
  const mutateRandomNumberAction = useAction({ key: "mutateRandomNumber" });
  const randomNumber = aboutLoaderInstance.state.data;

  return (
    <div>
      <h3>Hello from About</h3>
      <p>{randomNumber}</p>
      <button onClick={mutateRandomNumberAction.submit}>Mutate</button>
    </div>
  );
};
