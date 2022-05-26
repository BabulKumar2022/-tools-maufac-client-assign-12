import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );

  const imageStorageKey = "ff3959ebaddb1de4772fe14cc642c870";

  /* 
   3 ways to image storage 
   01 Third party storage as imageBB
   02 won storage , won server
   03 Database: Mongodb

    YUP :  to validate file: Yup file validate for react hook form
   */

  const onSubmit = async (data) => {
    console.log("data", data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          // send to your database
          fetch("http://localhost:5000/allProduct", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
            ;
              if (inserted.insertedId) {
                toast.success("One product added successfully");
                reset();
              } else {
                toast.error("failed to added product");
              }
            });
        }
      });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="">
      <h2>Add a Product </h2>

      <div className=" ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Model</span>
            </label>
            <input
              type="name"
              placeholder="model name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>



          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Tools name</span>
            </label>
            <select
              {...register("tolls name")}
              className="select w-full max-w-xs"
            >
              {services.map((service) => (
                <option key={service._id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-xs"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <input
            className="btn w-full max-w-xs text-white"
            type="submit"
            value="ADD"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
