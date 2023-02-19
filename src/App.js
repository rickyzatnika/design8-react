
import { BrowserRouter as Router, } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Container from "./components/Container";
import BackSound from "./components/Backsound";

function App() {

  return (
    <>
      <Container>
        <BackSound />
        <Router>
          <AnimatedRoutes />
        </Router>
      </Container>
    </>
  );
}

export default App;
