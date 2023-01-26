const title = document.querySelector("#blog-title");
const contents = document.querySelector("#blog-contents");

let post_id = 0;

const newFormHandler = async (event) => {
  event.preventDefault();

  let post_title = title.value.trim();
  let info = contents.value.trim();

  if (title && contents) {
    let response;
    let input = { post_title, contents: info };

    if (post_id === 0) {
      response = await fetch(`/api/blogs`, {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      let updated_post = { ...input, id: post_id };

      response = await fetch(`/api/blogs`, {
        method: "PUT",
        body: JSON.stringify(updated_post),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create blog");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete blog");
    }
  }
};

const editButtonHandler = async (event) => {
  event.preventDefault();
  if(event.target.matches(".edit-btn")) {

  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/blogs/${id}`);
    const data = await response.json();
    console.log(data);

    title.value = data.post_title;
    contents.value = data.contents;
    post_id = data.id;

    
  }
  
}
};

document
  .querySelector(".new-blog-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".delete-btn")
  .addEventListener("click", delButtonHandler);

document.addEventListener("click", editButtonHandler);
