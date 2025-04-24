const tabs = document.querySelectorAll(".tabs-container .tab");
const contents = document.querySelectorAll(".tabs-container .content");

const removeActiveClass = () => {
    tabs.forEach((t) => {
        t.classList.remove("active");
    });

    contents.forEach((c) => {
        c.classList.remove("active");
    });
};

tabs.forEach((t, i) => {
    t.addEventListener("click", () => {
        removeActiveClass();
        contents[i].classList.add("active");
        t.classList.add("active");
    });
});

function toggleImage(type) {
    const checkbox = document.getElementById(`show${type}Image`);
    const image = document.getElementById(type === 'Air' ? 'image1' :
        type === 'Sea' ? 'image2' :
            type === 'Plus' ? 'image3' : 'image');
    const button = document.getElementById(`change${type}Button`);
    const displayStyle = checkbox.checked ? 'block' : 'none';
    image.style.display = displayStyle;
    button.style.display = displayStyle;
}