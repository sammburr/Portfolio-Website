document.addEventListener('DOMContentLoaded', () => {
    const contIcon = document.querySelector('#cont-icon');

    const contLis = document.getElementsByClassName('cont-li');
    console.log(contLis);

    for (var i = 0; i < contLis.length; i++) {
        const li = contLis[i];
        li.addEventListener('mouseenter', () => {
            switch(li.id) {
                case 'intro-cont':
                    contIcon.src = './intro_icon.svg';
                    break;
                case 'skills-cont':
                    contIcon.src = './skills_icon.svg';
                    break;
                case 'proj-cont':
                    contIcon.src = './projects_icon.svg';
                    break;
                case 'testi-cont':
                    contIcon.src = './testi_icon.svg';
                    break;
                case 'cv-cont':
                    contIcon.src = './cv_icon.svg';
                    break;

            }
        });
    }

});