// ==========================================
// 1. APPLICATION FUNCTIONALITY
// ==========================================
function initApplication() {
    const form = document.getElementById('signupForm');
    const emailInput = document.getElementById('emailInput');
    const messageSummary = document.getElementById('messageSummary');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop default page refresh
        
        const emailValue = emailInput.value.trim();

        if (emailValue === "") {
            messageSummary.className = "success-msg"; 
            messageSummary.style.backgroundColor = "#641e1e"; // Error styling color override
            messageSummary.innerText = "Error: Email field is required!";
            messageSummary.style.display = "block";
        } else {
            messageSummary.className = "success-msg";
            messageSummary.innerText = `Success! ${emailValue} has been subscribed.`;
            messageSummary.style.display = "block";
        }
    });
}

// Initialize the app logic immediately when the script runs
initApplication();


// ==========================================
// 2. INTEGRATION TEST CASES
// ==========================================
const expect = chai.expect;

describe('Form Subscription Integration Tests', () => {
    let emailInput, submitBtn, messageSummary;

    // Grab fresh references to DOM layout elements before each test runs
    beforeEach(() => {
        emailInput = document.getElementById('emailInput');
        submitBtn = document.getElementById('submitBtn');
        messageSummary = document.getElementById('messageSummary');
        
        // Reset element states explicitly
        emailInput.value = "";
        messageSummary.style.display = "none";
        messageSummary.innerText = "";
    });

    it('should display a success message when a valid email is submitted', () => {
        // Step 1: Simulate a user typing into the input box
        emailInput.value = "testuser@domain.com";

        // Step 2: Simulate a user clicking the submit button
        submitBtn.click();

        // Step 3: Assert that the JavaScript logic updated the DOM correctly
        expect(messageSummary.style.display).to.equal("block");
        expect(messageSummary.innerText).to.contain("Success! testuser@domain.com");
    });

    it('should display an error alert when the form is submitted blank', () => {
        // Step 1: Intentionally leave the input blank
        emailInput.value = "";

        // Step 2: Trigger submission action
        submitBtn.click();

        // Step 3: Assert that the UI correctly caught the missing input logic
        expect(messageSummary.style.display).to.equal("block");
        expect(messageSummary.innerText).to.contain("Error: Email field is required!");
    });
});