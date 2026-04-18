const treeData = {
    question: "Is the equipment connected to a power source?",
    options: [
        { text: "Yes", next: { 
            question: "Is there residual energy (capacitors, pressure)?",
            options: [
                { text: "Yes", next: { question: "Action: Dissipate energy and apply Lockout.", options: [] } },
                { text: "No", next: { question: "Action: Apply Lockout immediately.", options: [] } }
            ]
        }},
        { text: "No", next: { question: "Action: Proceed with standard maintenance.", options: [] } }
    ]
};

let currentNode = treeData;

function render() {
    document.getElementById('question-text').innerText = currentNode.question;
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    currentNode.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.text;
        btn.onclick = () => { currentNode = opt.next; render(); };
        container.appendChild(btn);
    });
}

function resetApp() { currentNode = treeData; render(); }
render();