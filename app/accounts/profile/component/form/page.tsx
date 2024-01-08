import React from 'react'
import "./style.css"
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const page = () => {
  return (
    
    <div>
      <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                  {/* <Image src={item.picture.large} height={500} width={500} alt={item.name.first} /> */}

                    <div className="mt-3">
                    <input type="text" value={title} onChange={handleChange} name="username" id="titel" autoComplete="titel" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="  معدن طلا "/>

                      <p className="text-secondary mb-1">Full Stack Developer</p>
                      <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                      <button className="btn btn-primary">Follow</button>
                      <button className="btn btn-outline-primary">Message</button>
                    </div>
                  </div>
                </div>
              </div>
         <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                  {/* <Image src={item.picture.large} height={500} width={500} alt={item.name.first} /> */}

                    <div className="mt-3">
                      {/* <h4>   {item.name.first} {item.name.last}</h4> */}
                      <p className="text-secondary mb-1">Full Stack Developer</p>
                      <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
        
        
        
         <div className="col-md-8">
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Full Name</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            Kenneth Valdez
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Email</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            fip@jukmuh.al
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Phone</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            (239) 816-9029
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Mobile</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            (320) 380-4539
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Address</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            Bay Area, San Francisco, CA
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-12">
            <a className="btn btn-info" href="/accounts/profile/component/form">
              Edit
              </a>
          </div>
        </div>
      </div>
    </div>

 
  </div></div>
  )
}

export default page