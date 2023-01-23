const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#blog-title").value.trim();
  const contents = document.querySelector("#blog-contents").value.trim();

  if (title && contents) {
    let input = JSON.stringify({ post_title: title, contents });
    const response = await fetch(`/api/blogs`, {
      method: "POST",
      body: input,
      headers: {
        "Content-Type": "application/json",
      },
    });

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
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    console.log(id);
};
}



document
  .querySelector(".new-blog-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".delete-btn")
  .addEventListener("click", delButtonHandler);

  document
  .querySelector(".edit-btn")
  .addEventListener("click", editButtonHandler);
