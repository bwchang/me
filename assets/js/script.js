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
			projectsTitleText();
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
		$(".projects-container").hide();
		$(".header").fadeOut(function() {
			$("#header-container").show();
			$("#paragraph-container").show();
  			$(".header").text("Betty Wen Chang").fadeIn(600);
		});
		homeText();
	}

	function aboutTitleText() {
		$(".projects-container").hide();
		$(".header").fadeOut(function() {
			$("#header-container").show();
			$("#paragraph-container").show();
  			$(".header").text("Designer.\nDeveloper.\nDreamer.").fadeIn(600);
		});
		aboutText();
	}

	function projectsTitleText() {
		$("#header-container").hide();
		$("#paragraph-container").hide();
		$(".projects-container").fadeIn(1000);
	}

	function contactTitleText() {
		$(".projects-container").hide();
		$(".header").fadeOut(function() {
			$("#header-container").show();
			$("#paragraph-container").show();
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
			$(".paragraph").prepend("<a href='https://facebook.com/cbljcrt'><img class='contact-icon' id='facebook' src='assets/img/facebook.png'></a>");
			$(".paragraph").prepend("<a href='mailto:bwchang@berkeley.edu?Subject=Your%20Portfolio' target='_top'><img class='contact-icon' id='email' src='assets/img/email-white.png'></a>");
			$(".paragraph").prepend("<a href='https://github.com/bwchang'><img class='contact-icon' id='github' src='assets/img/github-white.png'></a>");
		});
	}

	var aboutMe = "I am Betty, a third-year Computer Science and Cognitive Science student at UC Berkeley. I grew up in Taipei, Taiwan, and moved to Southern California when I was 13 years old. Since taking my first computer science course at Berkeley, I have fallen in love with programming, and in particular, web development. I find web design to be the perfect outlet for my creativity, and for me, there is nothing better than watching my ideas transform into a real, tangible product. I also have a great love for all things food, cats, and sports."
});