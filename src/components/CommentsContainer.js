import React from "react";
import CommentCard from "./CommentCard";

const commentData = [
  {
    id: 1,
    username: "ritik",
    text: "this is a comment",
    likes: 0,
    dislikes: 0,
    replies: [
      {
        id: 1,
        username: "prachi",
        text: "this is a reply",
        likes: 0,
        dislikes: 0,
        replies: [],
      },
      {
        id: 2,
        username: "ram",
        text: "this is a reply",
        likes: 0,
        dislikes: 0,
        replies: [],
      },
      {
        id: 3,
        username: "shyam",
        text: "this is a reply",
        likes: 0,
        dislikes: 0,
        replies: [
          {
            id: 1,
            username: "maroof",
            text: "this is a reply",
            likes: 0,
            dislikes: 0,
            replies: [],
          },
          {
            id: 2,
            username: "shubham",
            text: "this is a reply",
            likes: 0,
            dislikes: 0,
            replies: [
              {
                id: 1,
                username: "ritik",
                text: "this is a reply",
                likes: 0,
                dislikes: 0,
                replies: [],
              },
              {
                id: 2,
                username: "prachi",
                text: "this is a reply",
                likes: 0,
                dislikes: 0,
                replies: [
                  {
                    id: 1,
                    username: "ritik",
                    text: "this is a reply",
                    likes: 0,
                    dislikes: 0,
                    replies: [],
                  },
                  {
                    id: 2,
                    username: "prachi",
                    text: "this is a reply",
                    likes: 0,
                    dislikes: 0,
                    replies: [],
                  },
                  {
                    id: 3,
                    username: "ram",
                    text: "this is a reply",
                    likes: 0,
                    dislikes: 0,
                    replies: [],
                  },
                ],
              },
              {
                id: 3,
                username: "ram",
                text: "this is a reply",
                likes: 0,
                dislikes: 0,
                replies: [],
              },
            ],
          },
          {
            id: 3,
            username: "ram",
            text: "this is a reply",
            likes: 0,
            dislikes: 0,
            replies: [],
          },
        ],
      },
      {
        id: 4,
        username: "ram",
        text: "this is a reply",
        likes: 0,
        dislikes: 0,
        replies: [],
      },
    ],
  },
  {
    id: 2,
    username: "prachi",
    text: "this is a comment",
    likes: 0,
    dislikes: 0,
    replies: [],
  },
  {
    id: 3,
    username: "ram",
    text: "this is a comment",
    likes: 0,
    dislikes: 0,
    replies: [],
  },
];

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <CommentCard comment={comment} />
          <div className="ml-5 pl-2 border-l-2 border-gray-400">
            <CommentList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-semibold">Comments</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
