//global variables for database calls
let req = ""
let query = ""
let logInQuery = ""
let results = ""
let pw = "George11!"  // ***** put your database password here
let netID = "jes65910"
let databaseSchema = "375groupa6"  // put your netID here so this is your schema
let allUserData = []
let logInData = []
let firstName = ''
let lastName = ''

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
  //creates variables to hold username and password
  let userName = inptUser.value
  let password = inptPassword.value
  //erase header
  //txtHeader.value = ''
  //query the data
 //checks to see if username and password match up
  query = "SELECT first_name, last_name, username, password FROM user WHERE username = '" + userName + "' AND password = '" + password + "'"
  console.log("onclick" + logInQuery)
  //connect to server
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
  if (req.status == 200) { //transit worked.
    logInData = JSON.parse(req.responseText) // parse data in an array
    console.log(logInData)
    //get first and last names
    firstName = logInData[0][0]
    lastName = logInData[0][1]
  } 
  if (logInData.length == 0) {
    txtHeader.value = "There are no customers found."
  } else {
    ChangeForm(landingPage)
    }
    inptUser.value = ''
    inptPassword.value = ''
}

btnNewUser.onclick=function(){
  ChangeForm(newUser)
}
