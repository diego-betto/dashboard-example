import dati from '../data/squadre.json'

/*const dati = [
    {
        nome: 'Squadra 1',
        nGiocatori: 24,
        vRosa: 500
    },
    {
        nome: 'Squadra 2',
        nGiocatori: 26,
        vRosa: 600
    },
    {
        nome: 'Squadra 3',
        nGiocatori: 25,
        vRosa: 200
    }
];
*/

const Squadre = () => {
    return (
        <div>
            <h1>Squadre</h1>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Azioni</th>
                        <th>Nome</th>
                        <th>N. Giocatori</th>
                        <th>V. Rosa</th>
                        <th>Punti</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        dati.map(squadra => <tr>
                        <td><input type="checkbox" /></td>
                        <td>{squadra.nome}</td>
                        <td>{squadra.nGiocatori}</td>
                        <td>{squadra.vRosa}</td>
                        <td>{squadra.punti}</td>
                    </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
}

export default Squadre;