let backdrop = document.querySelector(".backdrop");
let sideNav = document.querySelector(".side-nav");
let toggleButton = document.querySelector(".toggle-button");
let toggleBarCloseIcon = document.querySelector(".toggle-bar__close-icon");

let searchBarForm = document.querySelector(".search-bar__form");
let navSearchButton = document.querySelector(".nav__search-button");
let searchBarCloseIcon = document.querySelector(".search-bar__close-icon");

let mainSearchBarForm = document.querySelector(".main-search-bar__form");
let mainNavSearchButton = document.querySelector(".main-nav__search-button");
let mainSearchBarCloseIcon = document.querySelector(".main-search-bar__close-icon");

let clientLoginSubNav = document.querySelector(".client-login__sub-nav");
let mainNavItemClientLogin = document.querySelector(".main-nav__item--client-login");

let insightsRightArrow = document.querySelector(".insights__right-arrow");
let whatWeDoRightArrow = document.querySelector(".what-we-do__right-arrow");
let aboutUsRightArrow = document.querySelector(".about-us__right-arrow");
let careersRightArrow = document.querySelector(".careers__right-arrow");
let clientLoginRightArrow = document.querySelector(".client-login__right-arrow");

let insightsReturnArrow = document.querySelector(".insights__return-arrow");
let whatWeDoReturnArrow = document.querySelector(".what-we-do__return-arrow");
let aboutUsReturnArrow = document.querySelector(".about-us__return-arrow");
let careersReturnArrow = document.querySelector(".careers__return-arrow");
let clientLoginReturnArrow = document.querySelector(".client-login__return-arrow");

let sideNavOurInsights = document.querySelector(".side-nav__our-insights");
let sideNavWhatWeDo = document.querySelector(".side-nav__what-we-do");
let sideNavAboutUs = document.querySelector(".side-nav__about-us");
let sideNavCareers = document.querySelector(".side-nav__careers");
let sideNavClientLogin = document.querySelector(".side-nav__client-login");



toggleButton.addEventListener("click", function() {
	toggleBarCloseIcon.style.display = "block";
	toggleButton.classList.add("transparent");
	sideNav.style.display = "block";
	backdrop.style.display = "block";
	searchBarForm.style.display = "none";
	searchBarCloseIcon.style.display = "none";
	navSearchButton.classList.remove("transparent");

	setTimeout(function() {
		sideNav.classList.add("open");
	},5);

  	setTimeout(function() {
	    backdrop.classList.add("open");
	}, 10);
})

toggleBarCloseIcon.addEventListener("click", function() {
	toggleBarCloseIcon.style.display = "none";
	toggleButton.classList.remove("transparent");
	sideNavOurInsights.classList.remove("show");
	sideNavWhatWeDo.classList.remove("show");
	sideNavAboutUs.classList.remove("show");
	sideNavCareers.classList.remove("show");
	sideNavClientLogin.classList.remove("show");
	sideNav.classList.remove("open");
	backdrop.style.display = "none";

  	setTimeout(function() {
	    backdrop.classList.remove("open");
	}, 200);
	
})

navSearchButton.addEventListener("click", function() {
	navSearchButton.classList.add("transparent");
	searchBarCloseIcon.style.display = "block";
	searchBarForm.style.display = "block";
	backdrop.style.display = "block";
	sideNav.classList.remove("open");
	toggleBarCloseIcon.style.display = "none";
	toggleButton.classList.remove("transparent");
})

mainNavSearchButton.addEventListener("click", function() {
	mainNavSearchButton.classList.add("transparent");
	mainSearchBarCloseIcon.style.display = "block";
	mainSearchBarForm.style.display = "block";
	backdrop.style.display = "block";
})

searchBarCloseIcon.addEventListener("click", function() {
	searchBarCloseIcon.style.display = "none";
	navSearchButton.classList.remove("transparent");
	searchBarForm.style.display = "none";
	backdrop.style.display = "none";
})

mainSearchBarCloseIcon.addEventListener("click", function() {
	mainSearchBarCloseIcon.style.display = "none";
	mainNavSearchButton.classList.remove("transparent");
	mainSearchBarForm.style.display = "none";
	backdrop.style.display = "none";
})

mainNavItemClientLogin.addEventListener("mouseover", function() {
	clientLoginSubNav.style.display = "block";
})

//mainNavItemClientLogin.addEventListener("mouseout", function() {
	//clientLoginSubNav.style.display = "none";
//})

mainNavItemClientLogin.addEventListener("click", function() {
	clientLoginSubNav.style.display = "none";
})



/*searchBarInput.addEventListener("mouseover", function() {
	//.searchBarClearButton.style.display = "block";
}) */

backdrop.addEventListener("click", function() {
	sideNav.classList.remove("open");
	backdrop.style.display = "none";
	backdrop.classList.remove("open");
	searchBarForm.style.display = "none";
	searchBarCloseIcon.style.display = "none";
	navSearchButton.classList.remove("transparent");
})



insightsRightArrow.addEventListener("click", function() {
	sideNavOurInsights.classList.add("show");
	sideNav.style.display = "none";
})

whatWeDoRightArrow.addEventListener("click", function() {
	sideNavWhatWeDo.classList.add("show");
	sideNav.style.display = "none";
})

aboutUsRightArrow.addEventListener("click", function() {
	sideNavAboutUs.classList.add("show");
	sideNav.style.display = "none";
})

careersRightArrow.addEventListener("click", function() {
	sideNavCareers.classList.add("show");
	sideNav.style.display = "none";
})

clientLoginRightArrow.addEventListener("click", function() {
	sideNavClientLogin.classList.add("show");
	sideNav.style.display = "none";
})



insightsReturnArrow.addEventListener("click", function() {
	sideNavOurInsights.classList.remove("show");
	sideNav.style.display = "block";
})
whatWeDoReturnArrow.addEventListener("click", function() {
	sideNavWhatWeDo.classList.remove("show");
	sideNav.style.display = "block";
})
aboutUsReturnArrow.addEventListener("click", function() {
	sideNavAboutUs.classList.remove("show");
	sideNav.style.display = "block";
})
careersReturnArrow.addEventListener("click", function() {
	sideNavCareers.classList.remove("show");
	sideNav.style.display = "block";
})
clientLoginReturnArrow.addEventListener("click", function() {
	sideNavClientLogin.classList.remove("show");
	sideNav.style.display = "block";
})



