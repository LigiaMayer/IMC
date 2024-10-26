import Cabecalho from "./components/Cabecalho";
import Calculadora from "./components/Calculadora";

function App() {

  return (
    <>
      <div className="container">
        <Cabecalho />
        <Calculadora />

        <footer className="footer">
          Criado  por Ligia 
          </footer>
      </div>
    </>
  )
}

export default App;