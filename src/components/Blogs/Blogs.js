import React from "react";

const Blogs = () => {
  return (
    <div className="m-28">
      <h1 className="text-center text-3xl m-2.5">Blogs</h1>
      <p className="text-2xl">
        React Application এ state পরিচালনার ভিন্ন ভিন্ন উপায় গুলো কি কি?
      </p>
      <p>
        উঃ React Application এ state পরিচালনার ক্ষেত্রে চার ধরনের উপায় রয়েছে।{" "}
      </p>
      <p>
        ১।Local State : লোকাল স্টেট প্রায়ই useState Hook ব্যবহার করে React App
        পিচালিত হয়। যেমন একটি মডেল উপাদান প্রদর্শন বা লুকানোর জন্য বা ফর্ম জমা
        দেওয়ার মতো ফর্মের মানগুলি ট্র্যাক করার জন্য লোকাল স্টেটের প্রয়োজন হবে,
        যখন ফর্মটি নিষ্ক্রিয় থাকে এবং মানগুলি একটি ফর্ম এর ইনপুট.
      </p>
      <p>
        ০২।।  Global State: একই ডাটা একাধিক উপাদানে ব্যবহার করার জন্য Global State
        ব্যবহার করা হয়। যদি একজন ব্যবহারকারী আমাদের অ্যাপে লগ ইন করেন, তাহলে
        আমাদের অ্যাপ্লিকেশন জুড়ে তাদের ডেটা পেতে এবং পরিবর্তন করতে হবে তখন
        Global State ব্যাবহার করা হয়।{" "}
      </p>
      <p>
        ০৩। Server state: UI তে কোনকিছু দেখনোর জন্য প্রথমে, useState এবং
        useEffect এর মাধ্যমে fetch করে আপনাকে ডেটা আনতে হবে এবং UI এটি প্রদর্শন
        করতে হবে। e khetre ডেটার জন্য অপেক্ষা করার সময় আপনাকে একটি লোডিং
        স্পিনার প্রদর্শন করতে হবে। তারপরে আপনাকে এরর পরিচালনা করতে হবে এবং
        সেগুলি উদ্ভূত হওয়ার সাথে সাথে ব্যবহারকারীর কাছে সেগুলি প্রদর্শন করতে
        হবে৷ এ সমস্যা দূর করার জন্য React Query ব্যবহার করা হয়।{" "}
      </p>
      <br />
      <p className="text-2xl">How does prototypical inheritance work?</p>
      <p>
        উঃ পূর্ব সুত্র অনুযায়ী prototypical একটা অবজেক্ট হতে অন্য অব্জেক্টের
        access করা বোঝায়। বিদ্যমান অবজেক্ট কনস্ট্রাক্টরে নতুন prototype এবং
        methode যোগ করতে আমরা একটি জাভাস্ক্রিপ্ট prototype ব্যবহার করি
      </p>

      <p className="text-2xl">What is unit testing in JS?</p>
      <p className="text-2xl">Why should write unit tests?</p>
      <p>
        জাভাস্ক্রিপ্ট ইউনিট টেস্টিং এমন একটি nethod যেখানে জাভাস্ক্রিপ্ট test
        code লেখা হয় একটি webpage বা ওয়েব অ্যাপ্লিকেশন মডিউলের জন্য{" "}
      </p>
      <p>
        Deployment এর পূর্বে কোডের কোয়ালিটি যাচাই করার জন্য Unit test নিশ্চিত
        করা হয়
      </p>
    </div>
  );
};

export default Blogs;
