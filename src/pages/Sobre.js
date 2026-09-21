import imgEquipe from '../assets/equipe-gordo.png';

const servicos = [
    {
        titulo: 'Motos novas e seminovas',
        descricao: 'Yamaha 0 km e seminovas multimarcas, com opções para todos os estilos.',
    },
    {
        titulo: 'Oficina especializada',
        descricao: 'Mecânicos treinados e especializados cuidando da sua moto.',
    },
    {
        titulo: 'Leva e traz',
        descricao: 'Buscamos e entregamos sua moto para a revisão, sem você sair de casa.',
    },
    {
        titulo: 'Peças e revisões',
        descricao: 'Peças e revisões para manter sua moto sempre em dia.',
    },
];

const endereco = 'Rua Argentina, 1522 - Centro, Santa Helena';
const linkMapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco + ' - PR')}`;

function Sobre() {
    return (
        <section className="space-y-16">
            <div className="grid gap-10 md:grid-cols-2 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Sobre a Gordo+1</h1>
                    <p className="text-lg text-zinc-600 mb-4">
                        A Gordo+1 é representante Yamaha em Santa Helena e região, e também trabalha com
                        motos multimarcas.
                    </p>
                    <p className="text-lg text-zinc-600">
                        Aqui você encontra motos novas e seminovas, peças, revisões e uma oficina
                        especializada, sempre priorizando o melhor atendimento ao cliente.
                    </p>
                </div>

                <div className="relative w-full aspect-[455/372] rounded-2xl overflow-hidden shadow-lg">
                    <img src={imgEquipe} alt="Equipe da Gordo+1 em frente à loja" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30" />
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold text-zinc-900 mb-8">O que oferecemos</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {servicos.map(({ titulo, descricao }) => (
                        <div key={titulo} className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-600">
                            <h3 className="text-xl font-bold text-zinc-900 mb-2">{titulo}</h3>
                            <p className="text-zinc-600">{descricao}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-zinc-900 text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-bold mb-2">Venha nos visitar</h2>
                    <p className="text-zinc-300">{endereco}</p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <a
                        href={linkMapa}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 rounded-lg bg-blue-600 font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Ver no mapa
                    </a>
                    <a
                        href="https://www.instagram.com/gordomais1yamaha/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 rounded-lg border border-zinc-600 font-semibold hover:bg-zinc-800 transition-colors"
                    >
                        Instagram
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Sobre;
