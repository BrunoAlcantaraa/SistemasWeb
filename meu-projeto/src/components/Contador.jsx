
import { useState } from 'react'
import './Contador.css'

function Contador({minimo, maximo}) {
    const [count, setCount] = useState(minimo)

    function incrementar() {
        if (count < maximo) {
            setCount(count + 1)
        } else {
            alert('O contador atingiu o valor máximo.')
        }
    }

    function decrementar() {
        if (count > minimo) {
            setCount(count - 1)
        } else {
            alert('O contador atingiu o valor mínimo.')
        }
    }

    const percentual = ((count - minimo) / (maximo - minimo)) * 100

    return (
        <>
            <p className="contagem">
                Contagem
                <strong>{count}</strong>
            </p>

            <div className="timeline">
                <div className="timeline-track">
                    <div
                        className="timeline-preenchimento"
                        style={{ width: `${percentual}%` }}
                    />
                    <div
                        className="timeline-marker"
                        style={{ left: `${percentual}%` }}
                    />
                </div>
                <div className="timeline-labels">
                    <span>{minimo}</span>
                    <span>{maximo}</span>
                </div>
            </div>

            <div className="botoes">
                <button onClick={decrementar}>Decrementar</button>
                <button className="secundario" onClick={() => setCount(minimo)}>Zerar</button>
                <button onClick={incrementar}>Incrementar</button>
            </div>
        </>
    )
}

export default Contador
