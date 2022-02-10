function loadSuggestions(category) {      
    var modal = document.getElementById("myModal");
    fetch("https://instagram85.p.rapidapi.com/account/search/"+category, {
	    "method": "GET",
	    "headers": {
		"x-rapidapi-host": "instagram85.p.rapidapi.com",
		"x-rapidapi-key": "85dfae49e0msh165e24d5014f226p1850cbjsn2b987e3d28ea"
	    }
    })
    .then(response => response.json())
    .then(data => {
        for(let i=0; i<5; i++)
        {
            let fullName = data.data[i].full_name;
            if(fullName === "")
            {
                fullName = data.data[i].username;;
            }
            modal.style.display = "block";
            document.getElementById("modal_image"+ (i+1)).src = "../images/"+ category+ "_" + (i+1) +".jpeg";
            document.getElementById("textcontent"+ (i+1)).innerHTML = fullName;
        }
    })
    .catch(err => {
	    console.error(err);
    });

    

    var span = document.querySelector(".close");
    span.onclick = function() {
     modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
    }
  }
}

function closePopup() {
    document.getElementById("myModal").style.display = "none";
}
   
  