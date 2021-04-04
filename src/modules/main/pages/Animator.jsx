 
import Section from '../section/section';
 
import animator from '../../../img/pages/animator.jpg'    ;
import Btnorder from '../../buttons/Order';

const p = () => {
    const s1= {
        "title":" У нас вы можете заказать аниматоров на любой вкус",
        "desc": ["Мы предоставляем аниматоров на выезд или в добавок к арзвлечению в трц - партнере", Btnorder("animator animator") ],
        "img": animator,
        "imgalt": "img"
    }
    return (  
        <>
 
        <Section  content={s1} className="section--light"/>
   
            </>
    );
}
 
export default p;