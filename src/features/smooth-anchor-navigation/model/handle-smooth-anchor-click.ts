import type { MouseEvent } from "react";

const SCROLL_DURATION = 1200;
const SCROLL_BEZIER = {
  x1: 0.3,
  y1: 0.27,
  x2: 0.96,
  y2: 0,
};

let animationFrame = 0;

function getHeaderOffset() {
  const header = document.querySelector("header");

  if (!header) {
    return 16;
  }

  const headerPosition = window.getComputedStyle(header).position;

  if (headerPosition !== "sticky" && headerPosition !== "fixed") {
    return 16;
  }

  return Math.ceil(header.getBoundingClientRect().height) + 16;
}

function sampleBezierCurve(point1: number, point2: number, time: number) {
  const inverseTime = 1 - time;

  return (
    3 * point1 * inverseTime * inverseTime * time +
    3 * point2 * inverseTime * time * time +
    time * time * time
  );
}

function smoothScrollEasing(progress: number) {
  if (progress <= 0) {
    return 0;
  }

  if (progress >= 1) {
    return 1;
  }

  let lowerBound = 0;
  let upperBound = 1;
  let time = progress;

  for (let index = 0; index < 12; index += 1) {
    const sampledX = sampleBezierCurve(SCROLL_BEZIER.x1, SCROLL_BEZIER.x2, time);

    if (Math.abs(sampledX - progress) < 0.00001) {
      break;
    }

    if (sampledX < progress) {
      lowerBound = time;
    } else {
      upperBound = time;
    }

    time = (lowerBound + upperBound) / 2;
  }

  return sampleBezierCurve(SCROLL_BEZIER.y1, SCROLL_BEZIER.y2, time);
}

function animateScrollTo(targetTop: number, hash: string) {
  cancelAnimationFrame(animationFrame);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, targetTop);
    window.history.pushState(null, "", hash);
    return;
  }

  const startTop = window.scrollY;
  const distance = targetTop - startTop;
  const startTime = performance.now();

  function tick(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / SCROLL_DURATION, 1);
    const nextTop = startTop + distance * smoothScrollEasing(progress);

    window.scrollTo(0, nextTop);

    if (progress < 1) {
      animationFrame = requestAnimationFrame(tick);
    } else {
      window.history.pushState(null, "", hash);
    }
  }

  animationFrame = requestAnimationFrame(tick);
}

export function smoothScrollToAnchor(targetId: string) {
  const target = document.getElementById(targetId);

  if (!target) {
    return;
  }

  const targetTop = Math.max(
    0,
    window.scrollY + target.getBoundingClientRect().top - getHeaderOffset(),
  );

  animateScrollTo(targetTop, `#${targetId}`);
}

export function handleSmoothAnchorClick(event: MouseEvent<HTMLAnchorElement>) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey
  ) {
    return;
  }

  const linkUrl = new URL(event.currentTarget.href);

  if (
    linkUrl.origin !== window.location.origin ||
    linkUrl.pathname !== window.location.pathname ||
    !linkUrl.hash ||
    linkUrl.hash === "#"
  ) {
    return;
  }

  const targetId = decodeURIComponent(linkUrl.hash.slice(1));
  const target = document.getElementById(targetId);

  if (!target) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  smoothScrollToAnchor(target.id);
}
