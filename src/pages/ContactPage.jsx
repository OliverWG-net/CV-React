import React from "react";

export default function ContactPage() {
    return(
    <>
        
        <section className="contactContainer">
            <h1 className="niceText contactName">Oliver Garderud Williams</h1>
                <p className="niceText contactNr">
                    +46 764179340<br/><br/><br/>
                    <a href="mailto:Oliverwgzx90@gmail.com" className="noDeco hover contactMail">Oliverwgzx90@gmail.com</a>
                </p>
                    <a href="https://github.com/OliverWG-net" className="noDeco contactGithubA">
                        <p className="niceText noViewHeight">Github</p>
                        <br/>
                    <img src="Images\Github.png" className="contactGithub" alt="Github"/></a>
        </section>
    </>
    )
}