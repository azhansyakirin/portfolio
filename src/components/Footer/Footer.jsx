import React, { useState } from "react";
import Icons from "../../assets/icons/icons";
import classNames from "classnames";
import globalCss from "./../../Scss/Global.module.scss";
import Modal from "../Modal/Modal";
import { isMobile } from "../../utils/helper";

const Footer = () => {

    const [modalState, updateModalState] = useState(false);

    const isMobileDevice = isMobile();

    const date = new Date();
    const year = date.getFullYear();

    const handleModalState = () => updateModalState(!modalState);

    const EnquiryModal = () => {

        const [name, setName] = useState("");
        const [phone, setPhone] = useState("");
        const [email, setEmail] = useState("");
        const [enquiry, setEnquiry] = useState("");

        return modalState &&
            <Modal isOpen={modalState} closeModal={handleModalState}>
                <form>
                    <div className="py-2 flex flex-row justify-between">
                        <h1 className="font-caveat text-3xl">Let's Connect !</h1>
                        <button onSubmit={() => { console.log("Submitted!")}} className="gradient-orange opacity-70 hover:opacity-100 rounded-md font-lato focus-visible:outline-none">Submit &rarr;</button>
                    </div>
                    <div className="py-4 flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-gray-400 font-caveat text-xl">Your Name*</label>
                            <input
                                type="text"
                                value={name}
                                name="name"
                                onChange={(ev) => setName(ev.target.value)}
                                placeholder="Snoring Panda"
                                spellCheck={false}
                                autoCorrect={false}
                                required
                                className="px-4 py-2 bg-neutral-600 rounded-lg font-lato focus-visible:outline-yellow-600" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-gray-400 font-caveat text-xl">Mobile Number</label>
                            <input
                                type="tel"
                                value={phone}
                                name="phone"
                                onChange={ev => setPhone(ev.target.value)}
                                placeholder="0123456789"
                                className="px-4 py-2 bg-neutral-600 rounded-lg font-lato focus-visible:outline-yellow-600" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-gray-400 font-caveat text-xl">Email Address*</label>
                            <input
                                type="email"
                                value={email}
                                name="email"
                                onChange={ev => setEmail(ev.target.value)}
                                placeholder="snoringpanda@gmail.com"
                                required
                                className="px-4 py-2 bg-neutral-600 rounded-lg font-lato focus-visible:outline-yellow-600" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-gray-400 font-caveat text-xl">Message*</label>
                            <textarea
                                value={enquiry}
                                onChange={ev => setEnquiry(ev.target.value)}
                                placeholder="Let's team up and build an awesome project together."
                                spellCheck={false}
                                autoCorrect={false}
                                required
                                className="px-4 py-2 bg-neutral-600 rounded-lg font-lato focus-visible:outline-yellow-600"
                            />
                        </div>
                    </div>
                </form>
            </Modal>
    }

    return (
        <footer className={classNames(globalCss.noprint, "font-jetbrains tablet:w-full text-sm fixed right-0 bottom-1/4 tablet:bottom-1 z-50")}>
            <main className="p-3 tablet:p-1 tablet:w-2/5 rounded-md shadow-md m-auto bg-app-black-2 flex flex-col items-center justify-center gap-1">
                <div className="social-icons py-2 flex flex-col tablet:flex-row gap-4">
                    <a className="opacity-50 hover:opacity-100" onClick={() => { window.open('/static/docs/resume.pdf', '_blank') }} title="Print My Resume"><Icons iconId="print" style="w-8 cursor-pointer" /></a>
                    <a className="opacity-50 hover:opacity-100" href="https://github.azhansyakirin.dev" title="Deep dive to my github contribution"><Icons iconId="GitHub" style="w-8 cursor-pointer" /></a>
                    <a className="opacity-50 hover:opacity-100" href="https://linkedin.azhansyakirin.dev" title="Connect with me on LinkedIn"><Icons iconId="LinkedIn" style="w-8 cursor-pointer" /></a>
                    <a className="opacity-50 hover:opacity-100" href="https://whatsapp.azhansyakirin.dev" title="Let's have a chit chat on Whatsapp"><Icons iconId="Whatsapp" style="w-8 cursor-pointer" /></a>
                    <a className="opacity-50 hover:opacity-100" onClick={() => handleModalState()} title="Let's Connect!"><Icons iconId="chat" style="w-8 cursor-pointer" /></a>
                </div>
                {!isMobileDevice && <div className="social-icons static bottom-0 flex justify-center gap-4 py-2">
                    <p>{`${year} | Made with `}<span className="gradient-orange">&hearts;</span> by Azhan Syakirin</p>
                </div>}
            </main>
            <EnquiryModal />
        </footer>
    )
}

export default Footer;