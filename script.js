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

/* ── Wizard: ¿Debo declarar? ────────────────────────── */
const OBLIGACIONES = [
    {
        nombre: 'patrimonio bruto',
        tope: 224095500, uvt: '4.500 UVT',
        icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
        pregunta: '¿Cuánto valía tu patrimonio al 31 de diciembre de 2025?',
        preguntaSiNo: '¿Tu patrimonio bruto al cierre de 2025 superó este tope?',
        ayuda: 'Suma de inmuebles, vehículos, cuentas bancarias, inversiones y demás activos a tu nombre.',
    },
    {
        nombre: 'ingresos brutos',
        tope: 69718600, uvt: '1.400 UVT',
        icon: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
        pregunta: '¿Cuánto recibiste en total durante 2025?',
        preguntaSiNo: '¿Tus ingresos brutos al cierre de 2025 superaron este tope?',
        ayuda: 'Todo lo que recibiste: salario, honorarios, arriendos, dividendos u otras fuentes.',
    },
    {
        nombre: 'consumos con tarjeta de crédito',
        tope: 69718600, uvt: '1.400 UVT',
        icon: '<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>',
        pregunta: '¿Cuánto consumiste con tarjetas de crédito en 2025?',
        preguntaSiNo: '¿Tus consumos con tarjeta de crédito al cierre de 2025 superaron este tope?',
        ayuda: 'Total acumulado en todas las tarjetas a tu nombre, sin importar la entidad.',
    },
    {
        nombre: 'compras y consumos totales',
        tope: 69718600, uvt: '1.400 UVT',
        icon: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>',
        pregunta: '¿Cuánto sumaron todas tus compras y consumos en 2025?',
        preguntaSiNo: '¿Tus compras y consumos al cierre de 2025 superaron este tope?',
        ayuda: 'Con cualquier medio de pago: efectivo, débito, transferencia o crédito.',
    },
    {
        nombre: 'consignaciones bancarias e inversiones',
        tope: 69718600, uvt: '1.400 UVT',
        icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
        pregunta: '¿Cuánto sumaron tus consignaciones e inversiones en 2025?',
        preguntaSiNo: '¿Tus consignaciones e inversiones al cierre de 2025 superaron este tope?',
        ayuda: 'Depósitos y abonos hechos en tus cuentas bancarias o instrumentos financieros.',
    },
];

function fmtCOP(n) { return '$' + Number(n).toLocaleString('es-CO'); }

function initWizard() {
    const wiz = document.getElementById('wizard');
    if (!wiz) return;
    const mode    = wiz.dataset.mode || 'exact';
    const body    = wiz.querySelector('#wiz-body');
    const fill    = wiz.querySelector('#wiz-progress');
    const counter = wiz.querySelector('#wiz-count');
    const total   = OBLIGACIONES.length;
    let current = 0;
    let dir = 1;
    const resp = new Array(total).fill(null);

    function updateProgress(step) {
        if (fill)    fill.style.width = (step / total) * 100 + '%';
        if (counter) counter.textContent = step >= total ? 'Resultado' : `Paso ${step + 1} de ${total}`;
    }

    function exceeded(i) {
        const r = resp[i], o = OBLIGACIONES[i];
        if (mode === 'exact') return typeof r === 'number' && r > o.tope;
        if (mode === 'yesno') return r === true;
        if (mode === 'range') return !!(r && r.exceeds);
        return false;
    }

    function answered() {
        return resp[current] !== null && resp[current] !== '';
    }

    function dotsHTML() {
        return '<div class="wiz-dots">' + OBLIGACIONES.map((o, i) => {
            let cls = '';
            if (i < current)        cls = exceeded(i) ? 'is-yes' : 'is-no';
            else if (i === current) cls = 'is-current';
            return `<span class="wiz-dot ${cls}"></span>`;
        }).join('') + '</div>';
    }

    function renderStep() {
        updateProgress(current);
        const o = OBLIGACIONES[current];
        let controls = '';

        if (mode === 'exact') {
            const v = resp[current] != null ? Number(resp[current]).toLocaleString('es-CO') : '';
            controls = `
                <div class="wiz-input-wrap">
                    <span class="wiz-input-prefix">$</span>
                    <input type="text" inputmode="numeric" class="wiz-input" id="wiz-field" placeholder="0" value="${v}" autocomplete="off">
                </div>
                <div class="wiz-gauge" id="wiz-gauge">
                    <div class="wiz-gauge-track">
                        <div class="wiz-gauge-fill" id="wiz-gauge-fill"></div>
                        <div class="wiz-gauge-mark" title="Tope"></div>
                    </div>
                    <div class="wiz-gauge-foot">
                        <span class="wiz-gauge-tope">Tope: <strong>${fmtCOP(o.tope)}</strong></span>
                        <span class="wiz-gauge-status" id="wiz-gauge-status">Escribe un valor</span>
                    </div>
                </div>`;
        } else if (mode === 'yesno') {
            controls = `
                <div class="wiz-tope-card">
                    <span class="wiz-tope-card-label">Tope para declarar</span>
                    <span class="wiz-tope-card-amount">${fmtCOP(o.tope)}</span>
                    <span class="wiz-tope-card-uvt">${o.uvt}</span>
                </div>
                <div class="wiz-opts wiz-opts--2">
                    <button type="button" class="wiz-opt wiz-opt--si ${resp[current]===true?'sel':''}" data-val="si">
                        <span class="wiz-opt-ic"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span>
                        <span class="wiz-opt-text">Sí, lo superé</span>
                    </button>
                    <button type="button" class="wiz-opt wiz-opt--no ${resp[current]===false?'sel':''}" data-val="no">
                        <span class="wiz-opt-ic"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
                        <span class="wiz-opt-text">No, fue menor</span>
                    </button>
                </div>`;
        } else {
            const t = o.tope;
            const brackets = [
                { label: `Menos de ${fmtCOP(t)}`,                  exceeds: false },
                { label: `Entre ${fmtCOP(t)} y ${fmtCOP(t * 2)}`,  exceeds: true  },
                { label: `Más de ${fmtCOP(t * 2)}`,                exceeds: true  },
            ];
            controls = `<div class="wiz-tope-q">Tope para declarar: <strong>${fmtCOP(t)}</strong> · ${o.uvt}</div>
                <div class="wiz-opts">` + brackets.map((b, bi) =>
                `<button type="button" class="wiz-opt wiz-opt--range ${resp[current]&&resp[current].i===bi?'sel':''}" data-i="${bi}" data-exceeds="${b.exceeds}">${b.label}</button>`
            ).join('') + '</div>';
        }

        const pregunta = (mode === 'exact') ? o.pregunta : (o.preguntaSiNo || o.pregunta);
        body.innerHTML = `
            <div class="wiz-step ${dir > 0 ? 'wiz-in-right' : 'wiz-in-left'}">
                ${dotsHTML()}
                <div class="wiz-step-icon"><svg viewBox="0 0 24 24">${o.icon}</svg></div>
                <p class="wiz-question">${pregunta}</p>
                <p class="wiz-help">${o.ayuda}</p>
                ${controls}
                <div class="wiz-nav">
                    <button type="button" class="wiz-back" id="wiz-back" ${current===0?'disabled':''}>
                        <span class="wiz-back-ic"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></span>
                        Volver atrás
                    </button>
                    ${mode === 'exact' ? `<button type="button" class="wiz-next" id="wiz-next">
                        ${current===total-1?'Ver resultado':'Siguiente'}
                        <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>` : ''}
                </div>
            </div>`;

        const goNext = () => {
            if (!answered()) { wiz.classList.add('wiz-shake'); setTimeout(() => wiz.classList.remove('wiz-shake'), 400); return; }
            dir = 1;
            if (current === total - 1) renderResult();
            else { current++; renderStep(); }
        };

        if (mode === 'exact') {
            const field  = body.querySelector('#wiz-field');
            const fillEl = body.querySelector('#wiz-gauge-fill');
            const statEl = body.querySelector('#wiz-gauge-status');
            const gauge  = body.querySelector('#wiz-gauge');
            const paintGauge = () => {
                const n = resp[current];
                if (typeof n !== 'number') { fillEl.style.width = '0%'; gauge.className = 'wiz-gauge'; statEl.textContent = 'Escribe un valor'; return; }
                const pct = Math.min(n / (o.tope * 2) * 100, 100);
                fillEl.style.width = pct + '%';
                if (n > o.tope) { gauge.className = 'wiz-gauge is-over';  statEl.textContent = 'Supera el tope'; }
                else            { gauge.className = 'wiz-gauge is-under'; statEl.textContent = 'Por debajo del tope'; }
            };
            field.focus();
            field.addEventListener('input', () => {
                const num = parseInt(field.value.replace(/\D/g, ''), 10);
                resp[current] = isNaN(num) ? null : num;
                field.value = isNaN(num) ? '' : num.toLocaleString('es-CO');
                paintGauge();
                toggleNext();
            });
            field.addEventListener('keydown', e => { if (e.key === 'Enter') goNext(); });
            paintGauge();
        } else {
            body.querySelectorAll('.wiz-opt').forEach(btn => {
                btn.addEventListener('click', () => {
                    resp[current] = (mode === 'yesno')
                        ? btn.dataset.val === 'si'
                        : { i: +btn.dataset.i, exceeds: btn.dataset.exceeds === 'true' };
                    body.querySelectorAll('.wiz-opt').forEach(b => b.classList.remove('sel'));
                    btn.classList.add('sel');
                    toggleNext();
                    setTimeout(goNext, 320);
                });
            });
        }

        body.querySelector('#wiz-back').addEventListener('click', () => { if (current > 0) { dir = -1; current--; renderStep(); } });
        const nextBtn = body.querySelector('#wiz-next');
        if (nextBtn) nextBtn.addEventListener('click', goNext);
        toggleNext();
    }

    function toggleNext() {
        const next = body.querySelector('#wiz-next');
        if (next) next.classList.toggle('is-disabled', !answered());
    }

    function renderResult() {
        updateProgress(total);
        const lista = OBLIGACIONES.map((o, i) => ({ o, i })).filter(({ i }) => exceeded(i));
        const debe = lista.length > 0;

        let detalle;
        if (debe) {
            detalle = '<ul class="wiz-reasons">' + lista.map(({ o, i }) => {
                const monto = mode === 'exact' ? `<span class="wiz-reason-monto" data-to="${resp[i]}">$0</span>` : '';
                return `<li>
                    <span class="wiz-reason-ic"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span>
                    <div class="wiz-reason-body">
                        <span class="wiz-reason-name">${o.nombre.charAt(0).toUpperCase() + o.nombre.slice(1)}</span>
                        <span class="wiz-reason-meta">Tope: ${fmtCOP(o.tope)} · ${o.uvt}</span>
                    </div>
                    ${monto}
                </li>`;
            }).join('') + '</ul>';
        } else {
            detalle = '';
        }

        body.innerHTML = `
            <div class="wiz-result ${debe ? 'is-debe' : 'is-nodebe'}">
                <div class="wiz-result-badge">
                    <span class="wiz-result-ring"></span>
                    <svg viewBox="0 0 24 24">${debe
                        ? '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'
                        : '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'}</svg>
                </div>
                <h3 class="wiz-result-title">${debe ? 'Sí, debes declarar renta' : 'No estás obligado a declarar'}</h3>
                <p class="wiz-result-sub">${debe
                    ? `Cumples <strong><span class="wiz-cup" data-to="${lista.length}">0</span> de 5</strong> condiciones que la DIAN exige para declarar el año gravable 2025.`
                    : 'Aun así, declarar puede beneficiarte: podrías recuperar retenciones que te practicaron durante el año.'}</p>
                ${detalle}
                <button type="button" class="wiz-restart" id="wiz-restart">
                    <svg viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                    Volver a empezar
                </button>
            </div>`;
        body.querySelectorAll('.wiz-reason-monto').forEach(el => {
            const to = +el.dataset.to, t0 = performance.now(), durMs = 900;
            (function tick(now) {
                const p = Math.min((now - t0) / durMs, 1);
                const ease = 1 - Math.pow(1 - p, 3);
                el.textContent = fmtCOP(Math.round(ease * to));
                if (p < 1) requestAnimationFrame(tick);
            })(t0);
        });

        body.querySelectorAll('.wiz-cup').forEach(el => {
            const to = +el.dataset.to, t0 = performance.now(), durMs = 700;
            (function tick(now) {
                const p = Math.min((now - t0) / durMs, 1);
                el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * to);
                if (p < 1) requestAnimationFrame(tick);
            })(t0);
        });

        body.querySelector('#wiz-restart').addEventListener('click', () => { dir = -1; current = 0; resp.fill(null); renderStep(); });
    }

    renderStep();
}

/* ── Init ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    initCalculadora();
    initWizard();
    initDrawer();
    initBackToTop();
    initScrollAnimations();
    initCountUp();
});
