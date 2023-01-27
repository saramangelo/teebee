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

document.querySelector('#comment-submit-button').addEventListener('click', submitComment);

// create/edit/delete comments

// const title = document.querySelector("#blog-title");
// const contents = document.querySelector("#blog-contents");

// let post_id = 0;
// console.log(post_id);

// const newFormHandler = async (event) => {
//   event.preventDefault();

//   let post_title = title.value.trim();
//   let info = contents.value.trim();

//   if (title && contents) {
//     let response;
//     let input = { post_title, contents: info };

//     if (post_id === 0) {
//       response = await fetch(`/api/blogs`, {
//         method: "POST",
//         body: JSON.stringify(input),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//     } else {
//       let updated_post = { ...input, id: post_id };

//       response = await fetch(`/api/blogs`, {
//         method: "PUT",
//         body: JSON.stringify(updated_post),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//     }

//     if (response.ok) {
//       document.location.replace("/dashboard");
//     } else {
//       alert("Failed to create blog");
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.matches(".delete-btn")) {
//     console.log(event.target)
//   if (event.target.hasAttribute("data-id")) {
//     const id = event.target.getAttribute("data-id");

//     const response = await fetch(`/api/blogs/${id}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       document.location.replace("/dashboard");
//     } else {
//       alert("Failed to delete blog");
//     }
//   }
// }
// };

// let edtBtn = document.querySelectorAll('.edit-btn')
// for (let i = 0; i < edtBtn.length; i++) {
//   edtBtn[i].addEventListener("click", editButtonHandler);
// };

// let delBtn = document.querySelectorAll('.delete-btn')
// for (let i = 0; i < delBtn.length; i++) {
//   delBtn[i].addEventListener("click", delButtonHandler);
// };