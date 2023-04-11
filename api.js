var from = document.getElementById("form-head");

from.addEventListener("submit", saveLocalStroage);

function saveLocalStroage(e) {
    e.preventDefault();
    const name = e.target.fullname.value;
    const phone = e.target.number.value;
    const email = e.target.emailId.value;
    const dateToCall = e.target.date_to_call.value;
    const obj = {
        name,
        email,
        phone,
        dateToCall
    }
    axios.post(`https://crudcrud.com/api/c34e6520e5c24a2a91f3388a134f436c/appData`, obj)
        .then((res) => {
            showOnTheScreen(res.data)
            console.log(res)
        })
        .catch((err) => {
            document.body.innerHTML = document.body.innerHTML + "<h4>Something Went Worng</h4>"
            console.log(err)
        })
    // localStorage.setItem(obj.name, JSON.stringify(obj))
    // showOnTheScreen(obj);

}

function showOnTheScreen(obj) {
    const parantElm = document.getElementById("listOfItem");
    const childElm = document.createElement("li");
    childElm.textContent = childElm.textContent + `${obj.name} : ${obj.email} : ${obj.phone} : ${obj.dateToCall}`;
    const deleteBtn = document.createElement("input");
    deleteBtn.type = "button";
    deleteBtn.value = "Delete";
    deleteBtn.onclick = () => {
        localStorage.removeItem(obj.name)
        parantElm.removeChild(childElm)
    };
    const editBtn = document.createElement("input");
    editBtn.type = "button"
    editBtn.value = "Edit"
    editBtn.onclick = () => {
        localStorage.removeItem(obj.name)
        parantElm.removeChild(childElm)
        document.getElementById("nameInputTag").value = obj.name
        document.getElementById("emailInputTag").value = obj.email
        document.getElementById("numberlInputTag").value = obj.number
        document.getElementById("datelInputTag").value = obj.dateToCall

    };

    childElm.appendChild(deleteBtn);
    childElm.appendChild(editBtn);
    parantElm.appendChild(childElm);
}

