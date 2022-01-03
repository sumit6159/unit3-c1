

 async function getData(){
  try{
    var res = await fetch("https://themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    var data = await res.json()
    var finaldata = data.meals
    console.log(finaldata)
    showDishes(finaldata)
  }
  catch(err){
      console.log("error found")
  }
 }
 getData();
 var cart_count = 0
 var cart =[]

 function showDishes(data){
     data.forEach(element => {
         var container = document.getElementById("container")
         var dishDiv = document.createElement("div");
         var img = document.createElement("img")
         img.src = element.strMealThumb
         img.classList.add("image")
         var dishname = document.createElement("h3")
         dishname.innerText= element.strMeal
         var price = document.createElement("h3")
         price.innerText = Math.floor(Math.random(100)*500)
         var btn = document.createElement("button")
         btn.innerText = "Add to cart"
         btn.addEventListener("click", function(){
           addToCart(element)
           cart_count++
           document.querySelector(".h2").textContent=cart_count
           var mealobj={
            image:img,
            name : dishname,
            price:price,
          }
         })
         dishDiv.append(img, dishname , price, btn)
         container.append(dishDiv)
         

        });
 }
  // document.querySelector("#cart").addEventListener("click",cart)
   function addToCart(elem){
       cart.push(mealobj)
       localStorage.setItem("meals",JSON.stringify(cart))
   }
   
   document.querySelector(".h2").addEventListener("click",function(){
     window.location.href="cart.html"
   })