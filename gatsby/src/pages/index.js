import React from "react"
import Content from "../components/Content"
import Main from "../components/Main"
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <>
      <Main>
        <Sidebar />
        <Content />
      </Main>
    </>
  )
}
