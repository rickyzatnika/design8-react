
import { BrowserRouter as Router, } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Container from "./components/Container";
import { Helmet } from "react-helmet";


function App() {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Undangan pernikahan digital, Mayang dan Restu. Powered By Webhouse_Invitation" />
        <title>The Wedding Of Restu & Mayang</title>
      </Helmet>
      <Container>
        <Router>
          <AnimatedRoutes />
        </Router>
      </Container>
    </>
  );
}

export default App;
