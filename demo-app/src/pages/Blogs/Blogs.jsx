import React, { useState } from "react";
import { BlogCard } from "../../components/BlogCard/BlogCard";

// let viewType = "LIST"; Normal Vanilla JS Variable. UI Doesn't react to this variable in REACT JS we have to use HOOKS

const blogs = [
  {
    image: "https://picsum.photos/id/1018/400/200",
    title: "",
    body: "Goa is famous for its golden beaches, nightlife, and seafood.<br />Don't forget to visit Baga and Palolem.<br />Perfect for both party-goers and peace-seekers.",
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
      <button onClick={onViewChange}>
        {viewType === "LIST" ? "Tile" : "List"} View
      </button>
      <h3>Blogs Page</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          flexDirection: viewType === "LIST" ? "column" : "",
        }}
      >
        {blogs.map((blog, index) => {
          return <BlogCard key={index} {...blog} viewType={viewType} />;
        })}
      </div>
    </div>
  );
};
