import React, { useState } from "react";
import Icons from "../../assets/icons/icons";
import classNames from "classnames";
import globalCss from "./../../Scss/Global.module.scss";
import Modal from "../Modal/Modal";
import { isMobile } from "../../utils/helper";
import { logEvent, setUserProperties } from 'firebase/analytics'
import { analytics, db } from '../../config/firebase'
import { doc, setDoc, getDoc } from 'firebase/firestore'

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
        const [initialPage, setInitialPage] = useState("form");

        const handleSubmit = async (e) => {
            e.preventDefault();

            const docRef = doc(db, "contacts", `${Date.now()}_${name}`);

            try {
                await setDoc(docRef, {
                    name,
                    phone,
                    email,
                    enquiry,
                    submittedAt: new Date().toISOString()
                });

                logEvent(analytics, 'form_submission', {
                    name,
                    email
                });

                alert("Thanks for reaching out! I'll be in touch soon.");
                setName("");
                setPhone("");
                setEmail("");
                setEnquiry("");
                // updateModalState(false);
                setInitialPage("thankyou");
            } catch (err) {
                console.error("Error submitting form:", err);
                alert("Something went wrong. Please try again.");
            }
        };

        return modalState &&
            <Modal isOpen={modalState} closeModal={handleModalState}>
                {initialPage === "form" &&
                    <form onSubmit={handleSubmit}>
                        <div className="py-2 flex flex-row justify-between">
                            <h1 className="font-caveat text-3xl">Let's Connect !</h1>
                            <button type="submit" className="gradient-orange active:scale-95 opacity-70 hover:opacity-100 rounded-md focus:outline-none focus-visible:outline-none">
                                Submit &rarr;
                            </button>
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
                                    rows={5}
                                    className="px-4 py-2 bg-neutral-600 rounded-lg font-lato focus-visible:outline-yellow-600"
                                />
                            </div>
                        </div>
                    </form>
                }
                {initialPage === "thankyou" &&
                    <div className="py-2 flex flex-col gap-4">
                        <h1 className="font-caveat text-3xl">Thanks for reaching out!</h1>
                        <p className="text-gray-400">I will get back to you as soon as possible.</p>
                        <button onClick={() => updateModalState(false)} className="gradient-orange active:scale-95 px-8 py-1 self-center opacity-70 hover:opacity-100 rounded-md focus:outline-none focus-visible:outline-none">
                            Close
                        </button>
                    </div>
                }
            </Modal>
    }

    return (
        <footer className={classNames(globalCss.noprint, "font-jetbrains tablet:w-full text-sm fixed right-0 bottom-1/4 tablet:bottom-1 z-50")}>
            <main className="p-3 tablet:p-1 tablet:w-2/5 rounded-md shadow-md m-auto bg-app-black-2 flex flex-col items-center justify-center gap-1">
                <div className="social-icons py-2 flex flex-col tablet:flex-row gap-4">
                    <a className="opacity-50 hover:opacity-100 active:scale-95" onClick={() => { window.open('/static/docs/Frontend Developer - Muhammad Azhan Syakirin Bin Azmani.pdf', '_blank') }} title="Print My Resume"><Icons iconId="print" style="block w-10 cursor-pointer" /></a>
                    <a className="opacity-50 hover:opacity-100 active:scale-95" href="https://github.azhansyakirin.dev" title="Deep dive to my github contribution"><Icons iconId="GitHub" style="block w-10 cursor-pointer" /></a>
                    <a className="opacity-50 hover:opacity-100 active:scale-95" href="https://linkedin.azhansyakirin.dev" title="Connect with me on LinkedIn"><Icons iconId="LinkedIn" style="block w-10 cursor-pointer" /></a>
                    <a className="opacity-50 hover:opacity-100 active:scale-95" href="https://whatsapp.azhansyakirin.dev" title="Let's have a chit chat on Whatsapp"><Icons iconId="Whatsapp" style="block w-10 cursor-pointer" /></a>
                    <a className="opacity-50 hover:opacity-100 active:scale-95" onClick={() => handleModalState()} title="Let's Connect!"><Icons iconId="chat" style="block w-10 cursor-pointer" /></a>
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