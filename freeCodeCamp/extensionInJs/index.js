let myLead = []

// myLead=JSON.parse(myLead)

// myLead.push(nigger)

// myLead=JSON.stringify(myLead)
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deEl = document.getElementById("delete-btn")

deEl.addEventListener("dblclick", function () {
    localStorage.clear()
    myLead = []
    renderlist(myLead)
})



// localStorage.setItem("myLead", "www.google.com")
// const as it is not going to be reassigned
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))

if (leadsFromLocalStorage) {
    myLead = leadsFromLocalStorage
    renderlist(myLead)
}

function renderlist(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems +=
            `<li>
                    <a href="${leads[i]}" target='_blank'>
                    ${leads[i]}
                    </a>
            </li>`
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function () {
    myLead.push(inputEl.value)
    localStorage.setItem("myLead", JSON.stringify(myLead))

    renderlist(myLead)
    inputEl.value = ""
})

// false,NaN, "", 0, null, undefined -these are the only false values





