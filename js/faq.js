document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');

            this.classList.toggle('active');
            
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                // Close previously opened questions
                questions.forEach(q => {
                    const a = q.nextElementSibling;
                    if (a.style.display === 'block') {
                        a.style.display = 'none';
                        q.querySelector('i').classList.remove('fa-chevron-up');
                        q.querySelector('i').classList.add('fa-chevron-down');
                    }
                });
                
                // Open the clicked question
                answer.style.display = 'block';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });
});
