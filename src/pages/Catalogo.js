import { Link } from 'react-router-dom';
import imgMotos from '../assets/moto.jpg';
import imgNautica from '../assets/nautica.png';

const categorias = [
    {
        to: '/catalogo/motocicletas',
        titulo: 'Motocicletas',
        descricao: 'Esportivas, nakeds e muito mais.',
        imagem: imgMotos,
    },
    {
        to: '/catalogo/nautica',
        titulo: 'Náutica',
        descricao: 'Jet skis, lanchas e embarcações.',
        imagem: imgNautica,
    },
];

function Catalogo() {
    return (
        <section>
            <h1 className="text-4xl font-bold text-zinc-900 mb-2">Catálogo</h1>
            <p className="text-lg text-zinc-600 mb-10">Escolha uma categoria.</p>

            <div className="grid gap-8 md:grid-cols-2">
                {categorias.map(({ to, titulo, descricao, imagem }) => (
                    <Link
                        key={to}
                        to={to}
                        className="group relative h-80 rounded-2xl overflow-hidden shadow-lg flex items-end"
                    >
                        {imagem ? (
                            <img
                                src={imagem}
                                alt={titulo}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-900 transition-transform duration-500 group-hover:scale-105" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                        <div className="relative z-10 p-8 text-white">
                            <h2 className="text-3xl font-bold mb-1">{titulo}</h2>
                            <p className="text-zinc-200">{descricao}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Catalogo;
