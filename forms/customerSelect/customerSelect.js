
let req = ""
let query = ""
let results = ""
let netID = "gak77901"
let pw = "Ym100%otsydt" 

btnEnter.onclick=function(){
      query = "SELECT * from customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) {       
        results = JSON.parse(req.responseText)
        if (results.length == 0)
            txtResults.value = "There are no names in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
              message = message + results[i][1] + "\n"
            txtResults.value = message
         }
  } else {
        txtResults.value = "Error code: " + req.status
}
}

