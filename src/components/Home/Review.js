import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card lg:mx-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p>
          If a dog chews shoes whose shoes does he choose? If a dog chews shoes
          whose shoes does he choose? If a dog chews shoes whose shoes does he
          choose?
        </p>
        <div class="flex items-center">
          <div class="avatar">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div className="">
              <h4 className="text-xl">{review.name}</h4>
              <p>{review.location}</p>
              <div class="rating">
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" checked />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
