person = {
    name: "__",
    age: 69,
};

function populateHTML() {
    document.getElementById("heading1").innerHTML = `Hi! my name is ${person.name}.`;
    document.getElementById("paragraph1").innerHTML = `I am ${person.age} years old.`;
    console.log("HTML Set!")
}