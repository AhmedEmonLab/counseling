	var dropdown = document.getElementsByClassName("dropdown-btn");
		var i;

		for (i = 0; i < dropdown.length; i++) {
		  dropdown[i].addEventListener("click", function() {
		  this.classList.toggle("active");
		  var dropdownContent = this.nextElementSibling;
		  if (dropdownContent.style.display === "block") {
		  dropdownContent.style.display = "none";
		  } else {
		  dropdownContent.style.display = "block";
		  }
		});
	}

	function openmenu(){
		document.getElementById("side-menu").style.display="block";
		// document.getElementById("menu-btn").style.display="none";
		document.getElementById("close-btn").style.display="block";
		// document.body.style.backgroundColor = "rgba(0,0,0,0.9)";
		document.getElementById("mbl_prfl_nav_box").style.opacity = "0.8";
		document.getElementById("mbl_main_list").style.opacity = "0.8";
	}
	function closemenu(){
		document.getElementById("side-menu").style.display="none";
		document.getElementById("menu-btn").style.display="block";
		document.getElementById("close-btn").style.display="none";
		document.getElementById("mbl_prfl_nav_box").style.opacity = "1";
		document.getElementById("mbl_main_list").style.opacity = "1";
	}