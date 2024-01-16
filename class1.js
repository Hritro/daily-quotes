const q = document.querySelector("#quote");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const author = document.querySelector('#author');
const img = document.querySelector('#img');
let quotelist = [
  {
    q: "The future belongs to those who believe in the beauty of their dreams",
    author: "Eleanor Roosevelt",
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiopgFl0xAyFSe-ME4l1Y-mT85yfJhMfRt1A&usqp=CAU'
  },
  { q: "Well done is better than well said",
   author: "Benjamin Franklin" ,
   img : 'https://media.newyorker.com/photos/621e9132b87c24c32d8e18f2/3:2/w_2559,h_1706,c_limit/Shouts-Dunigan-Benjamin-Franklin.jpg'},
  { q: "Give up on your dream and die",
   author: "Levi ackerman",
  img : 'https://i.pinimg.com/736x/55/90/a9/5590a9c98c464d0cd2ac9136d889ff28.jpg' },
  {
    q: "Mara Khaoya jkhn nischit tkhn mara ta ke enjoy korai sreyo",
    author: "Hritro",
    img :'20200204_134511.jpg'
  },
];
let qlen = quotelist.length;


img.src = quotelist[0].img
q.innerHTML = quotelist[0].q;
author.innerHTML = "-"+quotelist[0].author
let index = 0;
next.addEventListener("click", function () {
  index += 1; //or index++;
  if (index == qlen) {
    index = 0;
  }
  img.src = quotelist[index].img
  q.innerHTML = quotelist[index].q;
  author.innerHTML = "-"+quotelist[index].author
});

prev.addEventListener("click", function () {
  index -= 1; //or index--;
  if (index < 0) {
    index = qlen - 1;
  }
  img.src = quotelist[index].img
  q.innerHTML = quotelist[index].q;
  author.innerHTML = "-"+quotelist[index].author
});
