import React from "react"
import { Header } from "../components/header"

export default ({ title, children }) => (
  <span>
    <Header pageName={title}></Header>
    <div className="w-full lg:p-20 p-2 w-auto">
      {children}
    </div>
  </span>
)