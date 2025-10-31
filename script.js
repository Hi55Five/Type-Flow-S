// Modo escuro/claro
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Por padrão, o site inicia no modo escuro (preto/vermelho)
// Verificar se o usuário já tem uma preferência salva
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
} else {
    // Padrão é o modo escuro
    body.classList.remove('light-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Botão voltar ao topo
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
    
    // Atualizar barra de progresso
    const progressBar = document.getElementById('progressBar');
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = progress + '%';
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Efeito de digitação no título
const title = document.querySelector('h1');
const originalText = title.textContent;
title.textContent = '';

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        title.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Iniciar efeito de digitação após um breve delay
setTimeout(typeWriter, 500);

// Atualizar indicador de passos conforme rolagem
const steps = document.querySelectorAll('.step');
const stepDots = document.querySelectorAll('.step-dot');

function updateStepIndicator() {
    let currentStep = 0;
    
    steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
            currentStep = index;
        }
    });
    
    stepDots.forEach((dot, index) => {
        if (index <= currentStep) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', updateStepIndicator);

// Efeito de brilho intermitente no título
setInterval(() => {
    title.classList.toggle('glow-text');
}, 2000);