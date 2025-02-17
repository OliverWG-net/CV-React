import React from "react";


const Home = () => {
  return (
      <div className="content-container">
        <section className="backgroundimg sections">
          <h1 className="niceText1">Welcome to My CV Website</h1>
        </section>

        <section>
          <h2 className="niceText1">Techstack</h2>

          <p className="sectiontech">
            <img src="https://cdn-icons-png.flaticon.com/128/6132/6132221.png" alt="C#" />
            C Sharp
          </p>

          <p className="sectiontech">
            <button className="buttonbackground">
              <img src="https://cdn-icons-png.flaticon.com/128/721/721671.png" id="javaimg" alt="JavaScript" />
            </button>
            JavaScript
          </p>

          <p className="sectiontech">
            <img src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png" alt="HTML" />
            HTML
          </p>

          <p className="sectiontech">
            <img src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt="CSS" />
            CSS
          </p>
        </section>

        <img className="placement" src="Images/Profilbild.png" alt="CV image" />

        <section>
          <h2 className="niceText1 hide">Profile</h2>
          <p className="smallText niceText hide">
            I am a dedicated and meticulous worker who always strives to develop and create a good working environment for my colleagues.<br />
            The most important thing in my work is that the customers who have shopped in our store leave and feel that it was a positive experience and that they are welcome back.<br />
            With my 8 years of experience, I have also developed an eye for details and the streamlining of work tasks.<br />
            I am punctual and reliable.<br />
            I am also a person who is very social and has an easy time creating new contacts and relationships.
          </p>
        </section>

        <p className="introplacement">Hi, my name is Oliver and I'm 27.</p>
    </div>
  );
};

export default Home;