const submitComment = async () => {

  const comments = document.querySelector('#comment').value.trim();
  const blog_id = document.querySelector('#blog');
  let blogId = blog_id.getAttribute('data-id');

  if (comment) {
    console.log(comment);

    let input = JSON.stringify({
      comments,
      blog_id: blogId,
    });

    const response = await fetch(`/api/comments/`, {
      method: 'POST',
      body: input,
      headers: {
        'Content-Type': 'application/json',
      },

    });

    if (response.ok) {
      document.location.replace(`/blog/${blogId}`);
    } else {
      alert('Failed to add comment');
    }
  }
};



// create/edit/delete comments

// const edtButtonHandler = async (event) => {
//   if (event.target.matches(".edt-btn")) {
//     console.log(event.target)
//   if (event.target.hasAttribute("data-id")) {
//     const id = event.target.getAttribute("data-id");

//     const response = await fetch(`/api/blogs/${id}`, {
//       method: "PUT",
//     });

//     if (response.ok) {
//       document.location.replace(`/blog/${blogId}`);
//     } else {
//       alert("Failed to edit comment");
//     }
//   }
// }
// };

// const deleteButtonHandler = async (event) => {
//   if (event.target.matches(".del-btn")) {
//     console.log(event.target)
//   if (event.target.hasAttribute("data-id")) {
//     const id = event.target.getAttribute("data-id");

//     const response = await fetch(`/api/blogs/${id}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       document.location.replace(`/blog/${blogId}`);
//     } else {
//       alert("Failed to delete comment");
//     }
//   }
// }
// };

// let edtBtn = document.querySelectorAll('.edt-btn')
// for (let i = 0; i < edtBtn.length; i++) {
//   edtBtn[i].addEventListener("click", edtButtonHandler);
// };

// let delBtn = document.querySelectorAll('.del-btn')
// for (let i = 0; i < delBtn.length; i++) {
//   delBtn[i].addEventListener("click", deleteButtonHandler);
// };

document.querySelector('#comment-submit-button').addEventListener('click', submitComment);