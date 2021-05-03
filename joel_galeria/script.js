const images = ["https://i.pinimg.com/474x/c4/66/90/c466907bfa75c5598d6a193a589531a4.jpg", "https://i.pinimg.com/736x/9d/15/26/9d1526d2839cf1ed9ae4f996ae335db0.jpg", "http://pm1.narvii.com/6336/3ef13c74d36b158d4aa112e5e5ced607e6d6c713_00.jpg", "https://i1.sndcdn.com/avatars-000749407945-mkd8zs-t500x500.jpg", "https://i.redd.it/c4txfhq7qku31.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEwVGMZscrMNmb5fhlaZF8jPWSBzR_LrZHbg&usqp=CAU"]
const root = document.querySelector(".root")


images.map((i) => {
	const item = document.createElement("img")
  item.setAttribute("src", i)
  item.setAttribute("class", "item")
  root.appendChild(item)
})

document.querySelectorAll(".item").forEach((i) => {i.addEventListener("click", (e) => {
	e.target.classList.toggle("item-detail")
  e.stopPropagation()
})})