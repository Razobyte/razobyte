import { useParams } from "react-router-dom";
import FirstBlog from "./FirstBlogpage/FirstBlog";
import SecondBlog from "./SeceondBlog/SecondBlog";
import ThirdBlog from "./ThirdBlog/ThirdBlog";
import FourthBlog from "./FouthBlog/FourthBlog";
import FifthBlog from "./FifthBlog/FifthBlog";
import SixthBlog from "./SixthBlog/SixthBlog";

const BlogDetailRouter = () => {
    const { titles } = useParams();

    // Map slugs to their corresponding components
    const blogComponents = {
        "10-tips-to-improve-your-website-seo": <FirstBlog />,
        "mobile-website-vs-responsive-website": <SecondBlog />,
        "how-to-make-your-e-commerce-website": <ThirdBlog />,
        "figma-vs-adobe-xd": <FourthBlog />,
        "why-e-commerce-brands-are-failing": <FifthBlog />,
        "how-social-media-is-changing": <SixthBlog />
    };

    if (!titles) {
        return <div>Blog not found! Please check the URL.</div>;
    }

    const selectedBlog = blogComponents[titles];

    if (!selectedBlog) {
        return <div>Blog not found! Please check the URL.</div>;
    }

    return selectedBlog;
};

export default BlogDetailRouter;