/*
    Non- blocking code
    Asynchronous using callbacks
    getUser
    getRepository

    getUsers -->pass username -->getRepository

*/
console.log('Before');

getUser(1, function (user) {
    getRepository(user.gitHubUser, function(repos){
            console.log(repos[0]);
    });
});


// getUser(1, function (user) {
//     console.log(user);
// });
 
// getRepository('chandan', function(repos){
//     console.log(repos);
// })

console.log('After')

//Design a asynchronous code - user id and get an object

function getUser(id, callback) {
    setTimeout(() => {
        console.log("Performing db activity")
        callback({ id: id, gitHubUser: 'priyanka' });
    }, 2000);

}


function getRepository(username, callback){
    setTimeout(() => {
        console.log("Connect to Github Repository and get repository name")
        callback(['repo1', 'repo2', 'repo3'] );
    }, 2000);

}
