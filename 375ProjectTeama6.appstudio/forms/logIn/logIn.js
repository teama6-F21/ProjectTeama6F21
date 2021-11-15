//global variables for database calls
let req = ""
let query = ""
let results = ""
let pw = "George11!"  // ***** put your database password here
let netID = "jes65910"
let databaseSchema = "375groupa6"  // put your netID here so this is your schema
let allUserData = []

//This creates an array to store all the users
logIn.onshow=function(){
     // get all the user data from the database when program loads
    query = "SELECT * FROM user"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)

    if (req.status == 200) { //transit worked.
        allUserData = JSON.parse(req.responseText)  // parse data in an array
        console.log(allUserData)
    } else {
        // transit error
        console.log(`${req.status}`)
    }  
}



btnLogIn.onclick=function(){
  
}
