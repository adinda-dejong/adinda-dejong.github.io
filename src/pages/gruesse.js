import React, { useState, useEffect } from 'react';
import Layout from "../components/layout";
import children from "../../content/children.json";

export default () => {
  const [search, setSearch] = useState();
  const [child, setChild] = useState(children[Math.round(Math.random() * children.length)]);

  const handleChange = event => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    setInterval(() => {
      setChild(children[Math.floor(Math.random() * children.length)]);
    }, 10000);
  }, []);

  return (
    <Layout title="Grüsse">
      {!search && (
        <div className="flex mb-4">
          <div>{child.text}</div>
        </div>
      )}
      {search && children.filter(c => c.search.toLowerCase().indexOf(search.toLowerCase()) !== -1).map((c, i) => (
        <div key={i} className="flex mb-4">
          <div>{c.text}</div>
        </div>
      ))}
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Suche"
      />
    </Layout>
  );
}