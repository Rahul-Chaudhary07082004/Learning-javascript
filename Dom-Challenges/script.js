// example 1 
document
    .getElementById("changeTextButton")
    .addEventListener("click", function () {
        let paragraph = document.getElementById("myParagraph");
        paragraph.textContent = "This paragraph has changed"
    })

// example 2
document
    .getElementById("highlightFirstCity")
    .addEventListener("click", function () {
        let citieslist = document.getElementById("citiesList");
        citieslist.firstElementChild.classList.add("highlight");
    })

// example 3
document
    .getElementById("changeOrder")
    .addEventListener("click", function () {
        let coffeetype = document.getElementById("coffeeType");
        coffeetype.textContent = "Espresso";
    })

// example 4
document
    .getElementById("addNewItem")
    .addEventListener("click", function () {
        let newItem = document.createElement('li')
        newItem.textContent = "Eggs"
        document.getElementById("shoppingList").appendChild(newItem);
    })

// example 5
document
    .getElementById("removeLastTask")
    .addEventListener("click", function () {
        let tasklist = document.getElementById("taskList");
        tasklist.lastElementChild.remove();
    })

// example 6
document
    .getElementById("clickMeButton")
    .addEventListener("dblclick", function () {
        alert("chaicode");
    });

// example 7
document
    .getElementById("teaList")
    .addEventListener("click", function () {
        if (event.target && event.target.matches(".teaItem")) {
            alert("you have selected " + event.target.textContent)
        }
    });

// example 8
document
    .getElementById("feedbackForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        let feedback = document.getElementById("feedbackInput").value;
        console.log(feedback);
        document.getElementById("feedbackDisplay").textContent = `feedback is : ${feedback}` 
    });

// example 9
