import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <div className="container py-5 my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className='text-primary fw-bold mb-4'>About Us</h1>
                    <p className="lead mb-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad earum eum atque, officia at possimus magni fuga corporis amet dolores quam reiciendis, numquam hic recusandae quidem illum exercitationem illo ducimus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad earum eum atque, officia at possimus magni fuga corporis amet dolores quam reiciendis, numquam hic recusandae quidem illum exercitationem illo ducimus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad earum eum atque, officia at possimus magni fuga corporis amet dolores quam reiciendis, numquam hic recusandae quidem illum exercitationem illo ducimus!
                    </p>
                    <NavLink to='/contact' className="btn btn-outline-primary px-3">
                        Contact Us
                    </NavLink>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <img src="https://www.pngmart.com/files/About-Us-PNG-Photos.png" alt="About Us" height='400px' width='400px' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About