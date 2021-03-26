document.addEventListener('DOMContentLoaded', () => {

    const aboutModal = document.getElementById('about-modal')
    const skillsModal = document.getElementById('skills-modal')
    const projectsModal = document.getElementById('projects-modal')
    const stuffModal = document.getElementById('stuff-modal')
    const contactModal = document.getElementById('contact-modal')
    aboutModal.style.display = 'none'
    skillsModal.style.display = 'none'
    projectsModal.style.display = 'none'
    stuffModal.style.display = 'none'
    contactModal.style.display = 'none'
    const container = document.getElementById('container')
    const scoreDisplay = document.getElementById('score')
    const width = 28
    let ghostPoints = 0
    let score = 0
    const grid = document.querySelector('#grid')
    const layout = [
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,0,0,0,0,0,0,0,0,0,0,0,9,1,1,0,0,0,8,0,0,0,0,0,0,0,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,5,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,1,2,1,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
      4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
      1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,1,2,1,4,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
      1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
      1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
      1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
      1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
      1,0,1,1,1,1,1,1,1,1,1,1,6,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
      1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ]
    // 0 - pac-dots
    // 1 - wall
    // 2 - ghost-lair
    // 3 - power-pellet
    // 4 - empty

    /* ==== Modals ==== */

    // 5 - about
    // 6 - skills
    // 7 - academic projects
    // 8 - personal projects
    // 9 - contact


      /*
    //implementing music
    var melody = document.createElement("audio");
    melody.src = "./pac-man.mp3";
    function playSound(s) {
      s.currentTime = 0;
      s.play();
    
    }
    console.log(melody)
    playSound(melody);
    */

    // variables for modals

    var rankingTable = document.getElementById("rankingTable")
    var modalForm = document.getElementById("floatingDiv")
    //var container = document.getElementById("container")

    rankingTable.style.display = "none"
    modalForm.style.display = "none"



    const squares = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < layout.length; i++) {
        const square = document.createElement('div')
        grid.appendChild(square)
        squares.push(square)
  
        //add layout to the board
        if(layout[i] === 0) {
            squares[i].classList.add('pac-dot')
        } else if (layout[i] === 1) {
            squares[i].classList.add('wall')
        } else if (layout[i] === 2) {
            squares[i].classList.add('ghost-lair')
        } else if (layout[i] === 3) {
            squares[i].classList.add('power-pellet')
        } else if (layout[i] === 5) {
            squares[i].classList.add('about-pellet')
        } else if (layout[i] === 6) {
            squares[i].classList.add('skills-pellet')
        } else if (layout[i] === 7) {
            squares[i].classList.add('a-projects-pellet')
        } else if (layout[i] === 8) {
            squares[i].classList.add('p-projects-pellet')
        } else if (layout[i] === 9) {
            squares[i].classList.add('contact-pellet')
        }
      }
    }
    createBoard()
  
  
    //create Characters
    //draw pacman onto the board
    let pacmanCurrentIndex = 490
    squares[pacmanCurrentIndex].classList.add('pac-man')
    
    //move pacman
    function movePacman(e) {
      
      squares[pacmanCurrentIndex].classList.remove('pac-man')
      switch(e.keyCode) {
        case 37:
          if(
            pacmanCurrentIndex % width !== 0 &&
            !squares[pacmanCurrentIndex -1].classList.contains('wall') &&
            !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair')
            )
          pacmanCurrentIndex -= 1
          if (squares[pacmanCurrentIndex -1] === squares[363]) {
            pacmanCurrentIndex = 391
          }
          break
        case 38:
          if(
            pacmanCurrentIndex - width >= 0 &&
            !squares[pacmanCurrentIndex -width].classList.contains('wall') &&
            !squares[pacmanCurrentIndex -width].classList.contains('ghost-lair')
            ) 
          pacmanCurrentIndex -= width
          break
        case 39:
          if(
            pacmanCurrentIndex % width < width - 1 &&
            !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
            !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair')
          )
          pacmanCurrentIndex += 1
          if (squares[pacmanCurrentIndex +1] === squares[392]) {
            pacmanCurrentIndex = 364
          }
          break
        case 40:
          if (
            pacmanCurrentIndex + width < width * width &&
            !squares[pacmanCurrentIndex +width].classList.contains('wall') &&
            !squares[pacmanCurrentIndex +width].classList.contains('ghost-lair')
          )
          pacmanCurrentIndex += width
          break
      }
      console.log(pacmanCurrentIndex)
      squares[pacmanCurrentIndex].classList.add('pac-man')
      
      pacDotEaten()
      powerPelletEaten()
      pelletVisit(pacmanCurrentIndex) 
      checkForGameOver()
      checkForWin()
    }
    document.addEventListener('keyup', movePacman)
  
    // what happens when you eat a pac-dot
    function pacDotEaten() {
      if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
        score++
        scoreDisplay.innerHTML = score
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
      }
    }
  
    //what happens when you eat a power-pellet
    function powerPelletEaten() {
      if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        score +=10
        ghosts.forEach(ghost => ghost.isScared = true)
        setTimeout(unScareGhosts, 10000)
        squares[pacmanCurrentIndex].classList.remove('power-pellet')
      }
    }
    
    //what happens when you visit about-pellet
    function pelletVisit(index) {
      if (index === 326) {
        //about
        container.style.display = 'none'
        ghosts.forEach(ghost => ghost.isScared = true)
        aboutModal.style.display= 'block'
        document.removeEventListener('keyup', movePacman)
      }
      if (index === 684) {
        //pink skills
        container.style.display = 'none'
        ghosts.forEach(ghost => ghost.isScared = true)
        skillsModal.style.display= 'block'
        document.removeEventListener('keyup', movePacman)
      }
      if (index === 751) {
        //cyan a projects
        container.style.display = 'none'
        ghosts.forEach(ghost => ghost.isScared = true)
        projectsModal.style.display= 'block'
        document.removeEventListener('keyup', movePacman)
      }
      if (index === 46) {
        //darkorange p projects
        container.style.display = 'none'
        ghosts.forEach(ghost => ghost.isScared = true)
        stuffModal.style.display= 'block'
        document.removeEventListener('keyup', movePacman)
      }
      if (index === 40) {
        //darkmagenta contact
        container.style.display = 'none'
        ghosts.forEach(ghost => ghost.isScared = true)
        contactModal.style.display= 'block'
        document.removeEventListener('keyup', movePacman)
      }
    }

    //make the ghosts stop flashing
    function unScareGhosts() {
      ghosts.forEach(ghost => ghost.isScared = false)
    }
  
    //create ghosts using Constructors
    class Ghost {
      constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
      }
    }
  
    //all my ghosts
    ghosts = [
      new Ghost('blinky', 348, 250),
      new Ghost('pinky', 376, 400),
      new Ghost('inky', 351, 300),
      new Ghost('clyde', 379, 500)
      ]
  
    //draw my ghosts onto the grid
    ghosts.forEach(ghost => {
      squares[ghost.currentIndex].classList.add(ghost.className)
      squares[ghost.currentIndex].classList.add('ghost')
      })
  
    //move the Ghosts randomly
    
    ghosts.forEach(ghost => moveGhost(ghost))
    
    
  
    function moveGhost(ghost) {
      const directions =  [-1, +1, width, -width]
      let direction = directions[Math.floor(Math.random() * directions.length)]
  
      
      ghost.timerId = setInterval(function() {
          //if the next squre your ghost is going to go to does not have a ghost and does not have a wall
          if  (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
            !squares[ghost.currentIndex + direction].classList.contains('wall') ) {
              //remove the ghosts classes
              squares[ghost.currentIndex].classList.remove(ghost.className)
              squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
              //move into that space
              ghost.currentIndex += direction
              squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
          //else find a new random direction to go in
          } else direction = directions[Math.floor(Math.random() * directions.length)]
        
          //if the ghost is currently scared
          if (ghost.isScared) {
            squares[ghost.currentIndex].classList.add('scared-ghost')
          }
        
          //if the ghost is currently scared and pacman is on it
          if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
            ghost.currentIndex = ghost.startIndex
            //score +=100
            ghostPoints += 100
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
          }
          checkForGameOver()
      }, ghost.speed)
      
    }
  
    //check for a game over
    function checkForGameOver() {
      if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
        !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', movePacman)
        setTimeout(function(){ alert("Game Over"); }, 500)
        
        document.getElementById('floatingDiv').style.display = 'block'
        var inputScore = document.getElementById('score')
        inputScore.value = score
        enviarDatos()
      }
    }
  
    //check for a win - more is when this score is reached
    function checkForWin() {
      if (score === 269) {
        score += ghostPoints;
        document.getElementById('score').innerHTML = score;
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', movePacman)
        setTimeout(function(){ alert("You have WON!"); }, 500)
        
        document.getElementById('floatingDiv').style.display = 'block'
        var inputScore = document.getElementById('score')
        inputScore.value = score
        enviarDatos()
      }
    }

    $('#closeAboutModal').click(function() {
      aboutModal.style.display = 'none'
      ghosts.forEach(ghost => ghost.isScared = false)
      container.style.display = "flex"
      document.addEventListener('keyup', movePacman)
  })

    $('#closeSkillsModal').click(function() {
      skillsModal.style.display = 'none'
      ghosts.forEach(ghost => ghost.isScared = false)
      container.style.display = "flex"
      document.addEventListener('keyup', movePacman)
    })

})

  function enviarDatos() {
    container.style.display = "none"
    $(document).ready(function(){
  	  $('#btnguardar').click(function(){
  	  	var datos=$('#floatingForm').serialize();
              console.log(datos)
              //alert("espera !!!!!!")
  	  	$.ajax({
  	  		type: "POST",
  	  		url: "./php/insertar.php",
  	  		data: datos,
  	  		success: function(r){
                      alert("Added registry to database")
  	  			console.log(r)
                      //document.getElementById('floatingDiv').style.display = 'none'
                      //document.getElementById('resultDiv').style.display = 'block'
  	  		},
  	  		error: function(jqXHR, textStatus, errorThrown) {
              		console.log(textStatus, errorThrown);
          		},
  	  	});

  	  	return false;
  	  });
  	});
  }

function leerDatos() {
  $.ajax({
    url: "./php/consultar.php",
    method: 'POST',
    dataType: 'json',
    success: function(r) {
        console.log("JSON result-->",r)
        
        if(r != "reachedMax") {
            $('#tbodyRanking').empty()
            var rows = ""
            // Rendering Ranking Table
            for(var i = 0; i < r.length; i++) {
                rows += "<tr><td>" + r[i][1] + "</td><td>" + r[i][2] + "</td><td>" + r[i][3] + "</td>"
            }
            $('#tbodyRanking').append(rows)
        }
    }
  })
    
}



$('#btnconsulta').click(function(){
    leerDatos()
    
    floatingDiv.style.display = "none"
    rankingTable.style.display = "inline-block"
    container.style.display = "none"
})

