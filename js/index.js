$('#see-more').on('click', () => {
  let images = $('#images').position().top

  $('html, body').animate(
    {
      scrollTop: images
    }, 900
  )
})