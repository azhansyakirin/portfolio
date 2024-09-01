import classNames from "classnames"
import globalCss from "../../Scss/Global.module.scss"
import Icons from "../../assets/icons/icons"
import { getDate } from "../../utils/helper"

export const Linktree = ({ }) => {

    const cardLists = [
        { title: "My Portfolio", link: "https://azhansyakirin.dev", icon: "card" },
        { title: "My LinkedIn", link: "https://linkedin.azhansyakirin.dev", icon: "LinkedIn" },
        { title: "My Github", link: "https://github.azhansyakirin.dev", icon: "GitHub" },
        { title: "My Whatsapp", link: "https://whatsapp.azhansyakirin.dev", icon: "Whatsapp" },
        { title: "My Business", link: "https://lanyardhipster.com.my", icon: "shopee" },
    ];

    return (
        <div id="Linktree" className="min-h-[100vh] px-4 flex flex-col justify-center items-center">
            <section className="flex flex-row items-center gap-4 tablet:gap-8 py-4 tablet:py-8">
                <figure className='rounded-full'>
                    <img className='object-cover w-96 tablet:w-40 rounded-full -rotate-12' src="/static/img/memoji.jpg" />
                </figure>
                <main id="Name" className='py-8'>
                    <span className='font-caveat gradient-orange text-lg desktop:text-4xl'>Hi, It's Me</span>
                    <h1 className='font-bold tracking-tightest uppercase text-lg desktop:text-4xl'>Azhan Syakirin</h1>
                    <p className="text-[#9d9d9d] text-sm tracking-tight">A frontend developer who loves to transform <span className="font-jetbrains text-green-500">binary</span> and <span className="font-jetbrains text-yellow-400">logic</span> into a something useful for community.</p>
                </main>
            </section>
            <section className="flex flex-col gap-8 w-full justify-center py-4 tablet:py-8">
                {cardLists.map(((x, idx) => (
                    <div key={idx} className={classNames("rounded-xl w-full tablet:w-[40rem] cursor-pointer hover:shadow-xl mx-auto", { [globalCss["gradient-border"]]: true })}>
                        <a href={x.link} target="_blank">
                            <div className="bg-app-black-1 px-4 py-2 rounded-xl">
                                <span className="flex flex-row justify-between items-center my-2">
                                    <h2 className="text-left text-lg font-bold uppercase">{x.title}</h2>
                                    <Icons style="block w-4 tablet:w-6" iconId={x.icon} />
                                </span>
                                <span className="inline-flex gap-1 text-[#9d9d9d] text-sm"><Icons style="block w-4 tablet:w-6" iconId="link" />{x.link}</span>
                            </div>
                        </a>
                    </div>
                )))}
            </section>
            <div className="text-center text-xs my-4"><p>{`${getDate('year')} | Made with `}<span className="gradient-orange">&hearts;</span> by <a href="https://azhansyakirin.dev" className="hover:gradient-orange">Azhan Syakirin</a></p></div>
        </div>
    )
}