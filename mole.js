window.addEventListener("DOMContentLoaded", () => {
  function popUpRandomMole() {
    let moles = document.querySelectorAll(".wgs__mole-head")
    let randomNum = Math.floor((Math.random() * 8))

    let currentMole = moles[randomNum]
    currentMole.classList.remove("wgs__mole-head--hidden")

    setTimeout(hideMole, 3000, currentMole)
  
  }

  function hideMole(mole) {
    mole.classList.add("wgs__mole-head--hidden")

    setTimeout(popUpRandomMole, 1000)
  }

  setTimeout(popUpRandomMole, 0)


  document.querySelector(".pf").addEventListener("click", (e) => {
    e.target.classList.add("wgs__mole-head--hidden")
  })
})
