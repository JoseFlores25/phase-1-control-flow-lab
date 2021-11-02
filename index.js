function scuberGreetingForFeet(free) {
  if (free <= 400) {
    return "This one is on me!";
  }
  if (free > 2000) {
    if (free > 2500) {
      return "No can do.";
    }
    return "I will gladly take your thirty bucks.";
  }
}

function ternaryCheckCity(cityName) {
  const nyc = "NYC";
  if (cityName === nyc) {
    return "Ok, sounds good.";
  }
  if (cityName !== nyc) {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip) {
  if (tip === "generous") {
    return "Thank you so much.";
  } else if (tip === "not as generous") {
    return "Thank you.";
  } else {
    return "Bye.";
  }
}
