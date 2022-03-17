/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
			navToggle = document.getElementById('nav-toggle'),
			navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
		navToggle.addEventListener('click', () => {
				navMenu.classList.add('show-menu')
		})
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu')
	})
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content')
			skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
	let itemClass = this.parentNode.className

	for(i = 0; i < skillsContent.length; i++){
			skillsContent[i].className = 'skills__content skills__close'
	}
	if(itemClass === 'skills__content skills__close'){
		this.parentNode.className = 'skills__content skills__open'
	}
}			

skillsHeader.forEach((el) =>{
	el.addEventListener('click', toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
			tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
	tab.addEventListener('click', () =>{
		const target = document.querySelector(tab.dataset.target)

		tabContents.forEach(tabContent =>{
			tabContent.classList.remove('qualification__active')
		})
		target.classList.add('qualification__active')

		tabs.forEach(tab =>{
			tab.classList.remove('qualification__active')
		})
		tab.classList.add('qualification__active')
	})
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
			modalBtns = document.querySelectorAll('.services__button'),
			modalCloses = document.querySelectorAll('.services__modal-close')
			
let modal = function(modalClick) {
		modalViews[modalClick].classList.add('active-modal')
	}
			
modalBtns.forEach((modalBtn, i) => {
	modalBtn.addEventListener('click', () =>{
		modal(i)
	})
})

modalCloses.forEach((modalClose) => {
	modalClose.addEventListener('click', () => {
		modalViews.forEach((modalView) => {
			modalView.classList.remove('active-modal')
		})
	})
})
/*==================== PORTFOLIO SWIPER  ====================*/
    let swiperPortfolio = new Swiper(".portfolio__container", {
			cssMode: true,
			loop: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
				el: ".swiper-pagination",
				clickable: true,
      },
      mousewheel: true,
      keyboard: true,
    });

/*==================== TESTIMONIAL ====================*/
    let swiperTestimonial = new Swiper(".testimonial__container", {
      loop: true,
			grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      mousewheel: true,
      keyboard: true,
    });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun");

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

//  3D Interaction

let canvas, ctx;
let render, init;
let blob;

class Blob {
  constructor() {
    this.points = [];
  }

  init() {
    for (let i = 0; i < this.numPoints; i++) {
      let point = new Point(this.divisional * (i + 1), this);
      // point.acceleration = -1 + Math.random() * 2;
      this.push(point);
    }
  }

  render() {
    let canvas = this.canvas;
    let ctx = this.ctx;
    let position = this.position;
    let pointsArray = this.points;
    let radius = this.radius;
    let points = this.numPoints;
    let divisional = this.divisional;
    let center = this.center;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pointsArray[0].solveWith(pointsArray[points - 1], pointsArray[1]);

    let p0 = pointsArray[points - 1].position;
    let p1 = pointsArray[0].position;
    let _p2 = p1;

    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);

    for (let i = 1; i < points; i++) {
      pointsArray[i].solveWith(pointsArray[i - 1], pointsArray[i + 1] || pointsArray[0]);

      let p2 = pointsArray[i].position;
      var xc = (p1.x + p2.x) / 2;
      var yc = (p1.y + p2.y) / 2;
      ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
      // ctx.lineTo(p2.x, p2.y);

      ctx.fillStyle = "#000000";
      // ctx.fillRect(p1.x-2.5, p1.y-2.5, 5, 5);

      p1 = p2;
    }

    var xc = (p1.x + _p2.x) / 2;
    var yc = (p1.y + _p2.y) / 2;
    ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
    // ctx.lineTo(_p2.x, _p2.y);

    // ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = "#000000";
    // ctx.stroke();

    /*
        ctx.fillStyle = '#000000';
        if(this.mousePos) {
          let angle = Math.atan2(this.mousePos.y, this.mousePos.x) + Math.PI;
          ctx.fillRect(center.x + Math.cos(angle) * this.radius, center.y + Math.sin(angle) * this.radius, 5, 5);
        }
    */
    requestAnimationFrame(this.render.bind(this));
  }

  push(item) {
    if (item instanceof Point) {
      this.points.push(item);
    }
  }

  set color(value) {
    this._color = value;
  }
  get color() {
    return this._color || "#000000";
  }

  set canvas(value) {
    if (value instanceof HTMLElement && value.tagName.toLowerCase() === "canvas") {
      this._canvas = canvas;
      this.ctx = this._canvas.getContext("2d");
    }
  }
  get canvas() {
    return this._canvas;
  }

  set numPoints(value) {
    if (value > 2) {
      this._points = value;
    }
  }
  get numPoints() {
    return this._points || 32;
  }

  set radius(value) {
    if (value > 0) {
      this._radius = value;
    }
  }
  get radius() {
    return this._radius || 150;
  }

  set position(value) {
    if (typeof value == "object" && value.x && value.y) {
      this._position = value;
    }
  }
  get position() {
    return this._position || { x: 0.5, y: 0.5 };
  }

  get divisional() {
    return (Math.PI * 2) / this.numPoints;
  }

  get center() {
    return { x: this.canvas.width * this.position.x, y: this.canvas.height * this.position.y };
  }

  set running(value) {
    this._running = value === true;
  }
  get running() {
    return this.running !== false;
  }
}

class Point {
  constructor(azimuth, parent) {
    this.parent = parent;
    this.azimuth = Math.PI - azimuth;
    this._components = {
      x: Math.cos(this.azimuth),
      y: Math.sin(this.azimuth),
    };

    this.acceleration = -0.3 + Math.random() * 0.6;
  }

  solveWith(leftPoint, rightPoint) {
    this.acceleration =
      (-0.3 * this.radialEffect +
        (leftPoint.radialEffect - this.radialEffect) +
        (rightPoint.radialEffect - this.radialEffect)) *
        this.elasticity -
      this.speed * this.friction;
  }

  set acceleration(value) {
    if (typeof value == "number") {
      this._acceleration = value;
      this.speed += this._acceleration * 2;
    }
  }
  get acceleration() {
    return this._acceleration || 0;
  }

  set speed(value) {
    if (typeof value == "number") {
      this._speed = value;
      this.radialEffect += this._speed * 5;
    }
  }
  get speed() {
    return this._speed || 0;
  }

  set radialEffect(value) {
    if (typeof value == "number") {
      this._radialEffect = value;
    }
  }
  get radialEffect() {
    return this._radialEffect || 0;
  }

  get position() {
    return {
      x: this.parent.center.x + this.components.x * (this.parent.radius + this.radialEffect),
      y: this.parent.center.y + this.components.y * (this.parent.radius + this.radialEffect),
    };
  }

  get components() {
    return this._components;
  }

  set elasticity(value) {
    if (typeof value === "number") {
      this._elasticity = value;
    }
  }
  get elasticity() {
    return this._elasticity || 0.001;
  }
  set friction(value) {
    if (typeof value === "number") {
      this._friction = value;
    }
  }
  get friction() {
    return this._friction || 0.0085;
  }
}

blob = new Blob();

init = function () {
  canvas = document.createElement("canvas");
  canvas.setAttribute("touch-action", "none");

  document.body.appendChild(canvas);

  let resize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  window.addEventListener("resize", resize);
  resize();

  let oldMousePoint = { x: 0, y: 0 };
  let hover = false;
  let mouseMove = function (e) {
    let pos = blob.center;
    let diff = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    let dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
    let angle = null;

    blob.mousePos = { x: pos.x - e.clientX, y: pos.y - e.clientY };

    if (dist < blob.radius && hover === false) {
      let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      angle = Math.atan2(vector.y, vector.x);
      hover = true;
      // blob.color = '#77FF00';
    } else if (dist > blob.radius && hover === true) {
      let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      angle = Math.atan2(vector.y, vector.x);
      hover = false;
      blob.color = null;
    }

    if (typeof angle == "number") {
      let nearestPoint = null;
      let distanceFromPoint = 100;

      blob.points.forEach((point) => {
        if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
          // console.log(point.azimuth, angle, distanceFromPoint);
          nearestPoint = point;
          distanceFromPoint = Math.abs(angle - point.azimuth);
        }
      });

      if (nearestPoint) {
        let strength = { x: oldMousePoint.x - e.clientX, y: oldMousePoint.y - e.clientY };
        strength = Math.sqrt(strength.x * strength.x + strength.y * strength.y) * 10;
        if (strength > 100) strength = 100;
        nearestPoint.acceleration = (strength / 100) * (hover ? -1 : 1);
      }
    }

    oldMousePoint.x = e.clientX;
    oldMousePoint.y = e.clientY;
  };
  // window.addEventListener('mousemove', mouseMove);
  window.addEventListener("pointermove", mouseMove);

  blob.canvas = canvas;
  blob.init();
  blob.render();
};

init();