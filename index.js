let homePoints = 0
let guestPoints = 0

let homeScoreEl = document.getElementById("home-points")
let guestScoreEl = document.getElementById("guest-points")

function addPoints(points, team) {
  if (team == "home") {
    homePoints += points
    homeScoreEl.textContent = homePoints
  } else {
    guestPoints += points
    guestScoreEl.textContent = guestPoints
  }
}