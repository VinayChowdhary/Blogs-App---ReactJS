import React, { useState } from "react";
import { BlogCard } from "../../components/BlogCard/BlogCard";

// let viewType = "LIST"; Normal Vanilla JS Variable. UI Doesn't react to this variable in REACT JS we have to use HOOKS

const blogs = [
  {
    image: "https://picsum.photos/id/1018/400/200",
    title: "",
    body: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod, saepe, impedit praesentium dolore quia laudantium nisi molestiae exercitationem earum maxime deserunt iusto, recusandae magni illo pariatur voluptate animi unde!    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod, saepe, impedit praesentium dolore quia laudantium nisi molestiae exercitationem earum maxime deserunt iusto, recusandae magni illo pariatur voluptate animi unde! Goa is famous for its golden beaches, nightlife, and seafood.<br />Don't forget to visit Baga and Palolem.<br />Perfect for both party-goers and peace-seekers.",
    author: {
      name: "Issac",
    },
    isPublished: "true",
    isDeleted: "false",
  },
  {
    image: "https://picsum.photos/id/1005/400/200",
    title: "The Rise of Artificial Intelligence",
    body: "AI is transforming industries across the globe.<br />From healthcare to self-driving cars, the applications are endless.<br />Stay updated with the latest trends in tech.",
    author: {
      name: "Vinay",
    },
    isPublished: "false",
    isDeleted: "false",
  },
  {
    image: "https://picsum.photos/id/1020/400/200",
    title: "Top 5 Indian Dishes You Must Try",
    body: "India offers a variety of mouth-watering dishes.<br />Don’t miss Butter Chicken, Biryani, and Masala Dosa.<br />Each region has its own delicious specialties.",
    isPublished: "true",
  },
  {
    image: "https://picsum.photos/id/1036/400/200",
    title: "A Trek to the Himalayas",
    body: "The Himalayas offer some of the most breathtaking trekking routes.<br />Best time to visit is between May and October.<br />Remember to stay hydrated and well-equipped.",
    author: {
      name: "Pavan",
    },
    isPublished: "false",
    isDeleted: "false",
  },
  {
    image: "https://picsum.photos/id/1003/400/200",
    title: "Why Reading Every Day Makes You Smarter",
    body: "Reading improves focus, vocabulary, and knowledge.<br />Make it a habit to read at least 15 minutes a day.<br />Start with topics you enjoy and slowly expand.",
    author: {
      name: "Samuel",
    },
    isPublished: "false",
    isDeleted: "false",
  },
];

export const Blogs = () => {
  const [viewType, setViewType] = useState("LIST");
  const onViewChange = () => {
    // console.log("View button clicked", viewType);
    // viewType = viewType === "LIST" ? "TILE" : "LIST"; Vanilla JS Variable Assignment
    const newViewType = viewType === "LIST" ? "TILE" : "LIST";

    setViewType(newViewType);
  };
  return (
    <div>
      <button
        onClick={onViewChange}
        style={{
          margin: "16px 0",
          padding: "10px 24px",
          background: viewType === "LIST" ? "#2563eb" : "#22c55e",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          fontSize: "16px",
          letterSpacing: "0.5px",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          transition: "background 0.2s, color 0.2s, transform 0.1s",
          outline: "none",
        }}
        onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.96)")}
        onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {viewType === "LIST" ? "Tile" : "List"} View
      </button>
      <h3>Blogs Page</h3>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: viewType === "LIST" ? "column" : "",
          alignItems: viewType === "LIST" ? "stretch" : "flex-start",
          gap: "16px", 
        }}
      >
        {blogs.map((blog, index) => {
          return <BlogCard key={index} {...blog} viewType={viewType} />;
        })}
      </div>
    </div>
  );
};
