import React, { useState, useEffect } from 'react';
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <div className="container">
        <div className="flex justify-between justify-center">
          <div className="w-1/2">
            <h3 className="text-xl uppercase text-gray-600">Hallo ich bin:</h3>
            <h1 className="text-4xl font-bold text-teal-900 my-3">Adinda</h1>
          </div>
          <div className="w-1/2">
            <div className="home_right_img">
              <img className="img-fluid" src={'/home-right.png'} alt="adinda" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}