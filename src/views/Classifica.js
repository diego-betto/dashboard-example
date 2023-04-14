import { useState } from 'react';
import dati from '../data/squadre.json'

const Classifica = () => {

    const [ordinamento, setOrdinamento] = useState(true)

    return (
        <div>
            <h1>Classifica</h1>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Azioni</th>
                        <th>Nome</th>
                        <th>N. Giocatori</th>
                        <th>V. Rosa</th>
                        <th onClick={() => {setOrdinamento(!ordinamento)}}>Punti</th>
                        <th>Indice</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        dati
                        .sort((a, b) => (b.punti - a.punti) * (ordinamento ? 1 : -1))
                        .map((squadra, indice) => <tr 
                            className={
                                ordinamento && indice < 3 || 
                                !ordinamento && (indice >= dati.length - 3) 
                                    ? 'table-primary'
                                    : ''
                            }
                        >
                            <td><input type="checkbox" /></td>
                            <td>{squadra.nome}</td>
                            <td>{squadra.nGiocatori}</td>
                            <td>{squadra.vRosa}</td>
                            <td>{squadra.punti}</td>
                            <td>{indice}</td>
                    </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
}

export default Classifica;