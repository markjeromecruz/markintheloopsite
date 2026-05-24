// Behavior only used on content.html: series-card expand, resource filter, prompt modal.

window.toggleResources = function (partId) {
    const resourcesList = document.getElementById(partId + '-resources');
    if (!resourcesList) return;
    const isVisible = resourcesList.style.display !== 'none';

    document.querySelectorAll('.series-grid .resources-list').forEach(list => {
        list.style.display = 'none';
    });

    if (!isVisible) resourcesList.style.display = 'block';
};

window.filterResources = function (category, element) {
    const allCards = document.querySelectorAll('#resources-container .resource-card');
    document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
    element.classList.add('active');

    allCards.forEach(card => {
        card.style.display = (category === 'all' || card.dataset.category === category) ? 'block' : 'none';
    });
};

const prompts = {
    'modify-ui': {
        title: 'UI Modification Prompt',
        text: `I want to modify a python script. I want to change the bg colors and buttons to make it more presentable and appealing. Think as a UI designer and make the changes. Print the entire code once you are done so I can copy and paste:\n\n<add your Python code here>`
    },
    'cursor-improve': {
        title: 'Cursor App Improvement Prompt',
        text: `Help me come up with ideas to improve this app. Give me some suggestions and help me make the changes!`
    }
};

window.showPrompt = function (promptId) {
    const prompt = prompts[promptId];
    if (!prompt) return;
    document.getElementById('promptTitle').textContent = prompt.title;
    document.getElementById('promptText').textContent = prompt.text;
    document.getElementById('promptModal').style.display = 'block';
};

window.copyToClipboard = function () {
    const promptText = document.getElementById('promptText').textContent;
    navigator.clipboard.writeText(promptText).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = originalText; }, 2000);
    });
};

window.closePromptModal = function () {
    document.getElementById('promptModal').style.display = 'none';
};

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('promptModal');
    if (modal) {
        modal.addEventListener('click', function (event) {
            if (event.target === this) window.closePromptModal();
        });
    }
});
