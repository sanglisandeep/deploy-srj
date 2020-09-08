import React from 'react';
import Sdata from './Sdata';

import Card from './Card';
const Services = () => {
  return(
    <>
      <div className="my-4">
        <h3 className="text-center">Our Services </h3>
      </div>
      <div className="container-fluid mb-5 mt-5">
            <div className='row'>
                <div className="col-10 mx-auto">
                  <div className="row gy-3">
                    {
                      Sdata.map((val,ind) =>{
                        return <Card key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        />
                      })
                    }


                  </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Services;