
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

}

