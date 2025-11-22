// Learn English Pro - Documentation Site
// Theme Switcher and Interactivity

document.addEventListener('DOMContentLoaded', () => {
  initThemeSwitcher();
  initAnimations();
});

// Theme Switcher
function initThemeSwitcher() {
  const savedTheme = localStorage.getItem('theme') || 'thanksgiving';
  applyTheme(savedTheme);
  
  // Create theme switcher button
  const header = document.querySelector('body');
  const themeSwitcher = document.createElement('div');
  themeSwitcher.id = 'theme-switcher';
  themeSwitcher.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
  `;
  
  themeSwitcher.innerHTML = `
    <button id="toggle-theme" class="theme-btn" title="Toggle Theme">
      🌙 Imperial
    </button>
  `;
  
  document.body.appendChild(themeSwitcher);
  
  document.getElementById('toggle-theme').addEventListener('click', () => {
    const currentTheme = document.body.className;
    const newTheme = currentTheme === 'thanksgiving' ? 'imperial' : 'thanksgiving';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

function applyTheme(theme) {
  document.body.className = theme;
  const btn = document.getElementById('toggle-theme');
  if (btn) {
    btn.textContent = theme === 'thanksgiving' ? '🌙 Imperial' : '🍂 Thanksgiving';
  }
}

// Animations
function initAnimations() {
  const elements = document.querySelectorAll('h2, h3, table');
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('fade-in');
    }, index * 50);
  });
}

// Copy to Clipboard for Code Blocks
document.querySelectorAll('.code-block').forEach(block => {
  const copyBtn = document.createElement('button');
  copyBtn.textContent = '📋 Copy';
  copyBtn.style.cssText = `
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 5px 10px;
    background: rgba(0,0,0,0.1);
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 12px;
  `;
  
  block.style.position = 'relative';
  block.appendChild(copyBtn);
  
  copyBtn.addEventListener('click', () => {
    const text = block.textContent;
    navigator.clipboard.writeText(text);
    const originalText = copyBtn.textContent;
    copyBtn.textContent = '✅ Copied!';
    setTimeout(() => {
      copyBtn.textContent = originalText;
    }, 2000);
  });
});

// Smooth Scroll for Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});
