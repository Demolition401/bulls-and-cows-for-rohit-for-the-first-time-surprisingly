var button



function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  button = createButton("Submit")
  button.position(400,300)
  button.mousePressed()
  button.style("backgroundColor", "grey")
  button.style("borderRadius", "100px")
  button.style("width", "100px")
  button.style("height", "100px")
  button.style("color", "midnightblue")
  button.style("fontWeight", "bold")
  button.style("fontSize", "25px")

  inp = createInput().attribute("placeholder", "Word")
  inp.position(125,325)
  inp.style("borderRadius", "25px")
  inp.style("height", "50px")
  inp.style("textAlign", "center")
  inp.style("fontSize", "20px")
  inp.style("color", "midnightblue")

  Word = createElement("h1")
  Word.html("Word")
  Word.position(600,100)

  Bulls = createElement("h1")
  Bulls.html("Bulls")
  Bulls.position(900,100)

  Cows = createElement("h1")
  Cows.html("Cows")
  Cows.position(1200,100)

}

function draw() {
  background(255,255,255);  
  drawSprites();

  line(750, 100, 750,700)
  line(1050, 100, 1050, 700)

}