document.addEventListener('DOMContentLoaded', function () {
    const profilePic = document.querySelector('.profile-pic');
    if (!profilePic) return;

    const originalPic = 'assets/profile_pic.jpg';
    const hoverPic = 'assets/profile_pic_on_hover.jpg';

    profilePic.addEventListener('mouseenter', function () {
        profilePic.src = hoverPic;
    });

    profilePic.addEventListener('mouseleave', function () {
        profilePic.src = originalPic;
    });
});