document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const commentsSection = document.getElementById('commentsSection');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const userName = document.getElementById('userName').value;
        const userComment = document.getElementById('userComment').value;

        if (userName && userComment) {
            const commentBlock = document.createElement('div');
            commentBlock.className = 'alert alert-secondary mt-2';
            commentBlock.innerHTML = `<strong>${userName}:</strong> ${userComment}`;

            commentsSection.appendChild(commentBlock);

            form.reset();
        }
    });
});
