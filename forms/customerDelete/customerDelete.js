

let deleteName = "inptDelete.value"

lblSubmit.onclick=function(){
    query = "Delete from customer Where name = ' "+ deleteName + "' " 
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
     if (req.status == 200) {       
      results = JSON.parse(req.responseText)
        if (results.length == 0)
            lblAnswer.value = "There are no names in the database."
         else {
            let message = ""
            for (i = 0; i < results.length; i++)
              message = message + results[i][1] + "\n"
            lblAnswer.value = message
         }
   } else
        lblAnswer.value = "Error code: " + req.status
}