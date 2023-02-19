
import { BrowserRouter as Router, } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Container from "./components/Container";


function App() {

  return (
    <>
      <Container>

        <Router>
          <AnimatedRoutes />
        </Router>
      </Container>
    </>
  );
}

export default App;
