/*
Asynchronous using async/await 

*/

console.log("Before");

callAll()
async function callAll() {
    try {
        let user = await getUser(1);
        let repo = await getRepository(user.name);
        let result = await getCommit(repo[0]);
        console.log(result);

    } catch (error) {
        console.log(error.message);
    }

}


//Design a asynchronous code - user id and get an object

async function getUser(id) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Performing db activity")
            resolve({ id: id, gitHubUser: 'priyanka' });
            reject(new Error("Error- user"));
        }, 2000);
    });
}


async function getRepository(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Connect to Github Repository and get repository name")
            resolve(['repo1', 'repo2', 'repo3']);
            reject(new Error("Error- repository"));
        }, 5000);

    });

}

async function getCommit(reponame) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Committing the repo")
            resolve("Data to be commited for repo =>" + reponame);
            reject(new Error("Error- repository"));
        }, 6000);

    });

}


console.log("After");