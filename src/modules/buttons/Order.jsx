
import React, { useState } from 'react';
 

const Order = (p) => {
    const [Popup, SetPopup] = useState("");
        const PopupHtml = (<div ><form className="popup-order"> <p>Закажите звонок и мы вам перезвоним</p> <input type="text"/>  <button onClick={()=>{SetPopup("")}} className="button"> заказать</button> </form> <div  onClick={()=>{SetPopup("")}} className="popup-order__bgc"> </div> </div>)


    return (
     <span key={p + "pop u fp"}>
             <button onClick={()=>{SetPopup(PopupHtml)}} key={p} className="button order"> Зазказать</button>
 {Popup}
     </span>

     
    );
}

export default Order;