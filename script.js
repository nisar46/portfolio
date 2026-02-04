// script.js - Powering the Interactive Console

document.addEventListener('DOMContentLoaded', () => {
    // Console Animation Logic
    const consoleOutput = document.getElementById('console-output');
    const logs = [
        { type: 'INFO', msg: 'System check initiated...', color: 'blue' },
        { type: 'INFO', msg: 'Scanning local directories for compliance...', color: 'blue' },
        { type: 'WARN', msg: 'Legacy format detected in /rural_uploads', color: 'yellow' },
        { type: 'ACTION', msg: 'Normalizing data to FHIR standards...', color: 'blue' },
        { type: 'SUCCESS', msg: 'Interoperability checks passed (14/14).', color: 'green' },
        { type: 'INFO', msg: 'DPDP Privacy Wrapper: ACTIVE', color: 'blue' },
        { type: 'SECURE', msg: 'Session 884-XJ-99 secured.', color: 'green' }
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

    // Start the animation after a brief delay
    setTimeout(addLog, 1000);
});
