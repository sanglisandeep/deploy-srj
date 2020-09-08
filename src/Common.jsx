import React from 'react';

import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return(
    <>
      <section id="header" className="d-flex align-items-center mt-4">
      <div className="container-fluid  bd">
            <div className='row'>
                <div className="col-10 mx-auto">
                  <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h3>
                          {props.name} <strong className="brand-name">{props.brand_name}</strong>
                        </h3>
                      
                        <div className="mt-3">
                          <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                        </div>  
                    </div>

                    <div className="col-lg-6 order-1 order-lg-2 header-img mt-5  ">
                        <img  src={props.imgsrc} width="400" height="400" className="img-fluid animated" alt="home img" />
                    </div> 
                  </div> 
                
                </div>
            </div>
        </div>


      </section>
    </>
  );
};

export default Common;