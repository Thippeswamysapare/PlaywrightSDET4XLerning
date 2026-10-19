let role = "Admin";

switch (role) {
    case "Admin":
        console.log("Admin role");        
    case "Manager":                 // Since the above case does not have a break, it will 
                                    // fall through to this case
        console.log("Manager role");
        break;
    case "User":
        console.log("Read role");
        break;
    default:
        console.log("Access Denied");
}

