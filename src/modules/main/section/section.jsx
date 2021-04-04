const section = (s) => {
    const ob =s.content;
    let title="";
    let img="";
    let desc="";
    let imgalt="";
    let propClass="";
    
    if(ob){
        title = ob.title;
        img = ob.img;
        desc = ob.desc;
        imgalt = ob.imgalt;
    }
    if(s.className){
        propClass=s.className;
        }

 
  
    return (

            <section key={title}  className={propClass+" section"}>
                <div className="container">
                <h2 className="section__title">{title}</h2>
                <div className="row">
                    <div className="col-md-6">
                        <figure className="section__image"><img src={img} alt={imgalt}/></figure>
                    </div>
                    <div className="col-md-6">
                        <div className="section__description"> {desc}</div>
                    </div>
                </div>
                </div>
            </section>
    );
}

export default section; 