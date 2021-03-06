const baseUrl = 'https://noroffcors.herokuapp.com/'+'http://api.siljes.tech/wp-json/wp/v2/posts/';

async function getPosts(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);

        document.querySelector('.loading').classList.add('hide');

        for(let i = 0; i < result.length; i++){

            if(i === 2){ break; }

            for(let i = 0; i < result[i].title.length; i++){}
            for(let i = 0; i < result[i].excerpt.length; i++){}
            for(let i = 0; i < result[i].better_featured_image.length; i++){}

            document.querySelector('.postCard').innerHTML += `
	        <a href="recipe.html?id=${result[i].id}"><div class="home__post">
	        <div class="home__post--info">
	        <h2>${result[i].title.rendered}</h2>
	        <p>${result[i].excerpt.rendered}</p>
            <div class="home__post--cta">
            <p>Read more</p>
            <i class="fas fa-chevron-right"></i>
            </div>
	        </div>
	        <div class="home__post--img"><img class="featured--img" src="${result[i].better_featured_image.source_url}" alt="${result[i].better_featured_image.alt_text}"></div>
	        </div></a>`

        };

    } catch (error) {
        document.querySelector('.alert').innerHTML += showAlertToUser('An error occured','danger')
    } finally {
        setTimeout(function() {
            document.querySelector('.alert').innerHTML = '';
        }, 3000);
    }
};


getPosts(baseUrl);