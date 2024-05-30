import GithubIcons from "./github.svg";
import Logo from "./logo.svg";
import Whatsapp from "./whatsapp.svg";
import LinkedIn from "./linkedin.svg";
import Hamburger from "./hamburger.svg";
import Close from "./close.svg";
import Code from "./code.svg";
import Mail from "./mail.svg";
import Phone from "./phone.svg";
import Education from "./education.svg";
import People from "./people.svg";
import Language from "./language.svg";
import Briefcase from "./briefcase.svg";
import Terminal from "./terminal.svg";
import Pin from "./pin.svg";
import Calendar from "./calendar.svg";
import Print from "./printer.svg";
import Chat from "./chat.svg";

const icons = {
    GitHub: GithubIcons,
    Logo: Logo,
    LinkedIn: LinkedIn,
    Whatsapp: Whatsapp,
    Hamburger: Hamburger,
    Close: Close,
    download: "/portfolio/static/icons/download.svg",
    code: Code,
    mail: Mail,
    phone: Phone,
    education: Education,
    people: People,
    language: Language,
    briefcase: Briefcase,
    terminal: Terminal,
    pin: Pin,
    calendar: Calendar,
    print: Print,
    bulb: "/portfolio/static/icons/bulb.svg",
    chat: Chat,
}

const Icons = ({ iconId, style }) => {
    return <img src={icons[iconId]} className={style} />
}

export default Icons;