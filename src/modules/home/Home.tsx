import { useLoaderInstance } from "@tanstack/react-loaders";

export const Home = () => {
  const aboutLoaderInstance = useLoaderInstance({ key: "home" });
  const text = aboutLoaderInstance.state.data;

  return (
    <div>
      <h3>Welcome Home!</h3>
      <p>{text}</p>
    </div>
  );
};
