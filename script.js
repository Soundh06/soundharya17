document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("feedbackForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const feedback = document.getElementById("feedback").value;
        
        const feedbackData = {
            name: name,
            email: email,
            feedback: feedback
        };
        
        console.log("Feedback submitted:", feedbackData);
        
        // Clear the form
        form.reset();
    });
});