const submitComment = async () => {
  const comments = document.querySelector("#comment").value.trim();
  const blog_id = document.querySelector("#blog");
  let blogId = blog_id.getAttribute("data-id");

  if (comment) {
    console.log(comment);

    let input = JSON.stringify({
      comments,
      blog_id: blogId,
    });

    const response = await fetch(`/api/comments/`, {
      method: "POST",
      body: input,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // document.location.replace(`/blog/${blogId}`);
      document.location.reload();
    } else {
      alert("Failed to add comment");
    }
  }
};

// edit/delete comments

const edtButtonHandler = async (event) => {
  console.log("clicked");
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    if (comment) {
      console.log(comment);

      let updated_comment = {
        ...comments,
        blog_id: blogId,
      };

      const response = await fetch(`/api/comments/`, {
        method: "PUT",
        body: JSON.stringify(updated_comment),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // document.location.replace(`/blog/${id}`);
        document.location.reload();
      } else {
        alert("Failed to add comment");
      }
    }
  }
};

const deleteButtonHandler = async (event) => {
  console.log("clicked");
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      // document.location.replace(`/blog${id}`);
      document.location.reload();
    } else {
      alert("Failed to delete comment");
    }
  }
};

let editBtn = document.querySelectorAll(".edt-comment-btn");
for (let i = 0; i < editBtn.length; i++) {
  editBtn[i].addEventListener("click", edtButtonHandler);
}

let deleteBtn = document.querySelectorAll(".del-comment-btn");
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", deleteButtonHandler);
}

document
  .querySelector("#comment-submit-button")
  .addEventListener("click", submitComment);
