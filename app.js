async function generateHash() {
    try {
        const inputString = document.getElementById('inputString').value;
        if (!inputString) {
            document.getElementById('result').innerText = 'Please enter a string.';
            return;
        }

        const encoder = new TextEncoder();
        const data = encoder.encode(inputString);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        document.getElementById('result').innerText = `${hashHex}`;
    } catch (error) {
        console.error('Error generating hash:', error);
        document.getElementById('result').innerText = 'An error occurred.';
    }
}
  
