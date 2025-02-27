import React from "react";
import CommentCard from "./CommentCard";

export const CommentList = ({ comments }) => {
  return (
    <div>
      {comments?.map((comment) => (
        <CommentCard comment={comment} key={comment?._id} />
      ))}
    </div>
  );
};

const CommentsContainer = ({ comments }) => {
  console.log(comments);

  return (
    <div className="">
      <h1 className="text-2xl font-semibold">Comments</h1>
      {!comments?.length ? (
        <div>No Comments yet!!!</div>
      ) : (
        <CommentList comments={comments} />
      )}
    </div>
  );
};

export default CommentsContainer;
