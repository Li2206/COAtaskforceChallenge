const Interaction = document.querySelectorAll('.image_interaction img');
const link = document.querySelectorAll('a');
link.hidden = true
Interaction.forEach(element => {
    element.addEventListener('mouseover', function() {
        element.style.display = 'flex';
        element.style.flexDirection = 'column';
        element.style.alignContent = 'space-between';
        element.style.transition = '0.3s';
        element.style.transform = 'scale(1.1)';
        element.style.WebkitFilter = 'grayscale(100%)';
        element.style.filter = 'blur(6px) grayscale(100%)';
        element.style.opacity = '0.5';
        console.log('helllo!')
    });
});

Interaction.forEach(element => {
    element.addEventListener('mouseout', function() {
        element.style.display = 'flex';
        element.style.flexDirection = 'column';
        element.style.alignContent = 'space-between';
        element.style.transition = '0.3s';
        element.style.transform = 'scale(1)';
        element.style.WebkitFilter = 'none';
        element.style.filter = 'none';
        element.style.opacity = '1';
        console.log('helllo! yes')
    });
});



