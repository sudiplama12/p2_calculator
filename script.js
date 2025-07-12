const input = document.getElementById('inputbox');
const buttons = document.querySelectorAll('button');
let string = '';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if (value === 'DEL') {
            string = string.slice(0, -1);
        } else if (value === 'AC') {
            string = '';
        } else if (value === '=') {
            try {
                string = eval(string).toString();
            } catch {
                string = 'Error'; // ✅ fixed
            }
        } else if (value === '%') {
           try{
            string=(eval(string)/100).toString();
           }catch{
            string='error'
           }
            
        }
        else {
            string += value;
        }

        input.value = string; // ✅ works for all cases
    });
});
