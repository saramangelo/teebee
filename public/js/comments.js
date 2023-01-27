const submitComment = async () => {

console.log('clicked')
  const comments = document.querySelector('#comment').value.trim();
  const blog_id = document.querySelector('#blog');
  let blogId = blog_id.getAttribute('data-id');
  console.log(blogId);
  console.log(comments)
  if (comments) {
    console.log(comments);

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
console.log("okay")
      document.location.replace(`/blog/${blogId}`);
    } else {
      alert('Failed to add comment');
    }
  }
};

document.querySelector('#comment-submit-button').addEventListener('click', submitComment);
