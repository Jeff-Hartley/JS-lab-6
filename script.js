/*I wrote the code in two different fashions to ensure the proper data is fetched: 
user, their post and a comment as well as all users, all posts and all comments.
This was only done for the initial promises. The Async/Await retrieves the user with their post and the comment on that post.*/

//global variables containing arrays for users, posts and comments
let users = ['Jeff', 'Bob', 'Steve'];
let posts = ['Getting coffee with my friends', 'Watching TV', 'Going for a long walk'];
let comments = ['Enjoy the latte', 'I also like TV!', 'It is nice weather for a walk'];

// Delay function to simulate time-intensive operation (like fetching data)
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to fetch user profiles, simulate delays using the delay function
function getUser1() {
    console.log("Here is user 1, with their post and a comment:");
    return delay(1000) //delay 1 second
    .then(() => {
        console.log("User 1: ", users[0]); 
        return delay(1000); // delay 1 second
    }).then(() => {
        console.log("His post: ", posts[0]); 
        return delay(1000); // delay 1 second
    }).then(() => {
        console.log("The comment: ", comments[0]); 
    }).then(() => {
        console.log('User 1 and their post and comment retrieved successfully.');
    })
    .catch((error) => {
        console.error('Error occurred:', error);
});

}

// Function to fetch posts, simulate delays using the delay function
function getUser2() {
    return delay(1000)
    .then(() => {
        console.log("Here is user 2, with their post and comment: ", users[1]); 
        return delay(1000); // Delay 1 second
    }).then(() => {
        console.log("His post: ", posts[1]); 
        return delay(1000); // Delay 1 second
    }).then(() => {
        console.log("The comment: ", comments[1]); 
    }).then(() => {
        console.log('User 2 and their post and comment retrieved successfully');
    })
    .catch((error) => {
        console.error('Error occurred:', error);
});
}

// Function to fetch comments, simulate delays using the delay function
function getUser3() {
    return delay(1000)
    .then(() => {
        console.log("Here is user 3, with their post and comment: ", users[2]); 
        return delay(1000); // delay 1 second
    }).then(() => {
        console.log("His post: ", posts[2]); 
        return delay(1000); // delay 1 second
    }).then(() => {
        console.log("The comment: ", comments[2]);
    }).then(() => {
        console.log('User 3 and their post and comment retrieved successfully');
    })
    .catch((error) => {
        console.error('Error occurred:', error);
});
}

//function that will get all the users only
function getAllUsers() {
    return delay(1000) // delay 1 second
    .then(() => {
        console.log("Here is user 1: ", users[0]);
        return delay(1000); // delay 1 second
    }).then(() => {
        console.log("Here is user 2: ", users[1]);
        return delay(1000); // delay 1 second
    }).then(() => {
        console.log("Here is user 3: ", users[2]);
    }).then(() => {
        console.log('All users retrieved successfully');
    })
    .catch((error) => {
        console.error('Error occurred:', error);
});
}

//function that will get all the posts only
function getAllPosts() {
    return delay(1000) // delay 1 second
    .then(() => {
        console.log("Here is post 1: ", posts[0]);
        return delay(1000); // delay 1 second
    }).then(() => {
        console.log("Here is posts 2: ", posts[1]);
        return delay(1000); // delay 1 second
    }).then(() => {
        console.log("Here is posts 3: ", posts[2]);
    }).then(() => {
        console.log('All posts retrieved successfully.');
    })
    .catch((error) => {
        console.error('Error occurred:', error);
});
}

//function that will get all the comments only
function getAllComments() {
    return delay(1000) // delay 1 second
    .then(() => {
        console.log("Here is comment 1: ", comments[0]);
        return delay(1000); // delay 1 sec0ond
    })
    .then(() => {
        console.log("Here is comment 2: ", comments[1]);
        return delay(1000); // delay 1 second 
    })
    .then(() => {
        console.log("Here is comment 3: ", comments[2]); 
    }).then(() => {
        console.log('All comments retrieved successfully.');
    })
    .catch((error) => {
        console.error('Error occurred:', error);
});
}

//Will display user 1 with the post and comment, then 2 and 3 respectively. Then, all Users, all Posts, and all Comments. Lastly, a made-up function that will cause it to fail.
getUser1() //Displays User 1
    .then(() => getUser2()) // After User 1 & content posted/commented, displays User 2 & content posted/commented
    .then(() => getUser3()) // After User 2 & content posted/commented, displays User 3 & content posted/commented
    .then(() => getAllUsers()) // After User 3 & content posted/commented, displays all Users
    .then(() => getAllPosts()) // After all Users, displays all Posts
    .then(() => getAllComments()) // After all Posts, displays all Comments
    .then(() => madeUpFunction()) // This will fail!
    .then(() => {
        console.log('All data fetched successfully. Showing users with their posts and comments, as well as all users, posts and comments. '); 
    })
    .catch((error) => {
        console.error('Error occurred:', error);
});


// Rewrote functions as Async/Await
// async function for the user1 with the post and comment made
async function user1Async() {
    await delay(20000);  // Delay for 1 second
    console.log('User 1:');
    console.log(`${users[0]}`);
  
    console.log('His post:');
    await delay(1000);  // Delay for 1 second
    console.log(`${posts[0]}`);

    await delay(1000);  // Delay for 1 second
    console.log('The comment:');
    console.log(`${comments[0]}`);
}

  //async function for user2 with the post and comment made
async function user2Async() {
    await delay(1000); // Delay for 1 second
    console.log('User 2:');
    console.log(`${users[1]}`);
    
    await delay(1000);  // Delay for 1 second
    console.log('His post:');
    console.log(`${posts[1]}`);

    await delay(1000);  // Delay for 1 second
    console.log('The comment:');
    console.log(`${comments[1]}`);
}

  //async function for user3 with the post and comment made
async function user3Async() {
    await delay(1000); // Delay for 1 second
    console.log('User 3:');
    console.log(`${users[2]}`);
  
    await delay(1000);  // Delay for 1 second
    console.log('His post:');
    console.log(`${posts[2]}`);

    await delay(1000);  // Delay for 1 second
    console.log('The comment:');
    console.log(`${comments[2]}`);

}

async function getUserContent() {
try {
    await user1Async();
    console.log("All data for User 1 retrieved.");
    await user2Async();
    console.log("All data for User 2 retrieved.");
    await user3Async();
    console.log("All data for User 3 retrieved.");
    console.log("All data for all Users retrieved successfully.");
} 

catch (error) {
    console.error("Error occured:", error);
    }
}

getUserContent();
    