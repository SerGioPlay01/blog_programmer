function copyCode() {
    const codeBlock = document.getElementById('code-block').textContent;
    navigator.clipboard.writeText(codeBlock).then(() => {
        alert('Скопировано!');
    }).catch(err => {
        console.error('Ошибка копирования:', err);
    });
}