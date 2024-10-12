let userId = "1234567890123456789012345678901234567890";
let privateMetadata = Symbol("metadata");

let user = {
  id: userId,
  name: "John Doe",
  [privateMetadata]: { lastLogin: "2024-10-12" }
};

console.log(user.id);  // Output: 1234567890123456789012345678901234567890n
console.log(user.name);  // Output: John Doe
console.log(user[privateMetadata]);  // Output: { lastLogin: "2024-10-12" }
