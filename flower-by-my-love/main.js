onload = () => {
    document.body.classList.remove("container");
    document.querySelector('.music').play();
    
    // Show the message box after a delay (e.g., 5 seconds)
    setTimeout(() => {
        document.getElementById('messageBox').style.display = 'block';
    }, 5000); // Adjust the delay as needed
};
