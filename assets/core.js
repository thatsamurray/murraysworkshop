
if (document.documentElement.clientWidth > 960) {
  Array.prototype.forEach.call('click', function(anchor) {
    addEventListener('click', explode)
  })
  
  function explode(e) {
    var x = e.clientX
    var y = e.clientY
    var c = document.createElement('canvas')
    var ctx = c.getContext('2d')
    var ratio = window.devicePixelRatio
    var particles = []
    
    document.body.appendChild(c)
    
    c.style.position = 'absolute'
    c.style.left = (x - 100) + 'px'
    c.style.top = (y - 100) + 'px'
    c.style.pointerEvents = 'none'
    c.style.width = 200 + 'px'
    c.style.height = 200 + 'px'
    c.width = 200 * ratio
    c.height = 200 * ratio
    
    function Particle() {
      return {
        x: c.width / 2,
        y: c.height / 2,
        radius: r(20,30),
        color: 'rgb(' + [r(0,255), r(0,255), r(0,255)].join(',') + ')',
        rotation: r(0,360, true),
        speed: r(8,12),
        friction: 0.9,
        opacity: r(0,0.5, true),
        yVel: 0,
        gravity: 0.1
      }
    }
    
    for(var i=0; ++i<25;) {
      particles.push(Particle())
    }
    
    console.log(particles[0])
    
    function render() {
      ctx.clearRect(0, 0, c.width, c.height)
      
      particles.forEach(function(p, i) {
        
        angleTools.moveOnAngle(p, p.speed)
        
        p.opacity -= 0.01
        p.speed *= p.friction
        p.radius *= p.friction
        
        p.yVel += p.gravity
        p.y += p.yVel
        
        if(p.opacity < 0) return
        if(p.radius < 0) return
        
        ctx.beginPath()
        ctx.globalAlpha = p.opacity
        ctx.fillStyle = p.color
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, false)
        ctx.fill()
      })
    }
    
    ;(function renderLoop(){
      requestAnimationFrame(renderLoop)
      render()
    })()
    
    setTimeout(function() {
      document.body.removeChild(c)
    }, 3000)
  }
  
  var angleTools={getAngle:function(t,n){var a=n.x-t.x,e=n.y-t.y;return Math.atan2(e,a)/Math.PI*180},getDistance:function(t,n){var a=t.x-n.x,e=t.y-n.y;return Math.sqrt(a*a+e*e)},moveOnAngle:function(t,n){var a=this.getOneFrameDistance(t,n);t.x+=a.x,t.y+=a.y},getOneFrameDistance:function(t,n){return{x:n*Math.cos(t.rotation*Math.PI/180),y:n*Math.sin(t.rotation*Math.PI/180)}}};
  function r(a,b,c){ return parseFloat((Math.random()*((a?a:1)-(b?b:0))+(b?b:0)).toFixed(c?c:0)); }
  
}

const links = document.querySelectorAll('a');

links.forEach(link => link.addEventListener('mouseenter', shootLines));

function shootLines(e) {

  const itemDim = this.getBoundingClientRect(),
  itemSize = {
    x: itemDim.right - itemDim.left,
    y: itemDim.bottom - itemDim.top },

  shapes = ['line', 'zigzag'],
  colors = ['#2FB5F3',
  '#FF0A47',
  '#FF0AC2',
  '#47FF0A'];

  const chosenC = Math.floor(Math.random() * colors.length),
  chosenS = Math.floor(Math.random() * shapes.length);

  // create shape
  const burst = new mojs.Burst({
    left: itemDim.left + itemSize.x / 2,
    top: itemDim.top + itemSize.y / 2,
    radiusX: itemSize.x,
    radiusY: itemSize.y,
    count: 8,

    children: {
      shape: shapes[chosenS],
      radius: 10,
      scale: { 0.8: 1 },
      fill: 'none',
      points: 7,
      stroke: colors[chosenC],
      strokeDasharray: '100%',
      strokeDashoffset: { '-100%': '100%' },
      duration: 350,
      delay: 100,
      easing: 'quad.out',
      isShowEnd: false } });

  burst.play();
}

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});