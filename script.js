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

function expToggle(pageId){
    document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('chosen');
    });
    document.getElementById(pageId).classList.add('chosen');

    document.querySelectorAll('.exp').forEach(exp => {
    exp.classList.remove('shown');
    });
    document.getElementById("exp"+pageId).classList.add('shown');
}

function openVideoModal(videoPath) {
    const video = document.getElementById('projectVideo');
    video.pause();
    video.currentTime = 0;
    video.src = videoPath;
    video.load();
    document.getElementById('videoModal').style.display = 'flex';
}
window.openVideoModal = openVideoModal;

function closeVideoModal() {
    const video = document.getElementById('projectVideo');
    video.pause();
    video.currentTime = 0;
    document.getElementById('videoModal').style.display = 'none';
}
window.closeVideoModal = closeVideoModal;