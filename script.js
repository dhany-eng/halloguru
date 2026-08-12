// ===== MENU MOBILE =====
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('open');
});

// ===== DARK MODE =====
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    this.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// ===== BACK TO TOP =====
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    backBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
});
backBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== PROGRAM TABS =====
const tabs = document.querySelectorAll('.program-tab');
const items = {
    matematika: document.getElementById('prog-matematika'),
    indonesia: document.getElementById('prog-indonesia'),
    inggris: document.getElementById('prog-inggris'),
    sempoa: document.getElementById('prog-sempoa')
};

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const prog = this.dataset.prog;
        Object.keys(items).forEach(key => {
            items[key].classList.toggle('active', key === prog);
        });
    });
});

// ===== STATISTIK ANIMASI =====
function animateNumbers() {
    const targets = [
        { el: document.getElementById('countSiswa'), target: 500, suffix: '+' },
        { el: document.getElementById('countPengajar'), target: 15, suffix: '' },
        { el: document.getElementById('countProgram'), target: 4, suffix: '' },
        { el: document.getElementById('countRating'), target: 4.9, suffix: '', decimal: true }
    ];
    targets.forEach(item => {
        if (!item.el) return;
        let current = 0;
        const step = Math.ceil(item.target / 30);
        const interval = setInterval(() => {
            current += step;
            if (current >= item.target) {
                current = item.target;
                clearInterval(interval);
            }
            item.el.textContent = (item.decimal ? current.toFixed(1) : Math.floor(current)) + (item.suffix || '');
        }, 40);
    });
}
window.addEventListener('load', animateNumbers);

// ===== FILTER BERITA & PAGINASI =====
let currentPage = 1;
const perPage = 3;

function getFilteredCards() {
    const search = document.getElementById('searchNews').value.toLowerCase();
    const category = document.getElementById('filterCategory').value;
    const cards = document.querySelectorAll('.news-card');
    return Array.from(cards).filter(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const cat = card.dataset.category || '';
        const matchSearch = title.includes(search) || search === '';
        const matchCat = category === 'all' || cat === category;
        return matchSearch && matchCat;
    });
}

function renderPagination(filtered) {
    const total = filtered.length;
    const totalPages = Math.ceil(total / perPage) || 1;
    if (currentPage > totalPages) currentPage = totalPages;
    const pag = document.getElementById('pagination');
    pag.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        if (i === currentPage) btn.classList.add('active');
        btn.onclick = function() {
            currentPage = i;
            applyFilter();
        };
        pag.appendChild(btn);
    }
    filtered.forEach((card, index) => {
        const page = Math.floor(index / perPage) + 1;
        card.style.display = (page === currentPage) ? 'block' : 'none';
    });
}

function applyFilter() {
    const filtered = getFilteredCards();
    renderPagination(filtered);
}

function resetFilter() {
    document.getElementById('searchNews').value = '';
    document.getElementById('filterCategory').value = 'all';
    currentPage = 1;
    applyFilter();
}

window.addEventListener('load', function() {
    applyFilter();
    document.getElementById('searchNews').addEventListener('input', function() {
        currentPage = 1;
        applyFilter();
    });
    document.getElementById('filterCategory').addEventListener('change', function() {
        currentPage = 1;
        applyFilter();
    });
});

// ===== TEXT-TO-SPEECH =====
function speakText(el) {
    const card = el.closest('.news-card');
    const text = card.querySelector('p').textContent;
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'id-ID';
        utterance.rate = 0.9;
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance);
    } else {
        alert('Browser Anda tidak mendukung fitur text-to-speech.');
    }
}

// ===== FAQ =====
function toggleFaq(el) {
    const item = el.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    // Tutup semua
    document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('open'));
    if (!isOpen) {
        item.classList.add('open');
    }
}

// ===== FORM VALIDASI & PREVIEW =====
const form = document.getElementById('registerForm');
const inputs = form.querySelectorAll('input, select, textarea');

function validateField(field) {
    const group = field.closest('.form-group');
    if (!group) return true;
    const err = group.querySelector('.error-msg');
    if (!err) return true;
    if (field.hasAttribute('required') && !field.value.trim()) {
        group.classList.add('error');
        group.classList.remove('success');
        err.style.display = 'block';
        return false;
    } else if (field.type === 'tel' && field.value.trim() && !/^[0-9]{10,15}$/.test(field.value.trim())) {
        group.classList.add('error');
        group.classList.remove('success');
        err.textContent = 'Masukkan nomor HP valid (10-15 digit)';
        err.style.display = 'block';
        return false;
    } else {
        group.classList.remove('error');
        group.classList.add('success');
        err.style.display = 'none';
        return true;
    }
}

inputs.forEach(inp => {
    inp.addEventListener('blur', function() { validateField(this); });
    inp.addEventListener('input', function() {
        if (this.closest('.form-group')?.classList.contains('error')) validateField(this);
    });
});

window.previewData = function() {
    const namaOrtu = document.getElementById('namaOrtu').value || '-';
    const namaAnak = document.getElementById('namaAnak').value || '-';
    const kelas = document.getElementById('kelas').value || '-';
    const program = document.getElementById('programPilih').value || '-';
    const wa = document.getElementById('whatsapp').value || '-';
    const pesan = document.getElementById('pesan').value || '(tidak ada)';
    document.getElementById('prevNamaOrtu').textContent = namaOrtu;
    document.getElementById('prevNamaAnak').textContent = namaAnak;
    document.getElementById('prevKelas').textContent = kelas;
    document.getElementById('prevProgram').textContent = program;
    document.getElementById('prevWA').textContent = wa;
    document.getElementById('prevPesan').textContent = pesan;
    const preview = document.getElementById('previewData');
    preview.style.display = 'block';
    preview.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    inputs.forEach(inp => {
        if (!validateField(inp)) valid = false;
    });
    const agreement = document.getElementById('agreement');
    if (!agreement.checked) {
        alert('Anda harus menyetujui persyaratan terlebih dahulu.');
        agreement.focus();
        valid = false;
    }
    if (valid) {
        alert('✅ Pendaftaran berhasil dikirim! Kami akan segera menghubungi Anda.');
        // Di sini bisa ditambahkan pengiriman data ke server
    } else {
        alert('⚠️ Mohon lengkapi data yang masih kosong atau tidak valid.');
    }
});