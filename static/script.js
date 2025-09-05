document.addEventListener('DOMContentLoaded', function() {

document.getElementById('aboutme-btn').addEventListener('click', function() {
document.getElementById('aboutme-btn').classList.add('active');
document.getElementById('aboutme-pge').classList.remove('hide');

document.getElementById('gimmicks-btn').classList.remove('active');
document.getElementById('gimmicks-pge').classList.add('hide');

document.getElementById('oc-btn').classList.remove('active');
document.getElementById('oc-pge').classList.add('hide');
});

/* */

document.getElementById('gimmicks-btn').addEventListener('click', function() {
document.getElementById('aboutme-btn').classList.remove('active');
document.getElementById('aboutme-pge').classList.add('hide');

document.getElementById('gimmicks-btn').classList.add('active');
document.getElementById('gimmicks-pge').classList.remove('hide');

document.getElementById('oc-btn').classList.remove('active');
document.getElementById('oc-pge').classList.add('hide');
});

/* */

document.getElementById('oc-btn').addEventListener('click', function() {
document.getElementById('aboutme-btn').classList.remove('active');
document.getElementById('aboutme-pge').classList.add('hide');

document.getElementById('gimmicks-btn').classList.remove('active');
document.getElementById('gimmicks-pge').classList.add('hide');

document.getElementById('oc-btn').classList.add('active');
document.getElementById('oc-pge').classList.remove('hide');
});

});
