import React, { useState } from 'react';


const Contact = () => {

    const [data, setData]= useState({
        fullname:'',
        email:'',
        phone:'',
        msg:'',
    });

    const InputEvent = (event) =>{
      const {name, value} = event.target;

      setData((preVal)=>{
        return{
          ...preVal,
          [name] : value,
        };
      });
    };


  const formSubmit = (e) =>{
    e.preventDefault();
    alert(`my name is ${data.fullname}. my email is ${data.email}.my phone number is ${data.phone}.my message ${data.msg} `);
  };
  return(
    <>
      <div>
        <h3 className="my-3 text-center">Contact us</h3>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">

            <form onSubmit={formSubmit}>
            <div class="form-group mb-3">
                <label for="exampleInputEmail1">Name</label>
                <input required
                 type="text"
                  className="form-control"
                   id="exampleInputEmail1"
                   name="fullname"
                   value={data.fullname}
                   onChange={InputEvent}

                    placeholder="Enter your name" 
                    aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" 
                className="form-control" 
                placeholder="Enter yout email"
                 id="exampleInputEmail1" 
                 name="email"
                 value={data.email}
                 onChange={InputEvent}
                 aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Phone</label>
                <input type="number" 
                className="form-control"
                 id="exampleInputEmail1"
                 name="phone"
                 value={data.phone}
                 onChange={InputEvent}
                  placeholder="Enter your phonenumber" 
                  aria-describedby="phonenumberHelp"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your phone number with anyone else.</small>
              </div>

              <div class="form-group mb-2">
                <label for="exampleTextarea1">Message</label>
                <textarea  
                className="form-control" 
                id="exampleInputPassword1"
                name="msg"
                value={data.msg}
                onChange={InputEvent}
                row="3"/>
              </div>
              <div>

                </div>

              <div class="col-12 mb-5">
              <button type="submit" className="btn btn-outline-primary">Submit Details</button>
              </div>
            </form>



          </div>
        </div> 
      </div>
    </>
  );
};

export default Contact;