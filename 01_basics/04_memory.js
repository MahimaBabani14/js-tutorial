// two emories are present in js

// stack (primitive) , Heap (Non-primitive)

let myyoutubename = "mahimababani.com"

let anothername = myyoutubename
anothername = "mahi"
console.log(myyoutubename);
console.log(anothername);







let userone = {
    email:  "user.google.com",
    upi: "user@ybl"

}

let usertwo = userone

usertwo.email = "mahi@google.com"

console.log(userone.email);
console.log(usertwo.email);