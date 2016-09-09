$(document).ready(function() {
	$(".sections-title").click(function() {
		$(".sections-title").removeClass("sections-selected");
		$(this).addClass("sections-selected");

		if (this.id == "home") {
			removeBackgrounds();
			homeTitleText();
		}
		if (this.id == "about") {
			removeBackgrounds();
			$(".background").addClass("background-about");
			aboutTitleText();
		}
		if (this.id == "projects") {
			removeBackgrounds();
			$(".background").addClass("background-projects");
		}
		if (this.id == "contact") {
			removeBackgrounds();
			$(".background").addClass("background-contact");
			contactTitleText();
		}
	});

	$("#home").hover(function() {
		$("#arrow-home img").attr('src', 'assets/img/arrow.png');
	}, function() {
		$("#arrow-home img").attr('src', 'assets/img/arrow-white.png');
	});

	$("#about").hover(function() {
		$("#arrow-about img").attr('src', 'assets/img/arrow.png');
	}, function() {
		$("#arrow-about img").attr('src', 'assets/img/arrow-white.png');
	});

	$("#projects").hover(function() {
		$("#arrow-projects img").attr('src', 'assets/img/arrow.png');
	}, function() {
		$("#arrow-projects img").attr('src', 'assets/img/arrow-white.png');
	});

	$("#contact").hover(function() {
		$("#arrow-contact img").attr('src', 'assets/img/arrow.png');
	}, function() {
		$("#arrow-contact img").attr('src', 'assets/img/arrow-white.png');
	});

	function removeBackgrounds() {
		$(".background").removeClass("background-about");
		$(".background").removeClass("background-projects");
		$(".background").removeClass("background-contact");
	}

	function homeTitleText() {
		$(".header").fadeOut(function() {
  			$(".header").text("Betty Wen Chang").fadeIn(600);
		});
		homeText();
	}

	function aboutTitleText() {
		$(".header").fadeOut(function() {
  			$(".header").text("Designer.\nDeveloper.\nDreamer.").fadeIn(600);
		});
		aboutText();
	}

	function contactTitleText() {
		$(".header").fadeOut(function() {
  			$(".header").text("Contact Me").fadeIn(600);
		});
		contactText();
	}

	function homeText() {
		$(".paragraph").fadeOut(function() {
			$(".paragraph").empty().fadeIn();
		});
	}

	function aboutText() {
		$(".paragraph").fadeOut(function() {
			$(".paragraph").empty().fadeIn();
			$(".paragraph").text(aboutMe);
		});
	}

	function contactText() {
		$(".paragraph").fadeOut(function() {
			$(".paragraph").empty().fadeIn();
			$(".paragraph").prepend("<img class='contact-icon' id='facebook' src='assets/img/facebook.png'>");
			$(".paragraph").prepend("<img class='contact-icon' id='email' src='assets/img/email-white.png'>");
			$(".paragraph").prepend("<img class='contact-icon' id='github' src='assets/img/github-white.png'>");
		});
	}

	var aboutMe = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
});