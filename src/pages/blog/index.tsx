import Footer from "../../components/Footer";
import BarNav from "../../components/NavBar";
import { ContainerBlog } from "./styles";

const Blog = () => {
  return (
    <>
      <BarNav />
      <ContainerBlog>
        <h1>Blog</h1>
      </ContainerBlog>
      <Footer />
    </>
  );
};
export default Blog;
