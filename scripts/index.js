// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
let query=`https://masai-mock-api.herokuapp.com/news?q=${query}`;
let country=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`;
let container =document.getElementById("results");
let data=[];
  
 fetch(country)
 .then(function(res){
   return res.json();
 })
 .then(function(res){
   data=res.articles;
   console.log(data);
   displayData(data);
  
 });
 let arr=JSON.parse(localStorage.getItem("news"))|| [];

 function displayData(arr){
   document.getElementById("news");

  arr.forEach(function(el){
    
    let div=document.createElement("div");
    let image=document.createElement("img");
    image.src=el.image;
    let name=document.createElement("p");
    name.innerText=el.name;
    let price=document.createElement("p");
    price.innerText=el.price;
    let btn=document.createElement("button");
    btn.innerText="store the news";
    btn.style.cursor="pointer";
    btn.style.textAlign="center";
   
  div.append(image,name,price,btn);
  document.querySelector("#results").append(div);
});

 }
 function addToCart(){
   console.log(data);
   data.push(el);
   localStorage.setItem("news",JSON.stringify(data));
 }

 


  
