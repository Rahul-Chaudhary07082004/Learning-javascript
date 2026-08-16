function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "Rahul",
                url: "https://Rahul.com",
            })
            reject({
                name: "Kabir",
                url: "https://Kabir.com",
            }) 
        }, 3000);
    })
}
async function getUserData() {
    try {
        console.log("fetching user data...");
        let userData1 = await fetchUserData();
        console.log("fetching user data successfully!");
        console.log("user Data: ", userData1);
    } catch (error) {
        console.log("error fecting data", error);
    }
}
getUserData();