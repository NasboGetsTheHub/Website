document.addEventListener('DOMContentLoaded', function() {

document.getElementById('aboutme-btn').addEventListener('click', function() {
document.getElementById('aboutme-btn').classList.add('active');
document.getElementById('aboutme-pge').classList.remove('hide');

document.getElementById('gimmicks-btn').classList.remove('active');
document.getElementById('gimmicks-pge').classList.add('hide');

document.getElementById('article-btn').classList.remove('active');
document.getElementById('article-pge').classList.add('hide');

document.getElementById('comforts-btn').classList.remove('active');
document.getElementById('comforts-pge').classList.add('hide');
});

/* */

document.getElementById('gimmicks-btn').addEventListener('click', function() {
document.getElementById('aboutme-btn').classList.remove('active');
document.getElementById('aboutme-pge').classList.add('hide');

document.getElementById('gimmicks-btn').classList.add('active');
document.getElementById('gimmicks-pge').classList.remove('hide');

document.getElementById('article-btn').classList.remove('active');
document.getElementById('article-pge').classList.add('hide');

document.getElementById('comforts-btn').classList.remove('active');
document.getElementById('comforts-pge').classList.add('hide');
});

/* */

document.getElementById('article-btn').addEventListener('click', function() {
document.getElementById('aboutme-btn').classList.remove('active');
document.getElementById('aboutme-pge').classList.add('hide');

document.getElementById('gimmicks-btn').classList.remove('active');
document.getElementById('gimmicks-pge').classList.add('hide');

document.getElementById('article-btn').classList.add('active');
document.getElementById('article-pge').classList.remove('hide');

document.getElementById('comforts-btn').classList.remove('active');
document.getElementById('comforts-pge').classList.add('hide');
});

/* */

document.getElementById('comforts-btn').addEventListener('click', function() {
document.getElementById('aboutme-btn').classList.remove('active');
document.getElementById('aboutme-pge').classList.add('hide');

document.getElementById('gimmicks-btn').classList.remove('active');
document.getElementById('gimmicks-pge').classList.add('hide');

document.getElementById('article-btn').classList.remove('active');
document.getElementById('article-pge').classList.add('hide');

document.getElementById('comforts-btn').classList.add('active');
document.getElementById('comforts-pge').classList.remove('hide');
});

});
