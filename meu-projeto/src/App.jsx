import { useState } from 'react'
import Contador from './components/Contador'
import './App.css'

function App() {
  const [minimo, setMinimo] = useState('0')
  const [maximo, setMaximo] = useState('5')
  const [mostrarContador, setMostrarContador] = useState(false)

  const valorMinimo = parseInt(minimo)
  const valorMaximo = parseInt(maximo)

  function criarContador() {
    if (Number.isNaN(valorMinimo) || Number.isNaN(valorMaximo)) {
      alert('Preencha os valores mínimo e máximo.')
      return
    }

    if (valorMinimo < 0 || valorMaximo < 0) {
      alert('Os valores mínimo e máximo não podem ser negativos.')
      return
    }

    if (valorMinimo >= valorMaximo) {
      alert('O valor mínimo deve ser menor que o valor máximo.')
      return
    }

    setMostrarContador(true)
  }

  return (
    <>
      <h1>Contador</h1>

      {mostrarContador ? (
        <>
          <Contador minimo={valorMinimo} maximo={valorMaximo} />
          <button className="largo voltar" onClick={() => setMostrarContador(false)}>Voltar</button>
        </>
      ) : (
        <>
          <div className="campos">
            <label>
              Mínimo
              <input
                type="number"
                value={minimo}
                onChange={(e) => setMinimo(e.target.value)}
              />
            </label>

            <label>
              Máximo
              <input
                type="number"
                value={maximo}
                onChange={(e) => setMaximo(e.target.value)}
              />
            </label>
          </div>

          <button className="largo" onClick={criarContador}>
            Criar Contador
          </button>
        </>
      )}
    </>
  )
}

export default App
