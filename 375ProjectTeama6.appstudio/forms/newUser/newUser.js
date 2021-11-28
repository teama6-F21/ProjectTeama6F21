//global variables for database calls
let req1 = ""
let query1 = ""
let logInQuery1 = ""
let results1 = ""
let pw1 = "George11!"  // ***** put your database password here
let netID1 = "jes65910"
let databaseSchema1 = "375groupa6"  // put your netID here so this is your schema
let allUserData1 = []

//This creates an array to store all the users
newUser.onshow=function(){
     // get all the user data from the database when program loads
    query1 = "SELECT * FROM user"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID1 + "&pass=" + pw1 + "&database=" + databaseSchema1 + "&query=" + query1)

    if (req1.status == 200) { //transit worked.
        allUserData1 = JSON.parse(req1.responseText)  // parse data in an array
        console.log(allUserData1)
    } else {
        // transit error
        console.log(`${req1.status}`)
    }  
}


btnCreateNewUser.onclick=function(){
    let fname = inptFirst.value
    let lname = inptLast.value
    let email = inptEmail.value
    let password = inptPass.value
    let username = inptUserName.value
    let query1 = "INSERT INTO user (`first_name`,`last_name`,`email`,`password`,`username`) VALUES ('" + fname + "', '" + lname + "', '" + email + "', '" + password + "', '" + username + "')"

 req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID1 + "&pass=" + pw1 + "&database=" + databaseSchema1 + "&query=" + query1)
 
     if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500)    // for our server - this means the insert succeeded
            console.log("You have successfully added a member")
        else
            console.log("There was a problem adding to the database")
    } else // transit error
        console.log("error")
 }

