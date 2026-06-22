/* ── Tabla de fechas (50 rangos) ────────────────────── */
const FECHAS = [
    { rango: '01 – 02', desde: 1,  hasta: 2,  fecha: '12 de agosto de 2026',      iso: '2026-08-12' },
    { rango: '03 – 04', desde: 3,  hasta: 4,  fecha: '13 de agosto de 2026',      iso: '2026-08-13' },
    { rango: '05 – 06', desde: 5,  hasta: 6,  fecha: '14 de agosto de 2026',      iso: '2026-08-14' },
    { rango: '07 – 08', desde: 7,  hasta: 8,  fecha: '18 de agosto de 2026',      iso: '2026-08-18' },
    { rango: '09 – 10', desde: 9,  hasta: 10, fecha: '19 de agosto de 2026',      iso: '2026-08-19' },
    { rango: '11 – 12', desde: 11, hasta: 12, fecha: '20 de agosto de 2026',      iso: '2026-08-20' },
    { rango: '13 – 14', desde: 13, hasta: 14, fecha: '21 de agosto de 2026',      iso: '2026-08-21' },
    { rango: '15 – 16', desde: 15, hasta: 16, fecha: '24 de agosto de 2026',      iso: '2026-08-24' },
    { rango: '17 – 18', desde: 17, hasta: 18, fecha: '25 de agosto de 2026',      iso: '2026-08-25' },
    { rango: '19 – 20', desde: 19, hasta: 20, fecha: '26 de agosto de 2026',      iso: '2026-08-26' },
    { rango: '21 – 22', desde: 21, hasta: 22, fecha: '27 de agosto de 2026',      iso: '2026-08-27' },
    { rango: '23 – 24', desde: 23, hasta: 24, fecha: '28 de agosto de 2026',      iso: '2026-08-28' },
    { rango: '25 – 26', desde: 25, hasta: 26, fecha: '31 de agosto de 2026',      iso: '2026-08-31' },
    { rango: '27 – 28', desde: 27, hasta: 28, fecha: '1 de septiembre de 2026',   iso: '2026-09-01' },
    { rango: '29 – 30', desde: 29, hasta: 30, fecha: '2 de septiembre de 2026',   iso: '2026-09-02' },
    { rango: '31 – 32', desde: 31, hasta: 32, fecha: '3 de septiembre de 2026',   iso: '2026-09-03' },
    { rango: '33 – 34', desde: 33, hasta: 34, fecha: '4 de septiembre de 2026',   iso: '2026-09-04' },
    { rango: '35 – 36', desde: 35, hasta: 36, fecha: '7 de septiembre de 2026',   iso: '2026-09-07' },
    { rango: '37 – 38', desde: 37, hasta: 38, fecha: '8 de septiembre de 2026',   iso: '2026-09-08' },
    { rango: '39 – 40', desde: 39, hasta: 40, fecha: '9 de septiembre de 2026',   iso: '2026-09-09' },
    { rango: '41 – 42', desde: 41, hasta: 42, fecha: '10 de septiembre de 2026',  iso: '2026-09-10' },
    { rango: '43 – 44', desde: 43, hasta: 44, fecha: '11 de septiembre de 2026',  iso: '2026-09-11' },
    { rango: '45 – 46', desde: 45, hasta: 46, fecha: '14 de septiembre de 2026',  iso: '2026-09-14' },
    { rango: '47 – 48', desde: 47, hasta: 48, fecha: '15 de septiembre de 2026',  iso: '2026-09-15' },
    { rango: '49 – 50', desde: 49, hasta: 50, fecha: '16 de septiembre de 2026',  iso: '2026-09-16' },
    { rango: '51 – 52', desde: 51, hasta: 52, fecha: '17 de septiembre de 2026',  iso: '2026-09-17' },
    { rango: '53 – 54', desde: 53, hasta: 54, fecha: '18 de septiembre de 2026',  iso: '2026-09-18' },
    { rango: '55 – 56', desde: 55, hasta: 56, fecha: '21 de septiembre de 2026',  iso: '2026-09-21' },
    { rango: '57 – 58', desde: 57, hasta: 58, fecha: '22 de septiembre de 2026',  iso: '2026-09-22' },
    { rango: '59 – 60', desde: 59, hasta: 60, fecha: '23 de septiembre de 2026',  iso: '2026-09-23' },
    { rango: '61 – 62', desde: 61, hasta: 62, fecha: '24 de septiembre de 2026',  iso: '2026-09-24' },
    { rango: '63 – 64', desde: 63, hasta: 64, fecha: '25 de septiembre de 2026',  iso: '2026-09-25' },
    { rango: '65 – 66', desde: 65, hasta: 66, fecha: '28 de septiembre de 2026',  iso: '2026-09-28' },
    { rango: '67 – 68', desde: 67, hasta: 68, fecha: '1 de octubre de 2026',      iso: '2026-10-01' },
    { rango: '69 – 70', desde: 69, hasta: 70, fecha: '2 de octubre de 2026',      iso: '2026-10-02' },
    { rango: '71 – 72', desde: 71, hasta: 72, fecha: '5 de octubre de 2026',      iso: '2026-10-05' },
    { rango: '73 – 74', desde: 73, hasta: 74, fecha: '6 de octubre de 2026',      iso: '2026-10-06' },
    { rango: '75 – 76', desde: 75, hasta: 76, fecha: '7 de octubre de 2026',      iso: '2026-10-07' },
    { rango: '77 – 78', desde: 77, hasta: 78, fecha: '8 de octubre de 2026',      iso: '2026-10-08' },
    { rango: '79 – 80', desde: 79, hasta: 80, fecha: '9 de octubre de 2026',      iso: '2026-10-09' },
    { rango: '81 – 82', desde: 81, hasta: 82, fecha: '13 de octubre de 2026',     iso: '2026-10-13' },
    { rango: '83 – 84', desde: 83, hasta: 84, fecha: '14 de octubre de 2026',     iso: '2026-10-14' },
    { rango: '85 – 86', desde: 85, hasta: 86, fecha: '15 de octubre de 2026',     iso: '2026-10-15' },
    { rango: '87 – 88', desde: 87, hasta: 88, fecha: '16 de octubre de 2026',     iso: '2026-10-16' },
    { rango: '89 – 90', desde: 89, hasta: 90, fecha: '19 de octubre de 2026',     iso: '2026-10-19' },
    { rango: '91 – 92', desde: 91, hasta: 92, fecha: '20 de octubre de 2026',     iso: '2026-10-20' },
    { rango: '93 – 94', desde: 93, hasta: 94, fecha: '21 de octubre de 2026',     iso: '2026-10-21' },
    { rango: '95 – 96', desde: 95, hasta: 96, fecha: '22 de octubre de 2026',     iso: '2026-10-22' },
    { rango: '97 – 98', desde: 97, hasta: 98, fecha: '23 de octubre de 2026',     iso: '2026-10-23' },
    { rango: '99 – 00', desde: 99, hasta: 0,  fecha: '26 de octubre de 2026',     iso: '2026-10-26' },
];

/* ── Lookup ─────────────────────────────────────────── */
function buscarFecha(raw) {
    if (!raw || raw.length !== 2 || !/^\d{2}$/.test(raw)) return null;
    const n = parseInt(raw, 10);
    if (n === 0) return FECHAS[49];
    const idx = Math.ceil(n / 2) - 1;
    return (idx >= 0 && idx < 50) ? FECHAS[idx] : null;
}

function diasRestantes(iso) {
    const hoy  = new Date(); hoy.setHours(0,0,0,0);
    const meta = new Date(iso + 'T00:00:00');
    const diff = Math.round((meta - hoy) / 86400000);
    return diff;
}

/* ── Calculadora ────────────────────────────────────── */
function initCalculadora() {
    const input   = document.getElementById('calc-input');
    const group   = document.getElementById('calc-input-group');
    const result  = document.getElementById('calc-result');
    const errEl   = document.getElementById('calc-error');
    const dateEl  = document.getElementById('result-date');
    const rangeEl = document.getElementById('result-range');
    const daysEl  = document.getElementById('result-days');
    const fillEl  = document.getElementById('result-timeline-fill');
    const dotEl   = document.getElementById('result-timeline-dot');
    const waBtn   = document.getElementById('result-wa-btn');
    if (!input) return;

    const TL_START = new Date('2026-08-12T00:00:00');
    const TL_END   = new Date('2026-10-26T00:00:00');

    function mostrar(raw) {
        const entry = buscarFecha(raw);
        result.classList.remove('show');
        errEl.classList.remove('show');
        group.classList.remove('is-valid');
        if (!raw || raw.length < 2) return;
        if (!entry) { errEl.classList.add('show'); return; }

        dateEl.textContent  = entry.fecha;
        rangeEl.textContent = `NIT terminado en ${entry.rango}`;

        // Timeline
        const entryDate = new Date(entry.iso + 'T00:00:00');
        const pct = Math.round((entryDate - TL_START) / (TL_END - TL_START) * 100);
        if (fillEl) fillEl.style.width = pct + '%';
        if (dotEl)  dotEl.style.left   = pct + '%';

        // WhatsApp dinámico
        if (waBtn) {
            const msg = encodeURIComponent(`Hola, mis últimos dígitos son ${raw} y mi fecha límite es el ${entry.fecha}. Me gustaría recibir asesoría para mi declaración de renta 2026.`);
            waBtn.href = `https://wa.me/573052841365?text=${msg}`;
        }

        // Días restantes
        const dias = diasRestantes(entry.iso);
        const clockSvg = `<svg viewBox="0 0 24 24" style="width:11px;height:11px;stroke:currentColor;fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>`;
        daysEl.style.background = '';
        if (dias > 30) {
            daysEl.className = 'result-days days-ok';
            daysEl.innerHTML = `${clockSvg} ${dias} días restantes`;
        } else if (dias > 0) {
            daysEl.className = 'result-days days-warn';
            daysEl.innerHTML = `${clockSvg} ¡Solo ${dias} días!`;
        } else if (dias === 0) {
            daysEl.className = 'result-days days-urgent';
            daysEl.innerHTML = `⚠ Vence hoy`;
        } else {
            daysEl.className = 'result-days days-past';
            daysEl.innerHTML = `Fecha vencida`;
        }

        group.classList.add('is-valid');
        result.classList.add('show');
        highlightTableRow(entry);
    }

    input.addEventListener('input', () => {
        input.value = input.value.replace(/\D/g, '').slice(0, 2);
        if (input.value.length === 2) mostrar(input.value);
        else {
            result.classList.remove('show');
            errEl.classList.remove('show');
            group.classList.remove('is-valid');
        }
    });
}

/* ── Highlight fila en tabla ────────────────────────── */
function highlightTableRow(entry) {
    document.querySelectorAll('.dates-table tbody tr').forEach(tr => tr.classList.remove('row-highlight'));
    const rows = document.querySelectorAll('.dates-table tbody tr');
    rows.forEach(tr => {
        if (tr.dataset.rango === entry.rango) {
            tr.classList.add('row-highlight');
        }
    });
}

/* ── Drawer ─────────────────────────────────────────── */
function initDrawer() {
    const drawer        = document.getElementById('drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const drawerClose   = document.getElementById('drawer-close');
    const hamburgerBtn  = document.querySelector('.hdr-icon-btn[aria-label="Menú"]');
    if (!drawer || !hamburgerBtn) return;
    const open  = () => { drawer.classList.add('open'); drawerOverlay.classList.add('open'); document.body.style.overflow = 'hidden'; };
    const close = () => { drawer.classList.remove('open'); drawerOverlay.classList.remove('open'); document.body.style.overflow = ''; };
    hamburgerBtn.addEventListener('click', open);
    drawerClose.addEventListener('click', close);
    drawerOverlay.addEventListener('click', close);
}

/* ── Back to top ────────────────────────────────────── */
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400));
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── Scroll animations ──────────────────────────────── */
function initScrollAnimations() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach((e, i) => {
            if (e.isIntersecting) {
                setTimeout(() => e.target.classList.add('visible'), i * 80);
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

/* ── Count-up ───────────────────────────────────────── */
function initCountUp() {
    const els = document.querySelectorAll('[data-count]');
    if (!els.length) return;
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = +el.dataset.count;
            const prefix = el.dataset.prefix || '';
            const suffix = el.dataset.suffix || '';
            const dur = 1500;
            const start = performance.now();
            function tick(now) {
                const p = Math.min((now - start) / dur, 1);
                const ease = 1 - Math.pow(1 - p, 3);
                el.textContent = prefix + Math.round(ease * target) + suffix;
                if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
            obs.unobserve(el);
        });
    }, { threshold: 0.6 });
    els.forEach(el => obs.observe(el));
}

/* ── Init ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    initCalculadora();
    initDrawer();
    initBackToTop();
    initScrollAnimations();
    initCountUp();
});
