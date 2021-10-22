 
btnSubmit.onclick=function(){
 let deleteName = inptDelete.value
  
  let found = false
    for (i = 0; i <= results.length - 1; i++) {
       if (deleteName == results[i][1])
            found = true
    }
    if (found == false) 
       lblAnswer.value = "That customer is not in the database."
    else if (found == true) {
      query = "Delete from customer Where name = '"+ deleteName +"'"
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
      
      if (req.status == 200)
            if (req.responseText == 500)
                lblAnswer.value = `You have successfully deleted the customer named ${deleteName}.`
            else
                lblAnswer.value = `There was a problem deleting ${deleteName} from the database.`
      else
        lblAnswer.value = `Error: ${req.status}`
      }

    query = "SELECT * from customer"
    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    
    if (req.status == 200) {       
        results = JSON.parse(req.responseText)
        if (results.length == 0)
            txtCustDelete.value = "There are no names in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
              message = message + results[i][1] + "\n"
            txtCustDelete.value = message
         }
  } else {
        txtResults.value = "Error code: " + req.status
}  
}
    
