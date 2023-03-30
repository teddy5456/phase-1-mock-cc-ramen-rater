document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    fetch('http://localhost:3000/ramen/1')
      .then(resp => resp.json())
      .then(ramen => {
        const detailImage = document.querySelector('.detail-image');
        const name = document.querySelector('.name');
        const restaurant = document.querySelector('.restaurant');
        const ratingDisplay = document.querySelector('#rating-display');
        const commentDisplay = document.querySelector('#comment-display');
        
        detailImage.src = ramen.image;
        name.textContent = ramen.name;
        restaurant.textContent = ramen.restaurant;
        ratingDisplay.textContent = ramen.rating;
        commentDisplay.textContent = ramen.comment;
      })
      .catch(error => console.log(error));
  });
 
  const ramenMenu = document.querySelector('#ramen-menu');
  const ramenDetail = document.querySelector('#ramen-detail');
  const ratingDisplay = document.querySelector('#rating-display');
  const commentDisplay = document.querySelector('#comment-display');
  const newRamenForm = document.querySelector('#new-ramen');

  fetch('http://localhost:3000/ramens') 
    .then(response => response.json())
    .then(ramenArray => {
      ramenArray.forEach(ramen => {
        const ramenImage = document.createElement('img');
        ramenImage.src = ramen.image;
        ramenImage.alt = ramen.name;
        ramenMenu.appendChild(ramenImage);

        
        ramenImage.addEventListener('click', () => {
          ramenDetail.querySelector('.detail-image').src = ramen.image;
          ramenDetail.querySelector('.name').textContent = ramen.name;
          ramenDetail.querySelector('.restaurant').textContent = ramen.restaurant;
          ratingDisplay.textContent = ramen.rating;
          commentDisplay.textContent = ramen.comment;
        });
      });
    });

  
  newRamenForm.addEventListener('submit', event => {
    event.preventDefault();

    const newRamen = {
      name: document.querySelector('#new-name').value,
      restaurant: document.querySelector('#new-restaurant').value,
      image: document.querySelector('#new-image').value,
      rating: document.querySelector('#new-rating').value,
      comment: document.querySelector('#new-comment').value
    };

    const newRamenImage = document.createElement('img');
    newRamenImage.src = newRamen.image;
    newRamenImage.alt = newRamen.name;
    ramenMenu.appendChild(newRamenImage);

    
    
    newRamenImage.addEventListener('click', () => {
      ramenDetail.querySelector('.detail-image').src = newRamen.image;
      ramenDetail.querySelector('.name').textContent = newRamen.name;
      ramenDetail.querySelector('.restaurant').textContent = newRamen.restaurant;
      ratingDisplay.textContent = newRamen.rating;
      commentDisplay.textContent = newRamen.comment;
    });

    
    newRamenForm.reset();
  });

});
