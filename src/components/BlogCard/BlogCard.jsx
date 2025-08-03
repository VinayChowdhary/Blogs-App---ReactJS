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
          border: "1.5px solid #d1d5db",
          borderRadius: "10px",
          width: "220px",
          height: "500px",
          margin: "10px",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
          transition: "box-shadow 0.2s",
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          style={{
            width: "100%",
            height: "120px",
            objectFit: "cover",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            marginBottom: "6px",
          }}
        />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "12px 12px 10px 12px",
            minHeight: 0,
            marginTop: "5px",
          }}
        >
          {/* Title always at the top */}
          <h2
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              margin: "5 0 6px 0",
              color: "#22223b",
              lineHeight: "1.2",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </h2>

          {/* Body (show truncated or full text) */}
          <div
            style={{
              color: "#414267",
              fontSize: "0.98rem",
              lineHeight: "1.3",
              marginBottom: "10px",
              flex: "1 1 auto",
              overflow: "hidden",
              minHeight: "38px",
            }}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: isExpanded ? body : truncateBody(body, 80),
              }}
            />
          </div>

          {/* Footer: Button and meta info always at bottom */}
          <div>
            {body.length > 80 && (
              <button
                onClick={toggleReadMore}
                style={{
                  width: "100%",
                  padding: "8px 0",
                  background: "#4361ee",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  fontSize: "15px",
                  cursor: "pointer",
                  boxShadow: "0 1px 3px rgba(67,97,238,0.13)",
                  transition: "background 0.15s, color 0.15s, transform 0.09s",
                  outline: "none",
                  marginBottom: "6px",
                }}
                onMouseDown={(e) =>
                  (e.currentTarget.style.transform = "scale(0.96)")
                }
                onMouseUp={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                {isExpanded ? "Show Less" : "Show More"}
              </button>
            )}
            <div
              style={{
                fontSize: "0.93rem",
                color: "#586069",
                marginTop: "auto",
              }}
            >
              <p>
                <b>Author :</b> {author?.name ?? "NA"}
              </p>
              <p>
                <b>Published :</b> {others.isPublished}
              </p>
              <p>
                <b>Deleted :</b> {others.isDeleted ? others.isDeleted : "NA"}
              </p>
            </div>
          </div>
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
