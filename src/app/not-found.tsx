import React from "react";

export default function NotFoundPage() {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col  gap-10">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 leading-snug text-center text-8xl font-bold">Page Not Found</h2>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 leading-snug text-center text-[220px] font-bold">404</p>
      </div>
    </section>
  );
}
