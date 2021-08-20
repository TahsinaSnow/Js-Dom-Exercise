//1
const topPlayers = document.getElementById('top-players');
topPlayers.style.color = 'tomato';

//2
const topBlogs = document.getElementById('top-blogs');
topBlogs.style.color = 'red';


const latesCourse = document.getElementById('lates-course');
latesCourse.style.color = 'hotpink';

//3 -players
const player = document.getElementsByClassName('player');

 for(const elements of player) {
     elements.style.background = 'rgba(0,255,0,0.3)';
 }
 //try by parent element
 const players = document.getElementById('players');
 const p = players.children;
 for(const items of p){
     items.style.color = 'red';
 }

 //extra 3
 const menu = document.getElementById('menu');
 const addButton = document.getElementById('add-btn').addEventListener('click', function () {
     const newItem = document.createElement('li');
     newItem.innerText = 'new-list';
     menu.appendChild(newItem);
 });

 //4 and 5
 const increaseBtn = document.getElementById('increase').addEventListener('click', function () {

     const inputField = document.getElementById('input-field');

     const previousValue = inputField.value;
     if(previousValue != 5){
         const newValue = parseInt(previousValue) + 1;

         inputField.value = newValue;
         if(newValue == 5){
             increaseBtn.setAttribute('disabled', '');
         }
     }
 });

 //8- je sob book er nam a javascript ace se gulo khujte hobe

 const bookList = ['JavaScript : The Definitive Guide',
 'Eloquent JavaScript : A Modern Introduction to Programming',
 'Learn JavaScript VISUALLY',
 'JavaScript & JQuery : Interactive Front-End Web Development',
 'High-Performance Browser Networking',
 'JavaScript : The Good Parts',
 'You Don’t Know JS'
]

let newBookList = [];
for(const books of bookList){
    const convertedText = books.toLocaleLowerCase();

    if(convertedText.includes('javascript') == true){
        newBookList.push(books);
    }
}

console.log(newBookList);

//9-choto theke boro serial by sajate hobe

const age = [9, 8, 1, 77 ,25, 93, 67, 11];

console.log('before sort : ', age)
const newAge = age.sort(function( a, b) {
    return a - b;
});
console.log("After sort :", newAge);
