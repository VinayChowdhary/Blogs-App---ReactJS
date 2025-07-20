import { useState } from "react";

export const BlogCard = (props) => {
  const { image, title, body, author, ...others } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const truncateBody = (text, maxLength = 100) => {
    if (!text) return "";
    const plainText = text.replace(/<br\s*\/?>/gi, " ");
    return plainText.length > maxLength
      ? plainText.substring(0, maxLength) + "..."
      : plainText;
  };

  const displayedBody = isExpanded ? body : truncateBody(body);

  if (!title) {
    return <div>The article is unavailable due to technical reasons.</div>;
  }

  const renderBody = () => (
    <div>
      <p dangerouslySetInnerHTML={{ __html: displayedBody }}></p>
      {body.length > 100 && (
        <button
          onClick={toggleReadMore}
          style={{
            margin: "12px 0",
            padding: "8px 18px",
            background: "#f59e42", 
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "15px",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0,0,0,0.07)",
            transition: "background 0.15s, color 0.15s, transform 0.09s",
            outline: "none",
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.96)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );

  if (props.viewType === "TILE") {
    return (
      // Tile view
      <div
        style={{
          border: "2px solid black",
          width: "200px",
          height: "400px",
          overflow: "hidden",
          margin: "10px",
        }}
      >
        <img src={image} style={{ maxWidth: "100%" }} />
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
          {/* <p><b>Author :</b>{author?author.name:"NA"}</p> */}
          <p>
            <b>Author :</b>
            {author?.name ?? "NA"}
          </p>
          <p>
            <b>Published :</b> {others.isPublished}
          </p>
          <p>
            <b>Deleted :</b> {others.isDeleted ? others.isDeleted : "NA"}
          </p>
        </div>
      </div>
    );
  }
  return (
    // List View
    <div
      style={{
        display: "flex",
        border: "2px solid black",
        borderRadius: "8px",
        marginBottom: "16px",
        overflow: "hidden",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        width: "100%",
        minHeight: "200px",
        background: "#fff",
      }}
    >
      <img
        style={{
          width: "250px",
          height: "auto",
          objectFit: "cover",
          flexShrink: 0,
        }}
        src={image}
      />
      <div style={{ padding: "16px", flex: 1 }}>
        <h2 style={{ marginTop: 0 }}>{title}</h2>
        {renderBody()}
        {/* <p><b>Author :</b>{author?author.name:"NA"}</p> */}
        <p>
          <b>Author :</b>
          {author?.name ?? "NA"}
        </p>
        <p>
          <b>Published :</b> {others.isPublished}
        </p>
        <p>
          <b>Deleted :</b> {others.isDeleted ? others.isDeleted : "NA"}
        </p>
      </div>
    </div>
  );
};
