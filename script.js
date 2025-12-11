//Character Count Function
function CountInput() {
    let CountInput = document.getElementById("CharInput").value;
    let CountOutput = CountInput.length; 
    
    document.getElementById("CountResult").innerHTML = "Result here: " + CountOutput;
}
document.getElementById("btnCount").addEventListener("click", CountInput);

//Button effect
const particleField = document.getElementById('particleField');
function createParticles() {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
        particle.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
        particle.style.animation = `particleFloat ${1 + Math.random() * 2}s infinite`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        particleField.appendChild(particle);
    }
}
createParticles();
