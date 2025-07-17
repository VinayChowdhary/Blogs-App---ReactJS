export const BlogCard = (props) => {
    const { image, title, body, author, ...others } = props;
  if (!title) {
    return <div>The article is unavailable due to technical reasons.</div>;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "2px solid black",
        marginBottom: "10px",
      }}
    >
      <img
        style={{
          maxWidth: "200px",
        }}
        src={image}
      />
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
        {/* <p><b>Author :</b>{author?author.name:"NA"}</p> */}
        <p>
          <b>Author :</b>{author?.name ?? "NA"}
        </p>
        <p><b>Published :</b> {others.isPublished}</p>
        <p><b>Deleted :</b> {others.isDeleted ? others.isDeleted : "NA"}</p>
      </div>
    </div>
  );
};
