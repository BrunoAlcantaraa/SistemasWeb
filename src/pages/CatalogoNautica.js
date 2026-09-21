import { Link } from 'react-router-dom';
import CardProduto from '../components/CardProduto';
import motor60 from '../assets/motor-60.png';

// Sem "preco", o card mostra "Sob consulta"
const produtos = [
    {
        nome: 'Yamaha F60',
        imagem: motor60,
        preco: 48999,
        detalhes: [
            { label: 'Tipo', valor: 'Motor de popa' },
            { label: 'Marca', valor: 'Yamaha' },
            { label: 'Potência', valor: '60 HP' },
            { label: 'Ciclo', valor: '4 tempos' },
        ],
    },
];

function CatalogoNautica() {
    return (
        <section>
            <Link to="/catalogo" className="text-blue-600 hover:underline">&larr; Voltar ao catálogo</Link>

            <h1 className="text-4xl font-bold text-zinc-900 mt-4 mb-2">Catálogo Náutico</h1>
            <p className="text-lg text-zinc-600 mb-10">Confira nossos motores e embarcações disponíveis.</p>

            {produtos.length > 0 ? (
                <div className="grid gap-8">
                    {produtos.map((produto) => (
                        <CardProduto key={produto.nome} produto={produto} />
                    ))}
                </div>
            ) : (
                <p className="text-zinc-500">Em breve novidades por aqui.</p>
            )}
        </section>
    );
}

export default CatalogoNautica;
