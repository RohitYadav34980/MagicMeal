import logoUrl from '../assets/magicmeal_logo.png';

export default function ChefNavbar() {
    return (
        <nav className="chef-navbar">
            <img src={logoUrl} alt="magicmeal logo"/>
        </nav>
    )
}