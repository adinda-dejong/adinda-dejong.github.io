import React from "react";
import Layout from "../components/layout";

export default () => (
  <Layout title="Schwimmen Zuhause">
    <section className="grid gap-4 lg:grid-cols-3">
      <img class="object-contain rounded-lg" alt="Schwimmer in Bett" src={'/schwimmer-bett.jpg'} />
      <img class="object-contain rounded-lg" alt="Schwimmer auf Trottoir" src={'/schwimmerin-trottoir.jpg'} />
      <img class="object-contain rounded-lg" alt="Adinda schwimmt auf dem Tisch" src={'/adinda-tisch.jpg'} />
    </section>
  </Layout>
);  