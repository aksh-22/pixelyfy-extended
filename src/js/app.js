import { http } from "./http";
import { validate } from "./validate";
import { init } from "./typewriter";

const greeting = "Hello World";
console.log(greeting);

document.addEventListener("DOMContentLoaded", getData);

function getData() {
    http
        .get("http://localhost:3000/account")
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
    console.log("yes");
}