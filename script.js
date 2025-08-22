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

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function navSelection(pageId) {
    document.querySelectorAll('.navb').forEach(btn => {
    btn.classList.remove('selected');
    });
    document.getElementById(pageId).classList.add('selected');
}