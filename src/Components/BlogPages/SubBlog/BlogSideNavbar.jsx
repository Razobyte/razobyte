import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowRight, MdSearch } from "react-icons/md"; // Import MdSearch
const BlogSidebar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  // Recent posts list
  const recentPosts = [
    { title: "Mobile Website v/s Responsive Website", slug: "mobile-website-vs-responsive-website" },
    { title: "How to Make Your E-commerce Website", slug: "how-to-make-your-e-commerce-website" },
    { title: "Figma v/s Adobe XD", slug: "figma-vs-adobe-xd" },
    { title: "10 Tips to Improve Your Website SEO", slug: "10-tips-to-improve-your-website-seo" },
    { title: "How Social Media is Changing", slug: "how-social-media-is-changing" },
  ];
  // Other posts list including "AI-Powered Automation"
  const otherPosts = [
    { title: "Why E-commerce Brands Are Failing", slug: "why-e-commerce-brands-are-failing" },
    { title: "The Rise of Edge Computing", slug: "the-rise-of-edge-computing" },
    { title: "Cybersecurity in 2024", slug: "cybersecurity-in-2024" },
    { title: "Cloud-Native Development", slug: "cloud-native-development" },
    { title: "The Digital Transformation Journey", slug: "the-digital-transformation-journey" },
    { title: "AI-Powered Automation", slug: "ai-powered-automation" }, // Added new post
  ];
  // Filter posts based on search query
  const filterPosts = (posts) => {
    return posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
  };
  return (
    <div className="blog-sidebar d-md-block d-none shadow-md  bg-white rounded-md py-12">
      {/* Search Bar */}
      <div className="search-bar p-3">
        <div className="d-flex align-items-center relative">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control relative"
          />
          <MdSearch color="#3b7fbf"  className=" md:text-3xl sm:text-xl search-icon absolute right-4" />
        </div>
      </div>
      {/* Recent Posts Section */}
      <div className="blog-post-linkallmaindiv py-4">
        <h3 className="text-left hed3 ps-3">Recent Posts</h3>
        <ul className="para">
          {filterPosts(recentPosts).map((post, index) => (
            <div key={index} className="d-flex align-items-center gap-2">
              <MdKeyboardDoubleArrowRight color="#3b7fbf" size={25} />
              <li onClick={() => navigate(`/blogmain/${post.slug}`)}>{post.title}</li>
            </div>
          ))}
        </ul>
      </div>
      {/* Other Posts Section */}
      <div className="blog-post-linkallmaindiv">
        <h3 className="text-left hed3 ps-3">Other Posts</h3>
        <ul className="para">
          {filterPosts(otherPosts).map((post, index) => (
            <div key={index} className="d-flex align-items-center gap-2">
              <MdKeyboardDoubleArrowRight color="#3b7fbf" size={25} />
              <li onClick={() => navigate(`/blogmain/${post.slug}`)}>{post.title}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default BlogSidebar;
