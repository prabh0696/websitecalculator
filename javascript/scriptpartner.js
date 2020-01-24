let partnerdata = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        const addpartner = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let pdata = {
                id: Date.now(),
                Name: document.getElementById('fname').value,
				age: document.getElementById('age').value,
                gender: document.getElementById('gender').value,
                nature: document.getElementById('nature').value,
				eyecolour:document.getElementById('color').value,
				haircolour:document.getElementById('haircolor').value,
                hobby: document.getElementById('hobby').value
               
            }
            partnerdata.push(pdata);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

           

            //saving to localStorage
            localStorage.setItem('PartnersdataList', JSON.stringify(partnerdata) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btnn').addEventListener('click', addpartner);
        });