const testimonial=[
  {
    id:1,
    name:"Dave Bryson",
    img:"img/customers/dave.jpg",
    text:"Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical",
  },
  {
    id:2,
    name:"Ben Hadley",
    img:"img/customers/ben.jpg",
    text:"The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
  },
  {
    id:3,
    name:"Steve Miller",
    img:"img/customers/steve.jpg",
    text:" Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
  },
  {
    id:4,
    name:"Hannah Smith",
    img:"img/customers/hannah.jpg",
    text:" I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
  },
];

const gallery=[
  {
    id:1,
    img_src:"img/gallery/gallery-1.jpg",
  },
  {
    id:2,
    img_src:"img/gallery/gallery-2.jpg",
  },
  {
    id:3,
    img_src:"img/gallery/gallery-3.jpg",
  },
  {
    id:4,
    img_src:"img/gallery/gallery-4.jpg",
  },
  {
    id:5,
    img_src:"img/gallery/gallery-5.jpg",
  },
  {
    id:6,
    img_src:"img/gallery/gallery-6.jpg",
  },
  {
    id:7,
    img_src:"img/gallery/gallery-7.jpg",
  },
  {
    id:8,
    img_src:"img/gallery/gallery-8.jpg",
  },
  {
    id:9,
    img_src:"img/gallery/gallery-9.jpg",
  },
  {
    id:10,
    img_src:"img/gallery/gallery-10.jpg",
  },
  {
    id:11,
    img_src:"img/gallery/gallery-11.jpg",
  },
  {
    id:12,
    img_src:"img/gallery/gallery-12.jpg",
  },
];


const testimonials = document.querySelector(".testimonials");
const gallerys = document.querySelector(".gallerys");

//顯示所有item的資料
window.addEventListener('DOMContentLoaded',()=>{
  displayTestimonialItems(testimonial);
  displayGalleryItems(gallery);
});

const displayTestimonialItems = (testimonialItems) =>{
  let displayTestimonial = testimonialItems.map( (item) =>{
    console.log('item',item);

  return `
  <figure class="testimonial">
              <img
                class="testimonial-img"
                alt="Photo of customer Dave Bryson"
                src=${item.img}
              />
              <blockquote class="testimonial-text">
               ${item.text}
              </blockquote>
              <p class="testimonial-name">&mdash; ${item.name}</p>
            </figure>
  `
});
  displayTestimonial = displayTestimonial.join(""); 
  console.log('displayTestimonial',displayTestimonial)
  testimonials.innerHTML = displayTestimonial;
}

const displayGalleryItems = (galleryItems) =>{
  let displayGallery = galleryItems.map( (galleryItem) =>{
    console.log('galleryItem',galleryItem);

  return `
  <figure class="gallery">
  <img
      src=${galleryItem.img_src}
      alt="Photo of beautifully arranged food"
  />
  <!-- <figcaption>Caption</figcaption> -->
</figure>
  `
});
  displayGallery = displayGallery.join("");
  console.log('displayGallery',displayGallery)
  gallerys.innerHTML = displayGallery;
}

