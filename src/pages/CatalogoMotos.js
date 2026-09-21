import { Link } from 'react-router-dom';
import CardProduto from '../components/CardProduto';
import imgTenere from '../assets/tenere-600.png';

const motos = [
    {
        nome: 'Yamaha Tenere 600',
        imagem: imgTenere,
        preco: 25000,
        detalhes: [
            { label: 'Marca', valor: 'Yamaha' },
            { label: 'Ano', valor: 2026 },
        ],
    },
];

function CatalogoMotos() {
    return (
        <section>
            <Link to="/catalogo" className="text-blue-600 hover:underline">&larr; Voltar ao catálogo</Link>

            <h1 className="text-4xl font-bold text-zinc-900 mt-4 mb-2">Catálogo de Motocicletas</h1>
            <p className="text-lg text-zinc-600 mb-10">Confira nossas motocicletas disponíveis.</p>

            <div className="grid gap-8">
                {motos.map((moto) => (
                    <CardProduto key={moto.nome} produto={moto} />
                ))}
            </div>
        </section>
    );
}

export default CatalogoMotos;
