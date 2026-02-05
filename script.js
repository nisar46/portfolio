// script.js - Powering the Interactive Console

document.addEventListener('DOMContentLoaded', () => {
    // Console Animation Logic
    const consoleOutput = document.getElementById('console-output');
    const logs = [
        { type: 'AGENT', msg: 'Spawning OmniIngest orchestrator...', color: 'blue' },
        { type: 'THINK', msg: 'Evaluating Rule 8 Erasure for regional_data...', color: 'yellow' },
        { type: 'ACTION', msg: 'Prompting Agent: "Normalizer" to FHIR...', color: 'blue' },
        { type: 'SUCCESS', msg: 'Cross-node interoperability validated.', color: 'green' },
        { type: 'AGENT', msg: 'LLM Reasoning Loop: Compliance check passed.', color: 'blue' },
        { type: 'SECURE', msg: 'Pseudonymization tokenized in 42ms.', color: 'green' },
        { type: 'VIBE', msg: 'System integrity: OPTIMAL.', color: 'green' }
    ];

    let logIndex = 0;

    function addLog() {
        if (logIndex >= logs.length) return; // Stop when done

        const log = logs[logIndex];
        const now = new Date();
        const timeString = `[${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}]`;

        const logDiv = document.createElement('div');
        logDiv.classList.add('log-line');

        let typeClass = 'blue';
        if (log.type === 'SUCCESS') typeClass = 'green';
        if (log.type === 'WARN') typeClass = 'yellow';
        if (log.type === 'SECURE') typeClass = 'green';

        logDiv.innerHTML = `<span class="timestamp">${timeString}</span> <span class="${typeClass}">${log.type}</span> ${log.msg}`;

        // Insert before the blinking cursor
        const blinker = consoleOutput.querySelector('.blink');
        consoleOutput.insertBefore(logDiv, blinker);

        logIndex++;

        // Randomize typing speed for realism
        setTimeout(addLog, Math.random() * 800 + 400);
    }

    // Hamburger Menu Logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const body = document.body;

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            // Prevent scrolling when menu is open
            body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-item, .cta-button').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = 'auto';
            });
        });
    }

    // Start the animation after a brief delay
    setTimeout(addLog, 1000);
});
