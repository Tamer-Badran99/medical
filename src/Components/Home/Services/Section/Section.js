import React , {useState , useEffect} from 'react';
import Span from './Span/Span';
import Axios from 'axios';


function Section({icon , header , text , s}) {

  const [des , setDes] = useState([]);

  useEffect(() => {
    Axios.get('js/data.json').then(res => setDes(res.data.xse));
   },[])

 
  const r = des.map( i => {
    return (
      <Span key={i.id} span={i.span[s]} />
    )
  })
 

  return (

     <div className="col-md-6 col-lg-4">
         <div className="section">
             <i className={icon}></i>
             <h5>{header}</h5>
             <p>{text}</p>
            
             {r}
            
         </div>
     </div>
  );

}

export default Section;