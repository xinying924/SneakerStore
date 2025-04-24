const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    { 
        id: 1,
        title: "Air Force",
        price: 109,
        colors: [
            { code: "black", img: "./img/Product/air.png" },
            { code: "darkblue", img: "./img/Product/air2.png" },
        ],
    },
    { 
        id: 2,
        title: "Air Jordan",
        price: 139,
        colors: [
            { code: "lightgray", img: "./img/Product/jordan.png" },
            { code: "green", img: "./img/Product/jordan2.png" },
        ],
    },
    { 
        id: 3,
        title: "Blazer",
        price: 99,
        colors: [
            { code: "lightgray", img: "./img/Product/blazer.png" },
            { code: "green", img: "./img/Product/blazer2.png" },
        ],
    },
    { 
        id: 4,
        title: "Crater",
        price: 119,
        colors: [
            { code: "black", img: "./img/Product/crater.png" },
            { code: "lightgray", img: "./img/Product/crater2.png" },
        ],
    },
    { 
        id: 5,
        title: "Hippie",
        price: 129,
        colors: [
            { code: "gray", img: "./img/Product/hippie.png" },
            { code: "black", img: "./img/Product/hippie2.png" },
        ],
    },
    { 
        id: 6,
        title: "Pegasus",
        price: 159,
        colors: [
            { code: "black", img: "./img/Product/pegasus.png" },
        ],
    },
];

let choosenProduct = products[0];

// Select all product images (e.g. banner + order popup)
const productImgs = document.querySelectorAll(".productImg");

const currentProductTitle = document.querySelector(".productTitle");    
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Slide to product
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // Update current product
        choosenProduct = products[index];

        // Update product details
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "RM" + choosenProduct.price;

        // Smoothly change all product images
        productImgs.forEach(img => {
            img.style.opacity = 0;
            setTimeout(() => {
                img.src = choosenProduct.colors[0].img;
                img.style.opacity = 1;
            }, 300);
        });

        // Update color options
        currentProductColors.forEach((color, colorIndex) => {
            if (choosenProduct.colors[colorIndex]) {
                color.style.backgroundColor = choosenProduct.colors[colorIndex].code;
                color.style.display = "inline-block";
            } else {
                color.style.display = "none"; // Hide unused color slots
            }
        });
    });
});

// Change product image when color is clicked
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        productImgs.forEach(img => {
            img.style.opacity = 0;
            setTimeout(() => {
                img.src = choosenProduct.colors[index].img;
                img.style.opacity = 1;
            }, 300);
        });
    });
});

// Change style when size is selected
currentProductSizes.forEach((size) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((s) => {
            s.style.backgroundColor = "white";
            s.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

// Payment modal
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});
