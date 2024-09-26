import React from 'react';

async function fetchData() {
  const res = await fetch('https://deploy-backend-joseronaldo.vercel.app/');
  return res.text();
}

export default async function Page() {
  const data = await fetchData();

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-white'>
      <h1 className='text-8xl font-bold text-black'>{data} 👋</h1>
    </div>
  );
}
