document.addEventListener('DOMContentLoaded', function () {
    const profilePic = document.querySelector('.profile-pic');
    if (!profilePic) return;

    const originalSrc = 'assets/profile_pic.jpg';
    const hoverSrc = 'assets/profile_pic_on_hover.jpg';

    profilePic.addEventListener('mouseenter', function () {
        profilePic.src = hoverSrc;
    });

    profilePic.addEventListener('mouseleave', function () {
        profilePic.src = originalSrc;
    });
});