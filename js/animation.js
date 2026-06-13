let articles = document.querySelectorAll('.article, #myVideo, .article-columns-citation, .article-columns, .article-images, .illustration, .events, .events-line, .one-two-column img, .two-two-column img');

if ('IntersectionObserver' in window){
    let observer = new IntersectionObserver(onChange);
    articles.forEach(article => observer.observe(article));

    function onChange(changes, observer){
        changes.forEach(change => {
            if(change.intersectionRatio > 0){
                loadImage(change.target);
                observer.unobserve(change.target);
            }
        });
    }

}else{
    articles.forEach(article => loadImage(article));
}

function loadImage(article) {
    article.classList.add('article-animation');
}

function openNav(check){
    const myNav = document.getElementById("myNav");
    myNav.style.height = check.checked ? "100%" : "0%";
    const overlayContent = document.getElementById("myContent");
    overlayContent.style.opacity = check.checked ? "100%" : "0%";
}