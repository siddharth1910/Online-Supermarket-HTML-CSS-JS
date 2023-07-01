const tabs = document.querySelectorAll('.tabs__btn');
const tabsContent = document.querySelectorAll('.tabs__body');

if (tabsContent.length > 0 || tabs.length > 0) {

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.remove('active');
        });

        tabs.forEach(item => {
            item.classList.remove('active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('active');
        tabs[i].classList.add('active');
    }

    hideTabContent();
    showTabContent();

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            hideTabContent();
            showTabContent(index);
        });
    });
}

function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("amount").value;
    var balance = document.getElementById("balance");
    a= balance.value;
    document.getElementById("balance").innerHTML = parseInt(inputVal)+parseInt(1000);
    
    // Displaying the value
    alert("Rs"+inputVal+" has been added");
}