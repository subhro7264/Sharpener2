var from = document.getElementById("form-head");

from.addEventListener("submit", saveLocalStroage);

function saveLocalStroage(e) {
    e.preventDefault();
    const todo = e.target.Todo.value;
    const des = e.target.Description.value;
    
    const obj = {
        todo,
     des
        
    }
    axios.post(`https://crudcrud.com/api/9892fbf5a3694f2381de88e40decb361/appData`, obj)
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




window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/9892fbf5a3694f2381de88e40decb361/appData")
    .then((res) => {
        console.log(res)
        for (let i = 0; i < res.data.length; i++) {
            showOnTheScreen(res.data[i]);
            
        }
    })
    .catch((err) => {
        console.log(err)
    })
})




function showOnTheScreen(obj) {
    const parantElm = document.getElementById("listOfItem");
    const childElm = document.createElement("li");
    childElm.textContent = childElm.textContent + `${obj.todo} : ${obj.des}`;
    const deleteBtn = document.createElement("input");
    deleteBtn.type = "button";
    deleteBtn.value = "Done";
    deleteBtn.onclick = () => {
        localStorage.removeItem(obj.todo)
        parantElm.removeChild(childElm)
        document.getElementById("tdone").innerHTML=`${obj.todo} :${obj.des}`;

    };
    const editBtn = document.createElement("input");
    editBtn.type = "button"
    editBtn.value = "X"
    editBtn.onclick = () => {
        localStorage.removeItem(obj.todo);
        parantElm.removeChild(childElm);
    };

    childElm.appendChild(deleteBtn);
    childElm.appendChild(editBtn);
    parantElm.appendChild(childElm);
}
