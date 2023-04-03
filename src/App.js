import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <Container>
      <Header title="Przelicznik walut" />
      <Form />
      <Footer />
    </Container>
  );
}

export default App;