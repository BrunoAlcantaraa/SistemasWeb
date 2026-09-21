import { Link } from 'react-router-dom';
import img from '../assets/s1000rr.png';

function Home() {
    return (
        <section className="relative left-1/2 w-screen -translate-x-1/2 -my-12 min-h-[calc(100vh-6rem)] flex items-center justify-center text-center overflow-hidden">
            <img src={img} alt="Motocicleta" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 px-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Venha conquistar seu sonho!</h1>
                <p className="text-lg md:text-xl text-zinc-200 mb-8">Com a Gordo+1 tudo e todo sonho se torna realidade.</p>

                <Link
                    to="/catalogo"
                    className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                >
                    Ver catálogo
                </Link>
            </div>
        </section>
    );
}

export default Home;
