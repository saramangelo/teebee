const submitComment = async () => {
  const comments = document.querySelector('#comment').value.trim();
  const blog_id = document.querySelector('#opportunity');
  let blogId = blog_id.getAttribute('data-id');
  console.log(blogId);
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

      document.location.replace(`/opportunity/${blogId}`);
    } else {
    }
  }
};

document.querySelector('.btn').addEventListener('click', submitComment);
