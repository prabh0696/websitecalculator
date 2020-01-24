let personal = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        const personaldata = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let person = {
                id: Date.now(),
                Name: document.getElementById('fname').value,
				age: document.getElementById('age').value,
                email: document.getElementById('email').value,
                gender: document.getElementById('gender').value,
                nature: document.getElementById('nature').value,
				eyecolour:document.getElementById('color').value,
                hobby: document.getElementById('hobby').value
               
            }
            personal.push(person);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

           

            //saving to localStorage
            localStorage.setItem('PersonalDataList', JSON.stringify(personal) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btnn').addEventListener('click', personaldata);
        });