const title = document.querySelector("#blog-title");
const contents = document.querySelector("#blog-contents");

let post_id = 0;
console.log(post_id);

const newFormHandler = async (event) => {
  event.preventDefault();

  let post_title = title.value.trim();
  let info = contents.value.trim();
  if (event.target.matches("button")) {
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

    const response = await fetch(`/api/blogs/${id}`);
    const data = await response.json();
    console.log(data);

    title.value = data.post_title;
    contents.value = data.contents;
    post_id = data.id;
  }
};

document.querySelector(".submitBtn").addEventListener("click", newFormHandler);

let edtBtn = document.querySelectorAll(".edit-btn");
for (let i = 0; i < edtBtn.length; i++) {
  edtBtn[i].addEventListener("click", editButtonHandler);
}

let delBtn = document.querySelectorAll(".delete-btn");
for (let i = 0; i < delBtn.length; i++) {
  delBtn[i].addEventListener("click", delButtonHandler);
}
