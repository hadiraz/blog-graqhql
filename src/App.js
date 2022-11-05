import { Container } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthorPage from "./components/author/AuthorPage";
import HomeBlogs from "./components/Blogs/HomeBlogs";
import PostPage from "./components/Blogs/PostPage";
import Home from "./components/Home";
import Layout from "./components/layout/Layout";
import ScrollTop from "./components/shared/ScrollTop";
function App() {

  return (
    <Layout>
      <Container maxWidth='lg' sx={{minHeight:'90vh'}}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blogs/:blogId" element={<PostPage/>} />
        <Route path="/authors/:authorId" element={<AuthorPage/>} />
      </Routes>
      </Container>
    </Layout>
  );
}

export default App;
