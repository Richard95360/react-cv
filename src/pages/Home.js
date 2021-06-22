import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
         <Navigation/>
         <div className="homeContent">
             <div className="content">
                 <h1>Richard Haddad</h1>
                 <h2>Développeur Front-end</h2>
                 <div className="pdf">
                     <a href="./media/RHCVDEV.pdf" target="_blank" rel="noopener noreferrer">Télécharger CV</a>
                 </div>
             </div>
         </div>
          
        </div>
    );
};

export default Home;