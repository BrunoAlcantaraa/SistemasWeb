import logoGordo from '../assets/logo-gordo.png';
import slogan from '../assets/acelere-coracao.png';
import { Link, NavLink } from 'react-router-dom';

const links = [
    { to: '/', label: 'Início' },
    { to: '/catalogo', label: 'Catálogo' },
    { to: '/sobre', label: 'Sobre' },
];

function Header() {
    return (
        <header className="bg-zinc-900 text-white shadow-md">
            <div className="px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <Link to="/" className="flex items-center gap-4">
                    <img src={logoGordo} alt="Logo" className="w-[180px] h-auto" />
                </Link>

                <nav className="flex gap-2">
                    {links.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === '/'}
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg font-medium transition-colors ${
                                    isActive
                                        ? 'bg-blue-600 text-white'
                                        : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;
