
customerUpdate.onshow=function(){
  drpCustomer.clear()
  
  query = "SELECT * from customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  if (req.status == 200) {       
    results = JSON.parse(req.responseText)
      if (results.length == 0)
            lbldropresults.value = "There are no names in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
              drpCustomer.addItem(results[i][1])
         }
        } else {
          lbldropresults.value = "Error code: " + req.status
}
}


btnUpdate.onclick=function(){
    let oldName = inptOld.value
    let newName = inptNew.value    
            
    query = "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + oldName + '"'
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) {
        if (req.responseText == 500) {
             lbldropresults.value = "You have successfully changed the customer's name!"
        } else
            lbldropresults.value = "There was a problem changing the name."
    } else 
        lbldropresults.value = "Error code: " + req.status

    query = "SELECT * from customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) {       
        results = JSON.parse(req.responseText)
        if (results.length == 0)
            txtUpdate.value = "There are no names in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
              message = message + results[i][1] + "\n"
            txtUpdate.value = message
         }
        } else {
          lbldropresults.value = "Error code: " + req.status
}






}


