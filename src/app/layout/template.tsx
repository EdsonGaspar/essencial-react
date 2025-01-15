"use client";

import { useState } from "react";

export default function Tamplate(props: any) {
  const [data] = useState(new Date());
  return (
    <main className="border border-yellow-500 p-4">
      <div>
        <span>{data.toLocaleString()}</span>
        <h1>{props.children}</h1>
      </div>
    </main>
  );
}
