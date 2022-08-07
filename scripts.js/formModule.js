// creating a function that stops the page from going to formspree's website and shows the user either a success or an error!

export const form = document.getElementById("myForm");
const input = document.getElementById("input");
// defining the function that will return either error or success
export async function handleSubmit(event) {
    event.preventDefault(); //making sure the form page does not load the formspree website
    input.textContent = ""; //clearing the input once form is submitted
    const status = document.getElementById("myFormStatus");
    const data = new FormData(event.target);
    

    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
    }
    }).then(response => {
            if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            status.classList.add("success")
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                    status.classList.add("error")
                }
            })
        }
    }).catch( () => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    status.classList.add("error")

    });
}


