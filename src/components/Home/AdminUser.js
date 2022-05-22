import React from "react";
import adnim1 from '../../assets/images/store-1.jpg'
import adnim2 from '../../assets/images/store-2.jpg'
import adnim3 from '../../assets/images/store-3.jpg'

const AdminUser = () => {
  return (
    <div className="user-area">
         <h2 className="text-center text-primary m-3 text-4xl">User Admins</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ml-12 ">
            <div className="text-center">
            <img src={adnim1} alt="" />
            <h6>
                Position: <span>Admin</span>
            </h6>
            <p>
                Name: <span> Don Bradom</span>
            </p>
            <p>
                Email: <span>donbradom@gmail.com</span>{" "}
            </p>
            </div>
            <div className=" text-center">
                 <img src={adnim2} alt="" />
                <h6>
                Position: <span>Assist: Admin</span>
                </h6>
                <p>
                Name: <span> Mor Ddanyel</span>
                </p>
                <p>
                Email: <span>danyeladom@gmail.com</span>{" "}
                </p>
            </div>
            <div className=" text-center">
            <img src={adnim3} alt="" />
            <h6>
                Position: <span>Assist:Admin</span>
            </h6>
            <p>
                Name: <span> HK coco</span>
            </p>
            <p>
                Email: <span>hkokoadom@gmail.com</span>{" "}
            </p>
            </div>
        </div>
    </div>
  );
};

export default AdminUser;
