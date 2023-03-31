import { useLoaderInstance } from "@tanstack/react-loaders";

export const About = () => {
  const aboutLoaderInstance = useLoaderInstance({ key: "about" });
  const randomNumber = aboutLoaderInstance.state.data;

  return (
    <div>
      <h3>Hello from About</h3>
      <p>{randomNumber}</p>
    </div>
  );
};
