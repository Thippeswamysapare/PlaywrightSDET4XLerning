// Calculate grading

let score = 75;

if (score > 100 || score < 0) {
    console.log("Invalid score");
} else {
    // Score valid

    if (score > 90) {
        console.log(" Grade A - Excellent");
    }
    else if (score > 80 && score <= 90) {
        console.log("Grade B - Very Good");
    }
    else if (score > 70 && score <= 80) {
        console.log("Grade C - Good");
    }
    else if (score > 60 && score <= 70) {
        console.log("Grade D - Average");
    }
    else if (score > 50 && score <= 60) {
        console.log("Grade E - Needs Improvement");
    }
    else {
        console.log("Grade F - Fail");
    }
}


console.log("----------------------------------------------------")

const isLoggedIn = true;
const role = "Admin";

if (isLoggedIn!=true) {
    if (role === "Admin") {
        console.log("Admin dashboard");
    } else {
        console.log("User dashboard");
    }
} else {
    console.log("Redirect to login");
}

console.log("----------------------------------------------------")

const orderValue = 3700;

if (orderValue >= 7500) {
    console.log("Premium Customer");
} else if (orderValue >= 5000 && orderValue <= 7000) {
    console.log("Gold Customer");
} else if (orderValue >= 4500 && orderValue <= 5000) {
    console.log("Silver Customer");
} else {
    console.log("Regular Customer");
}