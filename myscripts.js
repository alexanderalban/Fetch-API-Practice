let MagicButton = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(myJson => console.log(myJson))
    console.log("hello there");

}