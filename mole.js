window.addEventListener("DOMContentLoaded", () => {
  function popUpRandomMole() {
    let moles = document.querySelectorAll(
      ".wgs__mole-head:not(.wgs__mole-head--whacked)"
    );
    let randomNum = Math.floor((Math.random() * moles.length))
    if (moles.length === 0) {
        alert("You Win!")
        return;
    }

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
    e.target.classList.add("wgs__mole-head--hidden");
    e.target.classList.add("wgs__mole-head--whacked");
  })
})
