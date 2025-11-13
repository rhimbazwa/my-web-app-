// auth.js

/**
 * Checks user credentials against hardcoded values.
 * This function is the new feature.
 * (In a real app, this would check a database and hashed passwords.)
 */
function authenticateUser(username, password) {
    // Hardcoded credentials for demonstration
    const VALID_USERS = {
        "alice": "securepass", // Test User 1
        "bob": "testing123"    // Test User 2
    };

    if (VALID_USERS[username] && VALID_USERS[username] === password) {
        return true; // Login successful
    } else {
        return false; // Login failed
    }
}

/**
 * Returns a simple role based on the username.
 */
function getUserRole(username) {
    if (username === "alice") {
        return "Admin";
    } else if (username === "bob") {
        return "User";
    } else {
        return "Guest";
    }
}

// Export the functions to be used in other parts of the project
module.exports = {
    authenticateUser,
    getUserRole
};

// --- Local Testing Block (Run to test locally) ---

if (require.main === module) {
    console.log("--- Local Authentication Feature Tests ---");
    
    // Test 1: Successful login
    const test1_result = authenticateUser('alice', 'securepass');
    console.log(`Test 1 (alice/securepass): ${test1_result}`);
    
    // Test 2: Failed login (wrong password)
    const test2_result = authenticateUser('alice', 'wrongpass');
    console.log(`Test 2 (alice/wrongpass): ${test2_result}`);
    
    // Test 3: Successful login check for role (bob)
    const user_name = 'bob';
    if (authenticateUser(user_name, 'testing123')) {
        console.log(`Test 3 (User Role): User '${user_name}' role is ${getUserRole(user_name)}`);
    }
}
