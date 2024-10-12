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

const orderForcostomer=()=>{
  console.log('take order for costomer ')

  setTimeout(()=>{
    console.log('order in cooking');
    
  },3000);
  console.log('order is processed')
}
console.log(orderForcostomer());
console.log('order compleate')
