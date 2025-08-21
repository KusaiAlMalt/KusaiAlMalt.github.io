document.addEventListener('DOMContentLoaded', () => {
    setupProfilePicHover();
});

function setupProfilePicHover() {
    const profilePic = document.querySelector('.profile-pic');
    if (!profilePic) return;

    const originalPic = 'assets/profile_pic.jpg';
    const hoverPic = 'assets/profile_pic_on_hover.jpg';

    profilePic.addEventListener('mouseenter', () => {
        profilePic.src = hoverPic;
    });

    profilePic.addEventListener('mouseleave', () => {
        profilePic.src = originalPic;
    });
}