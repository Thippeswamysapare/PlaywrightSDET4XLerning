let code = 500;

switch (code) {
    case 200:
        console.log("200 Success");
        break;
    case 201:
        console.log("201 Created");
        break;    
    case 500:
        console.log("500 Internal Server Error");
        //break;
    case 500:
        console.log("512 Server Error");
        break;
    case 401:
        console.log("401 Unauthorized");
        break;  
    case 400:
        console.log("400 Bad Request");
        break;
    case 404:
        console.log("404 Not Found");
        break;
    default:
        console.log("Unknown response");
}