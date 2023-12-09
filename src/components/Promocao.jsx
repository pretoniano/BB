import "../assets/styles/pr.css";
import { useState } from 'react';




const Promocao = () => {
    console.log()
    const havePromo = true;/*+++ linkar databank*/
    const [openPromo, setopenPromo] = useState(true);/*+++ linkar ao cookie futuramente*/
    

    const PromoOpen = () =>{
        setopenPromo(!openPromo);
      }


    return (
        <div>
        <section id={havePromo ? 'containerPromo':'containerPromoOff'} style={{display: openPromo ? '' :  'none' }}  >
        <h2 style={{ color: "white", fontSize: "16px", fontWeight: "bold" }} >
          Promoção, botar para receber um input personalizado finge q isso e no lado é um x 
        </h2>
        <div id="x" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }} onClick={PromoOpen}>
          <div style={{ width: '30px', height: '3px', backgroundColor: 'black', transform: 'rotate(-45deg) translateY(6px)' }}></div>
          <div  style={{ width: '30px', height: '3px', backgroundColor: 'black', transform: 'rotate(45deg) translateY(-6px)' }}></div>
        </div>
      </section>
      </div>
    );
  };
  
  export default Promocao;
  
  