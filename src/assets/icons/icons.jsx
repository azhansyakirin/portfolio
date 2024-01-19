import GithubIcons from "./github.svg";
import Logo from "./logo.svg";
import Whatsapp from "./whatsapp.svg";
import LinkedIn from "./linkedin.svg";

const icons = {
    GitHub: GithubIcons,
    Logo: Logo,
    LinkedIn: LinkedIn,
    Whatsapp : Whatsapp,
}

const Icons = ({ iconId, style }) => {
    return <img src={icons[iconId]} className={style} />
}

export default Icons;