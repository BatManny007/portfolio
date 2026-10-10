/* Flapping bat cursor — replaces the static bat.svg cursor with a live bat that
   flaps like the loader, flaps faster while moving and banks into turns.
   The CSS cursor stays as the fallback (touch, reduced motion, no JS). */
(function () {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const WHITE = '#ffffff';
  const CYAN  = '#54DAFF';
  const W = 40, H = 16.4;            // rendered size, same as bat.svg
  const HOT_X = 20, HOT_Y = 8;       // hotspot = centre of the logo
  const IDLE_MS = 440, FAST_MS = 280; // flap period at rest / at full speed

  const WING_R = 'M902.106 391.105C846.92 440.772 768.74 453.189 736.548 453.189H715.854V598.052C722.752 600.351 742.067 602.191 764.141 591.154C786.216 580.117 810.13 604.95 819.327 618.747C823.926 602.651 846.92 563.561 902.106 535.968C957.292 508.375 1003.28 547.465 1019.38 570.459C1030.87 542.866 1063.53 476.643 1102.16 432.494C1140.79 388.345 1210.23 386.506 1240.12 391.105C1224.02 372.709 1178.45 337.028 1136.65 315.224C1090.12 290.958 1019.38 273.834 977.987 273.834C975.687 292.23 957.292 341.437 902.106 391.105Z';
  const WING_L = 'M530.383 391.105C585.569 440.772 663.749 453.189 695.941 453.189H716.636V598.052C709.737 600.351 690.422 602.191 668.348 591.154C646.274 580.117 622.36 604.95 613.162 618.747C608.563 602.651 585.569 563.561 530.383 535.968C475.197 508.375 429.209 547.465 413.113 570.459C401.616 542.866 368.964 476.643 330.334 432.494C291.704 388.345 222.261 386.506 192.369 391.105C208.465 372.709 254.036 337.028 295.843 315.224C342.369 290.958 413.113 273.834 454.502 273.834C456.802 292.23 475.197 341.437 530.383 391.105Z';
  const BODY   = 'M752.198 383.913C752.198 412.056 754.703 438.53 764.777 458.264V589.393C743.648 617.83 725.224 646.055 713.756 665.086C702.162 645.845 683.459 617.205 662.038 588.451L662.038 459.616C672.701 439.748 675.315 412.702 675.315 383.913C678.227 392.649 695.585 408.374 713.756 408.375C731.928 408.374 749.285 392.649 752.198 383.913Z';
  const PIVOT_Y = 515; // wing roots, matches the loader's 70% transform-origin

  // Hide the native cursor; clickable things get a transparent url() cursor so
  // we can still tell them apart via getComputedStyle.
  const style = document.createElement('style');
  style.textContent =
    'html.bat-cursor{--cursor-default:none;' +
    '--cursor-pointer:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%271%27 height=%271%27/%3E") 0 0,none}';
  document.head.appendChild(style);

  const NS = 'http://www.w3.org/2000/svg';
  const el = document.createElementNS(NS, 'svg');
  el.setAttribute('aria-hidden', 'true');
  el.setAttribute('width', W);
  el.setAttribute('height', H);
  el.setAttribute('viewBox', '150 233 1132 465');
  el.style.cssText = 'position:fixed;left:0;top:0;overflow:visible;pointer-events:none;' +
    'z-index:2147483647;opacity:0;transition:opacity .15s ease;will-change:transform;';
  el.innerHTML =
    '<g class="bc-body">' +
      '<g fill="#000" stroke="#000" stroke-width="70" stroke-linejoin="round">' +
        '<path class="bc-r" d="' + WING_R + '"/><path class="bc-l" d="' + WING_L + '"/><path d="' + BODY + '"/></g>' +
      '<g class="bc-fill" fill="' + WHITE + '">' +
        '<path class="bc-r" d="' + WING_R + '"/><path class="bc-l" d="' + WING_L + '"/><path d="' + BODY + '"/></g>' +
    '</g>';

  const bodyG  = el.querySelector('.bc-body');
  const fillG  = el.querySelector('.bc-fill');
  const rights = el.querySelectorAll('.bc-r');
  const lefts  = el.querySelectorAll('.bc-l');

  let x = -100, y = -100, lastX = null, speed = 0, vx = 0, bank = 0;
  let phase = 0, last = performance.now(), shown = false, pointer = false;

  function mount() {
    document.body.appendChild(el);
    document.documentElement.classList.add('bat-cursor');
    requestAnimationFrame(frame);
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);

  function place() {
    el.style.transform = 'translate(' + (x - HOT_X) + 'px,' + (y - HOT_Y) + 'px)';
  }

  document.addEventListener('mousemove', function (e) {
    if (lastX !== null) {
      const dx = e.clientX - lastX, dy = e.clientY - y;
      speed += Math.hypot(dx, dy);
      vx += dx;
    }
    x = e.clientX; y = e.clientY; lastX = x;
    place();
    if (!shown) { shown = true; el.style.opacity = '1'; }
  }, { passive: true });

  // Leaving the window (or entering an iframe, which has its own bat)
  document.addEventListener('mouseout', function (e) {
    if (!e.relatedTarget) { shown = false; lastX = null; el.style.opacity = '0'; }
  });

  document.addEventListener('mouseover', function (e) {
    const isPointer = getComputedStyle(e.target).cursor.indexOf('url(') !== -1;
    if (isPointer !== pointer) {
      pointer = isPointer;
      fillG.setAttribute('fill', pointer ? CYAN : WHITE);
    }
  }, { passive: true });

  // Same curve as the loader's flap keyframes: slow upstroke, snappy downstroke
  function ease(t) { return t * t * (3 - 2 * t); }
  function wingAngle(p) {
    return p < 0.65
      ? -40 + 84 * ease(p / 0.65)
      : 44 - 84 * ease((p - 0.65) / 0.35);
  }

  function frame(now) {
    const dt = Math.min(now - last, 50);
    last = now;

    // Pixels moved this frame → 0..1 effort, smoothed
    const effort = Math.min(speed / (dt * 1.2), 1);
    speed = 0;
    const period = IDLE_MS + (FAST_MS - IDLE_MS) * effort;
    phase = (phase + dt / period) % 1;

    // Bank into horizontal movement, settle back when still
    const targetBank = Math.max(-18, Math.min(18, vx * 0.6));
    vx = 0;
    bank += (targetBank - bank) * Math.min(dt / 120, 1);

    const a = wingAngle(phase) * 0.8;
    const bob = (a + 32) / 67 * -70; // body rises as wings beat down (viewBox units)
    rights.forEach(function (p) { p.setAttribute('transform', 'rotate(' + a + ' 716 ' + PIVOT_Y + ')'); });
    lefts.forEach(function (p)  { p.setAttribute('transform', 'rotate(' + (-a) + ' 716 ' + PIVOT_Y + ')'); });
    bodyG.setAttribute('transform', 'translate(0 ' + bob + ') rotate(' + bank + ' 716 459)');

    requestAnimationFrame(frame);
  }
})();
