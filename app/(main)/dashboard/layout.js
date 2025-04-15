import React, { Suspense } from 'react'
import DashboardPage from './page'
import { BarLoader } from 'react-spinners'

const Dashboard= () => {
  return (
    <div className=" py-10 container ">
      <div className="flex items-center justify-between mb-5">
        <h1 className=" text-5xl md:text-6xl lg:text-8xl text-center text-transparent bg-gradient-to-br from-green-500 to-blue-500 tracking-tighter bg-clip-text font-bold cursor-default">
          Dashboard
        </h1>
      </div>
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
}

export default Dashboard