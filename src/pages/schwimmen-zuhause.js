import React, { useState } from "react";
import Layout from "../components/layout";

export default () => {
  const [index, setIndex] = useState(1);
  return (
    <Layout title="Schwimmen Zuhause">
      <section className="grid gap-4 lg:grid-cols-3">
        <img className="object-contain rounded-lg" alt="Schwimmer in Bett" src={'/schwimmer-bett.jpg'} />
        <img className="object-contain rounded-lg" alt="Schwimmer auf Trottoir" src={'/schwimmerin-trottoir.jpg'} />
        <img className="object-contain rounded-lg" alt="Adinda schwimmt auf dem Tisch" src={'/adinda-tisch.jpg'} />
      </section>
      <div>
        <img alt="Schwimmer animation" src={`/schwimmer/schwimm-${Math.round(index / 2)}.png`} className="w-full sm:w-1/2" />
        <input className="w-full sm:w-1/2" type="range" min="1" max="20" value={index} onChange={e => setIndex(e.target.value)} />

        <a download="schwimmer.png"
          className="mx-24 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          href={'/schwimmer/download.png'}
        >
          Herunterladen
        </a>

        <h2 className="py-5 text-base sm:text-lg md:text-xl text-purple-600">Liebe Schwimmer, liebe Schwimmerinnen,</h2>
        <p>
          Jetzt während wir so viel wie möglich Zuhause machen, habe ich gedacht:<br/>
          Ich bastele meine eigene Stop Motion Film. Habt ihr auch Lust?
        </p>
        <p>
          <b>So geht es:</b>
        </p>
        <ul className="list-disc p-1">
          <li>
            Schritt 1: <br/>Zeichnung mit 10 Schwimmer ausdrucken / oder nachmalen
          </li>
          <li>
            Schritt 2: <br/>Alle 10 Schwimmer ausmalen
          </li>
          <li>
            Schritt 3: <br/>Alle 10 Schwimmer gleich gross ausschneiden <svg width="15" height="15" className="inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M278.06 256L444.48 89.57c4.69-4.69 4.69-12.29 0-16.97-32.8-32.8-85.99-32.8-118.79 0L210.18 188.12l-24.86-24.86c4.31-10.92 6.68-22.81 6.68-35.26 0-53.02-42.98-96-96-96S0 74.98 0 128s42.98 96 96 96c4.54 0 8.99-.32 13.36-.93L142.29 256l-32.93 32.93c-4.37-.61-8.83-.93-13.36-.93-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96c0-12.45-2.37-24.34-6.68-35.26l24.86-24.86L325.69 439.4c32.8 32.8 85.99 32.8 118.79 0 4.69-4.68 4.69-12.28 0-16.97L278.06 256zM96 160c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32zm0 256c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32z"></path></svg>
          </li>
          <li>
            Schritt 4: <br/>Alle 10 Schwimmer so schnell wie möglich umblättern
          </li>
          <li>
            Schritt 5: <br/>Dein Publikum Zuhause vorzeigen 
            <img alt="applause" className="w-8 inline-block" src={'/clap.png'}/>
          </li>
        </ul>
      </div>
    </Layout>);
}  