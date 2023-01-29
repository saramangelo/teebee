const submitComment = async (event) => {
  event.preventDefault();
  const comments = document.querySelector("#comment").value.trim();
  const blog_id = document.querySelector("#blog");
  let blogId = blog_id.getAttribute("data-id");
console.log('clicked')

  if(comment) 
  if (event.target.matches("button")) {
    console.log(comment);

    let input = JSON.stringify({
      comments,
      blog_id: blogId
    });

    const response = await fetch(`/api/comments/`, {
      method: "POST",
      body: input,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace(`/blog/${blogId}`);
    } else {
      alert("Failed to add comment");
    }
  }
};


// edit comments
// TODO: debug
// let id = 0; ???
// TRY:
//     const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    //* put request to update blog data from dashboard
    //* send fetch to 'api/blog/:id' in order to send through api route in blogs to update existing blog with same blog_id

const edtButtonHandler = async (event) => {
  console.log("clicked");
  // if (event.target.hasAttribute("data-id")) {
  //   const id = event.target.getAttribute('data-id');
  const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1]
    if (event.target.matches("button")) {
      let updated_comment = {
        comments: comments,
        // comments: comments.value?
        blog_id: id,
      };

      const response = await fetch(`/api/comments/${id}`, {
        method: "PUT",
        body: JSON.stringify(updated_comment),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        document.location.replace(`/blog/${id}`);
      } else {
        alert("Failed to add comment");
      }
    }
  };

// delete comments
// TODO: debug
const deleteButtonHandler = async (event) => {
  console.log("clicked");
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute('data-id');
    if (event.target.matches("button")) {
      const response = await fetch(`/api/comments/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        document.location.replace(`/blog/${id}`);
      } else {
        // alert("Failed to delete comment");
      }
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
 