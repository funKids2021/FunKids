import {    Link  } from "react-router-dom";

const readmore = (p) => {
    
    return (
        <Link to="/fb" key={p}  className="readmore button">Узнать больше </Link>
    );
}

export default readmore;