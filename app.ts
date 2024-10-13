document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-skills');
    const skillsSection = document.getElementById('skills');

    toggleButton?.addEventListener('click', () => {
        if (skillsSection) {
            skillsSection.style.display = skillsSection.style.display === 'block' ? 'none' : 'block';
        }
    });
});