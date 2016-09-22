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
		if (this.id == "experience") {
			removeBackgrounds();
			$(".background").addClass("background-experience");
			experienceTitleText();
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

	$("#experience").hover(function() {
		$("#arrow-experience img").attr('src', 'assets/img/arrow.png');
	}, function() {
		$("#arrow-experience img").attr('src', 'assets/img/arrow-white.png');
	});

	$("#contact").hover(function() {
		$("#arrow-contact img").attr('src', 'assets/img/arrow.png');
	}, function() {
		$("#arrow-contact img").attr('src', 'assets/img/arrow-white.png');
	});

	function removeBackgrounds() {
		$(".background").removeClass("background-about");
		$(".background").removeClass("background-projects");
		$(".background").removeClass("background-experience");
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
		$(".projects-container").hide();
		projectsText();
		$(".projects-container").fadeIn(1000);
	}

	function experienceTitleText() {
		$("#header-container").hide();
		$("#paragraph-container").hide();
		$(".projects-container").hide();
		experienceText();
		$(".projects-container").fadeIn(1000);
		$("#more").hide();
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

	function projectsText() {
		$("#first-project").find(".projects-description").text(firstProjectDescription);
		$("#first-project").find("img").attr("src", firstProjectPic);
		$("#first-project").find(".projects-title").html(firstProjectTitle);

		$("#second-project").find(".projects-description").text(secondProjectDescription);
		$("#second-project").find("img").attr("src", secondProjectPic);
		$("#second-project").find(".projects-title").html(secondProjectTitle);

		$("#third-project").find(".projects-description").text(thirdProjectDescription);
		$("#third-project").find("img").attr("src", thirdProjectPic);
		$("#third-project").find(".projects-title").html(thirdProjectTitle);

		$(".projects-title").removeClass("experience-title");
	}

	function experienceText() {
		$("#first-project").find(".projects-description").text(firstExDescription);
		$("#first-project").find("img").attr("src", firstExPic);
		$("#first-project").find(".projects-title").text(firstExTitle);

		$("#second-project").find(".projects-description").text(secondExDescription);
		$("#second-project").find("img").attr("src", secondExPic);
		$("#second-project").find(".projects-title").text(secondExTitle);

		$("#third-project").find(".projects-description").text(thirdExDescription);
		$("#third-project").find("img").attr("src", thirdExPic);
		$("#third-project").find(".projects-title").text(thirdExTitle);

		$(".projects-title").addClass("experience-title");
	}

	var aboutMe = "I am Betty, a third-year Computer Science and Cognitive Science student at UC Berkeley. I grew up in Taipei, Taiwan, and moved to Southern California when I was 13 years old. Since taking my first computer science course at Berkeley, I have fallen in love with programming, and in particular, web development. I find web development to be the perfect outlet for my creativity, and for me, there is nothing better than watching my ideas transform into a real, tangible product. I also have a great love for all things food, cats, and sports."

	var firstProjectTitle = "<a href='https://bwchang.github.io'>A Semester in Meals</a>"
	var firstProjectDescription = "A personal food journal of Spring 2016."
	var firstProjectPic = "assets/img/meals.jpg"
	var secondProjectTitle = "<a href='https://github.com/bwchang/SwaggySearch'>SwaggySearch</a>"
	var secondProjectDescription = "A Wikipedia Search Engine that crawls and indexes Wikipedia pages, then responds to a search query by listing the ten most relevant Wikipedia pages."
	var secondProjectPic = "assets/img/search.jpg"
	var thirdProjectTitle = "<a href='https://github.com/bwchang/roomescape'>Room Escape Game</a>"
	var thirdProjectDescription = "A text-based, terminal-based room escape game written in Python using Object-Oriented Programming."
	var thirdProjectPic = "assets/img/room.jpeg"

	var firstExTitle = "Lendogram"
	var firstExPic = "assets/img/lendogram.png"
	var firstExDescription = "I worked as a software development intern at Lendogram, a Toronto-based startup, in Summer 2016. I developed their iOS application using Objective-C and their web application using Ruby on Rails."
	var secondExTitle = "Berkeley ANova"
	var secondExPic = "assets/img/anova.png"
	var secondExDescription = "I am currently the Operations Chair for ANova, a non-profit club that aims to improve CS education by teaching computer science at middle and high schools around the Bay Area. I have developed and taught curriculum at middle and high schools, designed a student-run course at UC Berkeley, and oversaw the Online Mentorship Program."
	var thirdExTitle = "UC Berkeley Tutor"
	var thirdExPic = "assets/img/cal.png"
	var thirdExDescription = "Provided 1-on-1 and group tutoring for students in the Foundations of Data Science course, held office hours, and graded homeworks and exams."
});