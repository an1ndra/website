"use client";

import React from "react";
import { useState, useEffect } from "react";

const TestComponent = () => {
  const [data, setData] = useState(null);
  useEffect(()=>{
    async function fetchData() {
      const res=await fetch('/api/payment')
      const result=await res.json();
      console.log(result);
      
      setData(result)
    }
    fetchData()
  },[])
  if (!data) return <p>Loading....</p>;
  return (
    <div>
      <div className="bg-slate-100 text-black">{data.title}</div>
    </div>
  );
};

export default TestComponent;
