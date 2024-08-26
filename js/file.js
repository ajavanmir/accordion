/*
Copyright amir javanmir
Released on: Aug 26, 2024
*/
let accordion = document.querySelectorAll(".accordion");
accordion.forEach(function (item) {
    let title = item.querySelector(".accordion-title");
    title.addEventListener("click", event => {
        let parent = event.currentTarget.parentElement.parentElement;
        if (parent?.classList.contains("container")) {
            if (!event.currentTarget.classList.contains("open")) {
                parent.querySelector(".accordion-title.open")?.classList.remove("open");
                event.currentTarget.classList.add("open");
            }else event.currentTarget.classList.remove("open");
        }
    })
})