const feedbackBtn = document.getElementById('feedback-btn');
feedbackBtn.addEventListener('click', () => {
  const formWrap = document.getElementById('form-wrap');
  (formWrap.style.display === 'block') ? formWrap.style.display = 'none' : formWrap.style.display = 'block';
});