import GithubIcons from "./github.svg";
import Logo from "./logo.svg";
import Whatsapp from "./whatsapp.svg";
import LinkedIn from "./linkedin.svg";
import Hamburger from "./hamburger.svg";
import Close from "./close.svg";

const icons = {
    GitHub: GithubIcons,
    Logo: Logo,
    LinkedIn: LinkedIn,
    Whatsapp: Whatsapp,
    Hamburger: Hamburger,
    Close: Close,
    download: "/portfolio/static/icons/download.svg",
}

const Icons = ({ iconId, style }) => {
    return <img src={icons[iconId]} className={style} />
}

export default Icons;