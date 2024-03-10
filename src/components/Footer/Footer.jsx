import Ract from "react";
import Icons from "../../assets/icons/icons";

const Footer = () => {
    return (
        <footer className="p-4 font-jetbrains text-sm w-full">
            <div className="social-icons static bottom-0 flex justify-center gap-4 py-2">
                <Icons iconId="GitHub" style="w-8 cursor-pointer" />
                <Icons iconId="LinkedIn" style="w-8 cursor-pointer" />
                <Icons iconId="Whatsapp" style="w-8 cursor-pointer" />
            </div>
            <div className="social-icons static bottom-0 flex justify-center gap-4 py-2">
                <p>2024 | Made with &hearts; by Azhan Syakirin</p>
            </div>
        </footer>
    )
}

export default Footer;