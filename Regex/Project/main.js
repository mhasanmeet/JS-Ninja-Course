const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const url = document.getElementById("url");
const city = document.getElementById("city");
const zip = document.getElementById("zip");
const submitButton = document.getElementById("submit");
const successAlert = document.getElementById("alert");

$('#success').hide();
$('#failure').hide();

let validFname = false;
let validLnmae = false;

fname.addEventListener('blur', () => {
    console.log("Name is Allert")

    // Validate name
    let regex = /[a-z]{8}/i
    let str = fname.value
    //console.log(regex, str);
    if(regex.test(str)){
        //console.log('It is matched');
        //fname.classList.remove('is-invalid');
        fname.classList.add('is-valid');
        fname.classList.remove('is-invalid');
        validFname = true;
    }
    else{
        //console.log("not matched")
        fname.classList.remove('is-valid');
        fname.classList.add('is-invalid');
        validFname = false;
    }
})