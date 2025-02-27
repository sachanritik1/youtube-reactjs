import React from "react";

const CreateComment = ({ videoId, parent, setComments }) => {
  const createComment = async (e) => {
    e.preventDefault();
    const content = e.target[0].value;

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/comments/" + videoId,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
          body: JSON.stringify({ content, parent }),
        }
      );
      const data = await response.json();

      if (!data.success) {
        return;
      }
      e.target[0].value = "";
      console.log(data.data);
      setComments((prev) => {
        return [data.data, ...prev];
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={createComment}>
      <input type="text" />
      <button
        type="submit"
        className="bg-gray-500 text-white rounded-lg px-2 py-1"
      >
        Comment
      </button>
    </form>
  );
};

export default CreateComment;
