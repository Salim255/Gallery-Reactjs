import React, {useEffect, useRef} from 'react';




const Footer = () => {
  const refContainer  = useRef(null);
  useEffect(() =>{
     refContainer.current.innerHTML = new Date().getFullYear();
  })
  return (
    <div className='footer'>
       <div>
          <p >Tous droits réservés, Copyright &copy; <span ref={refContainer}></span>, Thomas Lo Presti</p>
       </div>
    </div>
  )
}

export default Footer