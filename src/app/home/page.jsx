"use client";
import React from "react";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";

export default function page() {
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(
      "https://randomuser.me/api/?page=5&results=5"
    );
    setPosts(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" text-black">
      <div className="w-full bg-[#fff1db] flex">
        <div className="lg:md:flex md:lg:ml-32 rounded-bl-[80px] h-[100vh] pt-10 w-[70%] px-4">
          <span>
            <div className="flex">
              <Image
                src="/logo.47c1e2c4 (1).png"
                alt="Vercel Logo"
                width={120}
                height={24}
                priority
              />

              <ul className="md:lg:flex pt-4 md:lg:ml-80 gap-6">
                <li>Solutions</li>
                <li>About us</li>
                <li>Contact us</li>
              </ul>
            </div>

            <span>
              <h1 className="pt-40 font-medium text-5xl font-serif">
                Food intelligence for all, market data <br /> at your
                fingertips.
              </h1>
              <h1 className="text-lg font-bold pt-8 font-serif">
                Make smart decisions with our food data. Tap into our real-time,
                daily, and <br /> historical food market data pipeline.
              </h1>
              <button className="mt-40 px-32 rounded-md py-4 bg-black text-white">
                Get Started
              </button>
            </span>
          </span>
        </div>

        <div className="w-[30%] h-[100vh] md:lg:bg-[#4AC16C] rounded-tl-[80px] pt-10 ">
          <div className="ml-20">
            <button className="text-white px-14 py-2 rounded-[4px] border-0 bg-black">
              Sign up
            </button>
            <button className="px-10 py-1 rounded-md border-0 ">Login</button>
          </div>

          <Image
            className="-ml-20 mt-36"
            src="/fruits.png"
            alt="Vercel Logo"
            width={600}
            height={100}
            priority
          />
        </div>
      </div>

      <section className="bg-white mb-20">
        <span>
          <h1 className="pl-32">Explore the latest live trends on food data</h1>
          <h1 className="pl-32">
            We constantly track and update in real-time food market data,
            enabling informed decisions.
          </h1>
        </span>

        <div className="w-full">
          <table className="w-[90%] rounded-t-[100%] ml-28">
            <tr className=" bg-[#fed89d] py-2">
              <th className="">Name</th>
              <th>Last Price (₦)</th>
              <th>24h Change</th>
              <th>State</th>
              <th>Region</th>
              <th>Markets</th>
            </tr>

            <div>
              <tr>
                {posts?.map((post) => (
                  <div key={post.id} className="text-white">
                    <td>{post.gender} </td>
                    <td>{post.name} </td>
                    <td>{post.location}</td>
                    <td>{post.email}</td>
                    <td>{post.login}</td>
                  </div>
                ))}
              </tr>
            </div>
          </table>
        </div>
      </section>
    </div>
  );
}
