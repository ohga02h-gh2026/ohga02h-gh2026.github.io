const API_URL = 'https://script.google.com/macros/s/AKfycbx18AS0yi72w7EQwJkQ4WjmdkdHjTz5bspBgaAzNeelLb3mFj1xHiuOqQgUVmX7XCv5/exec';

const loading = document.getElementById("loading");
const list = document.getElementById("menu-list");

fetch(API_URL)
.then(response => response.json())
.then(data => {

loading.style.display = "none";

data.forEach(item => {

const li = document.createElement("li");

li.innerHTML =
`<strong>${item.menu}</strong><br>
時間：${item.time}<br>
${item.desc}`;

list.appendChild(li);

});

})
.catch(error => {

loading.innerText = "データ取得に失敗しました";

console.error(error);

});

function toggleMenu(){

const menu = document.getElementById("nav-menu");

if(menu.style.display === "block"){
menu.style.display = "none";
}else{
menu.style.display = "block";
}

}