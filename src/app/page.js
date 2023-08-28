"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "./Form.js";
import "./globals.css";

export default function Home() {
  const [someState, setSomeState] = useState(false);
  const router = useRouter();
  return (
    <main>
      <div>
        <h1>Calcular el interés compuesto</h1>
      </div>
      <Form />
    </main>
  );
}
