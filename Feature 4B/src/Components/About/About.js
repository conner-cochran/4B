import { useNavigate } from "react-router-dom"; // useHistory
//when user clicks on About section
export default function About() {
  const history = useNavigate();

  const buttonHandler = () => {
    history("/Recipe");
  };
  return (
    <section>
      <h1>Welcome to the About component</h1>
      <p>This is the About section</p>
      <button onClick={buttonHandler}>Home</button>
    </section>
  );
}
