import React from 'react';

const ProgressBar = (children) => {
    
    return (
        <div className={children.className}>
           <h3>{children.title}</h3>
           <div className="years">
               <span>Années d'expérience</span>
               <span>1 ans</span>
               <span>5 ans</span>
           </div>

           <div>
               {
                   children.languages.map((item) => {
                       let xpYears = 5;
                       let progressBar = item.xp / xpYears * 100 + '%';

                       return (
                           <div key={item.id} className="languagesList">
                               <li>{item.value}</li>
                               <div className="progressBar" style={{width: progressBar}}>

                               </div>

                           </div>
                       )
                   })
               }
           </div>
        </div>
    );
};

export default ProgressBar;