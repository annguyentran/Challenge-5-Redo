
var saveButtons = $('.saveButton')




saveButtons.click(function (event) {
    event.preventDefault()

    var specificTextArea = $(this).siblings("textarea").val()
    var specificID = $(this).siblings("textarea").attr("id")

    console.log(specificTextArea)

    console.log(specificID)

    localStorage.setItem(specificID, specificTextArea);

    loadSchedule()

})

function loadSchedule() {

    let textBoxIDS = ['text-9:00am', "text-10:00am", "text-11:00am", "text-12:00pm", "text-01:00pm", "text-02:00pm", "text-03:00pm", "text-04:00pm"
        , "text-05:00pm"]

    for (let i = 0; i < textBoxIDS.length; i++) {

        var localStorageKey = textBoxIDS[i]
        var localStorageValue = localStorage.getItem(localStorageKey)

        let textbox = document.getElementById(localStorageKey)
        $(textbox).html(localStorageValue) 
    }

}

loadSchedule()


function changeBackgroundColor() {

    let currentTime = new Date()
    let hour = currentTime.getHours()

    for (let i = 9; i < hour; i++) {

        let row = document.getElementById('row-' + i)
        row.style.backgroundColor = 'aqua'



    }
    if (hour >= 9 && hour <= 17) {
        let row = document.getElementById('row-' + hour)
        row.style.backgroundColor = "antiquewhite"
    }

    for (let i = hour + 1; i <= 17; i++) {
        
        let row = document.getElementById('row-' + i)
        row.style.backgroundColor = 'burlywood'

    }
}
changeBackgroundColor()

