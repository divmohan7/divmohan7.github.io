//For first main page
function buildTimelineContent() {
    console.log("Main page loaded");
  
    let contentArea = document.getElementsByClassName("timelineContainer")[0]
  
    companyData.forEach((place) => {
      let company = new Company(place.identifier, place.title, place.date, place.logo, place.founderImg, place.founder, place.description)
  
      let companyContainer = document.createElement("div")
      companyContainer.classList.add("companyContainer")
      companyContainer.id = company.identifier + "Timeline"
  
      let logo = document.createElement("img")
      logo.classList.add("mainLogo")
      logo.src = "images/" + company.logo
      companyContainer.appendChild(logo)
  
      let dot = document.createElement("div")
      dot.classList.add("timelineDot")
      companyContainer.appendChild(dot)
  
      let date = document.createElement("div")
      date.textContent = company.date
      date.classList.add("mainDate")
      companyContainer.appendChild(date)
  
      let title = document.createElement("div")
      title.textContent = company.title
      title.classList.add("mainTitle")
      companyContainer.appendChild(title)
  
      contentArea.appendChild(companyContainer)
  
    })
  }
  
  //For all subpages below main page
  function buildSubpageContent() {
    companyData.forEach((place) => {
      console.log("Sub page loaded");
      let company = new Company(place.identifier, place.title, place.date, place.logo, place.founderImg, place.founder, place.description)
  
      let contentArea = document.getElementById(company.identifier)
  
      let subpageContainer = document.createElement("div")
      subpageContainer.classList.add("subpageContainer")
  
      let logo = document.createElement("img")
      logo.classList.add("companyLogo")
      logo.src = "images/" + company.logo
      logo.setAttribute("data-aos", "fade-right")
      subpageContainer.appendChild(logo)
  
      let founderImg = document.createElement("img")
      founderImg.classList.add("companyFounderImg")
      founderImg.src = "images/" + company.founderImg
      founderImg.setAttribute("data-aos", "fade-right")
      subpageContainer.appendChild(founderImg)
  
      let opacityContainer = document.createElement("div")
      opacityContainer.classList.add("opacityContainer")
      opacityContainer.setAttribute("data-aos", "fade-left")
      subpageContainer.appendChild(opacityContainer)
  
      let companyContent = document.createElement("div")
      companyContent.classList.add("companyContent")
      opacityContainer.appendChild(companyContent)
  
      let title = document.createElement("div")
      title.textContent = company.title
      title.classList.add("companyTitle")
      companyContent.appendChild(title)
  
      let founderLabel = document.createElement("div")
      founderLabel.textContent = getFounderLabel(company.identifier)
      founderLabel.classList.add("founderLabel")
      companyContent.appendChild(founderLabel)
  
      let founder = document.createElement("div")
      founder.textContent = company.founder
      founder.classList.add("companyFounder")
      companyContent.appendChild(founder)
  
      let dateLabel = document.createElement("div")
      dateLabel.textContent = "Date Founded:"
      dateLabel.classList.add("dateLabel")
      companyContent.appendChild(dateLabel)
  
      let date = document.createElement("div")
      date.textContent = company.date
      date.classList.add("foundingDate")
      companyContent.appendChild(date)
  
      let description = document.createElement("div")
      description.textContent = company.description
      description.classList.add("companyDescription")
      companyContent.appendChild(description)
  
      let downArrow = createDownArrowFor(company)
      subpageContainer.appendChild(downArrow)
  
      contentArea.appendChild(subpageContainer)
    })
  
  }
  
  function getFounderLabel(company) {
    switch (company) {
      case "mcdonalds":
      case "burgerKing":
      case "pizzaHut":
      case "mcdonalds":
      case "pandaExpress":
        return "Founders:"
        break;
  
      case "kfc":
      case "tacoBell":
      case "wendys":
        return "Founder:"
        break;
  
      default:
        return "Founder(s):"
        break;
    }
  }
  
  function createDownArrowFor(company) {
    let downArrow = document.createElement("div")
    downArrow.classList.add("downArrow")
  
    let downArrowImg = document.createElement("img")
    downArrowImg.classList.add("subpageArrow")
    downArrowImg.src = "icons/" + "icon_down_arrow_white.png"
    downArrowImg.id = company.nextScrollPageIdentifier + "GoTo";
    downArrow.appendChild(downArrowImg)
  
    if (company.identifier == "pandaExpress") {
      downArrowImg.classList.add("lastPageArrow")
  
      let scrollText = document.createElement("div")
      scrollText.textContent = "Scroll To Top"
      scrollText.classList.add("scrollText")
      downArrow.appendChild(scrollText)
    }
  
    return downArrow
  }
  