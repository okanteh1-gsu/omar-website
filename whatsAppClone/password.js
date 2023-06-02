const letters =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B',
 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
const random_list = [];
function createPassword(){
    const inputElement = document.querySelector('.input-box');
    for(let i = 0; i <  4; i++){
        index = Math.floor(Math.random() * letters.length)
        random_list.push(letters[index]);
      
        }
      for(let i = 0; i < 4; i++){
        const index = Math.floor(Math.random() * symbols.length)
        random_list.push(symbols[index]);
      
        }
      
      for(let i = 0; i < 4; i++){
        const index = Math.floor(Math.random() * numbers.length)
        random_list.push(numbers[index]);
      
        }
      console.log(random_list);
      let password = '';
      for(let j = 0; j < 12; j++){
        let x = Math.floor(Math.random() * random_list.length);
        password += random_list[x];
      }
      console.log(password);
      inputElement.value = password;
      
}
