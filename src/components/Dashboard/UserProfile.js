import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const UserProfile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("https://hidden-fortress-58481.herokuapp.com/service").then((res) =>
      res.json()
    )
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
          const electric_tools = {
            name: data.name,
            model: data.model,
            price: data.price,
            photo: img,
          };
          // send to your database
          fetch("https://hidden-fortress-58481.herokuapp.com/allProduct", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(electric_tools),
          })
            .then((res) => res.json())
            .then((inserted) => {
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
      <h2 className="text-purple-400 text-3xl">Create your profile </h2>

      <div className=" ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">First name</span>
            </label>
            <input
              type="name"
              placeholder="first name"
              className="input input-bordered w-full max-w-xs"
              {...register("first name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Last name</span>
            </label>
            <input
              type="name"
              placeholder="last name"
              className="input input-bordered w-full max-w-xs"
              {...register("last name", {
                required: {
                  value: true,
                  message: "last is required",
                },
              })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Education</span>
            </label>
            <input
              type="text"
              placeholder="education"
              className="input input-bordered w-full max-w-xs"
              {...register("model", {
                required: {
                  value: true,
                  message: "education is required",
                },
              })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Location</span>
            </label>
            <input
              type="text"
              placeholder="location"
              className="input input-bordered w-full max-w-xs"
              {...register("location", {
                required: {
                  value: true,
                  message: "location is required",
                },
              })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Telephone No</span>
            </label>
            <input
              type="text"
              placeholder="phone"
              className="input input-bordered w-full max-w-xs"
              {...register("phone", {
                required: {
                  value: true,
                  message: "phone is required",
                },
              })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Profile Picture</span>
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
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};
export default UserProfile;
