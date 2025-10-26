// detail.hbs 전용 스크립트
const postId = document.getElementById('postId').value;
const deleteButton = document.getElementById('realDeleteButton');
const cancelUpdateButton = document.getElementById('cancelUpdateButton');
const realUpdateButton = document.getElementById('realUpdateButton');
const changeUpdateModeButton = document.getElementById(
  'changeUpdateModeButton',
);
deleteButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (confirm('정말 삭제하시겠습니까?')) {
    fetch(`/posts/delete/${postId}`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          window.location.href = '/posts';
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }
});
cancelUpdateButton.addEventListener('click', (e) => {
  e.preventDefault();
  realUpdateButton.style.display = 'none';
  changeUpdateModeButton.style.display = 'block';
  cancelUpdateButton.style.display = 'none';
});
changeUpdateModeButton.addEventListener('click', (e) => {
  e.preventDefault();
  realUpdateButton.style.display = 'block';
  changeUpdateModeButton.style.display = 'none';
  deleteButton.style.display = 'none';
  cancelUpdateButton.style.display = 'block';
  document.querySelectorAll('.updatePossibleData').forEach((input) => {
    input.style.display = 'none';
  });
  document.querySelectorAll('.updateData').forEach((input) => {
    input.style.display = 'block';
  });
});
document.getElementById('updateForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  await fetch(form.action, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 200) {
        console.log(data);
        window.location.replace(`/posts/${postId}`);
      } else {
        alert(data.message);
      }
    })
    .catch((error) => {
      alert(error.message);
    });
});
document.getElementById('commentForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  await fetch(form.action, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 200) {
        console.log(data);
        window.location.replace(`/posts/${postId}`);
      } else {
        alert(data.message);
      }
    })
    .catch((error) => {
      alert(error.message);
    });
});
function deleteComment(commentId) {
  fetch(`/comments/delete/${commentId}`, {
    method: 'POST',
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 200) {
        window.location.replace(`/posts/${postId}`);
      } else {
        alert(data.message);
      }
    });
}
