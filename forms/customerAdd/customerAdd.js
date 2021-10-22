
btnAdd.onclick=function(){
  let customer = inptCustomer.value
  let custStreet = inptAddress.value
  let custCity = inptCity.value
  let custState = inptState.value
  let custZip = inptZip.value
  
  query = "INSERT INTO customer (name, street, city, state, zipcode) VALUES ('" + customer + "', '" + custStreet + "', '" + custCity + "', '" + custState + "', '" + custZip + "')"
  
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) {
        if (req.responseText == 500)
            lblMessage.value = "You have successfully added a customer!"
        else
            lblMessage.value = "There was a problem with adding the customer to the database."
    } else
        lblMessage3.textContent = "Error: " + req.status
  
    query = "SELECT * from customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) {       
        results = JSON.parse(req.responseText)
        if (results.length == 0)
            txtCustAdd.value = "There are no names in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
              message = message + results[i][1] + "\n"
            txtCustAdd.value = message
         }
        } else {
          txtResults.value = "Error code: " + req.status
}

}

/*
btnSubmit4.onclick=function(){
    let newName = inptUpdate.value
    let oldName = inptPetToUpdate.value
            
    query = "UPDATE pets SET petName =" + '"' + newName + '"' + " WHERE petName = " + '"' + oldName + '"'
    //alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500) {   // means the update succeeded
            NSB.MsgBox(`You have successfully changed the pet name!`)
            // reset controls to blank
            inptPetToUpdate.value = ""
            inptUpdate.value = ""
        } else
            NSB.MsgBox(`There was a problem changing the pet name.`)
    } else 
        // transit error
        NSB.MsgBox(`Error: ${req.status}`);
}
*/

