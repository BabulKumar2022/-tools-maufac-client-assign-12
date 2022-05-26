import React from 'react';

const Contact = () => {
    return (
        <div className="flex justify-center" >
            <div className='mb-80'>
            <h1>Contact US</h1>
            <div class="form-control">
            <label class="label">
                <span class="label-text">Your Email</span>
            </label>
            <label class="input-group">
                <span>Email</span>
                <input type="text" placeholder="info@site.com" class="input input-bordered" />
            </label>
            </div>
            </div>
            
        </div>
    );
};

export default Contact;