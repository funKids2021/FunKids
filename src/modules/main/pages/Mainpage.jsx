import Swiper from '../../slider/Swiper';
import Section from '../section/section';


import caravan from '../../../img/pages/caravan.jpg';
import meh from '../../../img/pages/meh.jpg';
import fb from '../../../img/pages/fb.jpg';
import Btnorder from '../../buttons/Order';
import BtnRead from '../../buttons/readmore';


const Mainppage = () => {
    const s1= {
        "title":"День рождения в трц французский бульвар",
        "desc": ["С нами вы велеколепно проведете время"  ,  Btnorder("franch main") , BtnRead("fb")  ]  ,
        "img": fb,
        "imgalt": "img"
    }
    const s2= {
        "title":"День рождения в трц Караван",
        "desc": ["С нами вы велеколепно проведете время " ,  Btnorder("caravan main") , BtnRead("caravan")  ]  ,
        "img": caravan,
        "imgalt": "caravan"
    }
    const s3= {
        "title":"День рождения в  арт завод механика",
        "desc": ["С нами вы велеколепно проведете время " ,  Btnorder("meh main") , BtnRead("meh")  ]  ,
        "img": meh,
        "imgalt": "mehanika"
    }
    return (  
        <>
        <section className="hero">
            <div className="container">
                       <h1 className="hero__title"> Детские дни рождения в Харькове</h1>
                        </div>
                        <Swiper className="hero-slide"/>
        
        </section>
        <Section  content={s1} className="section--light"/>
        <Section  content={s2}/>
        <Section content={s3} className="section--light"/>
 
            </>
    );
}
 
export default Mainppage;