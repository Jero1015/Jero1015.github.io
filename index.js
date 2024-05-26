const btnLike1 = document.getElementById("btnLike1")
const countLikes1 = document.getElementById("countLikes1")
const btnLike2 = document.getElementById("btnLike2")
const countLikes2 = document.getElementById("countLikes2")

const btnHAHA1 = document.getElementById("btnHAHA1")
const countHAHA1 = document.getElementById("countHAHA1")
const btnHAHA2 = document.getElementById("btnHAHA2")
const countHAHA2 = document.getElementById("countHAHA2")
function clickLike1() {
  let totalLikes1 = parseInt(countLikes1.value) + 1
  countLikes1.textContent = totalLikes1.toString()
}
function clickLike2() {
  let totalLikes2 = parseInt(countLikes2.value) + 1
  countLikes2.textContent = totalLikes2.toString()
}

function clickHAHA1() {
  let totalHAHA1 = parseInt(counHAHA1.value) + 1
  countHAHA1.textContent = totalHAHA1.toString()
}
function clickHAHA2() {
  let totalHAHA2 = parseInt(countHAHA2.value) + 1
  countHAHA2.textContent = totalHAHA2.toString()
}
btnLike1.addEventListener("click",clickLike1)
btnLike2.addEventListener("click",clickLike2)

btnHAHA1.addEventListener("click",clickHAHA1)
btnHAHA2.addEventListener("click",clickHAHA2)
