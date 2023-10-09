const testimonialData = [
    {
        author: "Sumiyati",
        quote: "Mantap euyy",
        image: "https://images.unsplash.com/photo-1512087321902-02867cabd81a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        rating: 5
    },
    {
        author: "Sukijan",
        quote: "Keren bingitss",
        image: "https://images.unsplash.com/photo-1622427479715-4f2b1f320707?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        rating: 4
    },
    {
        author: "Jisooo",
        quote: "Aku suka banget",
        image: "https://images.unsplash.com/photo-1536291734366-71f75ba1a9db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80",
        rating: 4
    },
    {
        author: "Yuki Yukinoshita",
        quote: "Tolong benerin yaa sayaangg",
        image: "https://images.unsplash.com/photo-1536291734366-71f75ba1a9db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80",
        rating: 3
    },
    {
        author: "Puan",
        quote: "Saya mau ada logo bantengnya",
        image: "https://www.dpr.go.id/images_pemberitaan/images/Agustus%202021/ENO_1619.jpg",
        rating: 1
    },

];

function allTestimonial() {
    let testimonialHTML = "";

    testimonialData.forEach(function (item) {
        testimonialHTML += 
        `
            <div class="testimonial">
                <img class="profile-testimonial" src="${item.image}" alt="profile">
                <p class="quote">${item.quote}</p>
                <p class="author">${item.author}</p>
                <p class="author">${item.rating} <i data-feather="star"></i> </p>
            </div>
        `
    })
    
    document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonial();

// filtered testimonial
function filterTestimonial(rating) {
    let testimonialHTML = ``;

    const testimonialFiltered = testimonialData.filter(function (item) {
        return item.rating === rating;
    });

    // console.log(testimonialFiltered)

    if (testimonialFiltered.length === 0) {
        testimonialHTML += `<h1> Data not found </h1>`;
    }
    else {
        testimonialFiltered.forEach(function (item) {
        testimonialHTML += 
        `
            <div class="testimonial">
                <img
                    class="profile-testimonial"
                    src="${item.image}"
                    alt="profile"
                />
                <p class="quote">${item.quote}</p>
                <p class="author">- ${item.author}</p>
                <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
            </div>
        `
        });
    }

    document.getElementById("testimonials").innerHTML = testimonialHTML;

}