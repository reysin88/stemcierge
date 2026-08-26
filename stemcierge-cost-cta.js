/**
 * STEMCIERGE Article Cost Estimator CTA
 * Version: 1.2.0
 *
 * Article embed:
 * <div data-stemcierge-cost-cta></div>
 *
 * Load with:
 * <script src="https://cdn.jsdelivr.net/gh/reysin88/stemcierge@main/stemcierge-cost-cta.js"></script>
 */

(function () {
  "use strict";

  const SELECTOR = "[data-stemcierge-cost-cta]";
  const ESTIMATOR_URL =
    "https://stemcierge.com/stem-cell-therapy-cost-estimator#calculator";
  const CTA_VERSION = "cost-estimator-v1.2";

  function loadWorkSans() {
    if (document.querySelector('link[data-stemcierge-work-sans="true"]')) return;

    const preconnectGoogle = document.createElement("link");
    preconnectGoogle.rel = "preconnect";
    preconnectGoogle.href = "https://fonts.googleapis.com";
    preconnectGoogle.setAttribute("data-stemcierge-work-sans", "true");
    document.head.appendChild(preconnectGoogle);

    const preconnectFonts = document.createElement("link");
    preconnectFonts.rel = "preconnect";
    preconnectFonts.href = "https://fonts.gstatic.com";
    preconnectFonts.crossOrigin = "anonymous";
    preconnectFonts.setAttribute("data-stemcierge-work-sans", "true");
    document.head.appendChild(preconnectFonts);

    const fontStylesheet = document.createElement("link");
    fontStylesheet.rel = "stylesheet";
    fontStylesheet.href =
      "https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap";
    fontStylesheet.setAttribute("data-stemcierge-work-sans", "true");
    document.head.appendChild(fontStylesheet);
  }

  function injectStyles() {
    if (document.getElementById("stemcierge-cost-cta-styles")) return;

    const style = document.createElement("style");
    style.id = "stemcierge-cost-cta-styles";

    style.textContent = `
      .sc-cost-cta {
        box-sizing: border-box;
        width: 100%;
        margin: 40px 0;
        padding: 38px 36px 25px;
        background: #f8f6f3;
        border: 1px solid #ded4c4;
        border-radius: 16px;
        color: #242733;
        text-align: center;
        overflow: hidden;
        box-shadow: 0 16px 34px rgba(35, 38, 49, 0.08);
        font-family: "Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      }

      .sc-cost-cta *,
      .sc-cost-cta *::before,
      .sc-cost-cta *::after {
        box-sizing: border-box;
      }

      .sc-cost-cta__content {
        max-width: 740px;
        margin: 0 auto;
      }

      .sc-cost-cta__eyebrow {
        margin-bottom: 13px;
        color: #8a7652;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.14em;
        line-height: 1.4;
        text-transform: uppercase;
      }

      .sc-cost-cta__title {
        margin: 0 0 14px !important;
        color: #242733 !important;
        font-family: "Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif !important;
        font-size: clamp(26px, 3vw, 36px) !important;
        font-weight: 700 !important;
        line-height: 1.16 !important;
        letter-spacing: -0.02em;
      }

      .sc-cost-cta__text {
        max-width: 650px;
        margin: 0 auto 22px !important;
        color: #5f626c !important;
        font-family: "Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif !important;
        font-size: 16px !important;
        font-weight: 400 !important;
        line-height: 1.65 !important;
      }

      .sc-cost-cta__text strong {
        color: #242733;
        font-weight: 600;
      }

      .sc-cost-cta__benefits {
        display: grid;
        justify-content: center;
        gap: 9px;
        margin: 0 auto 26px;
        color: #4f535e;
        font-size: 13px;
        line-height: 1.4;
        text-align: left;
      }

      .sc-cost-cta__benefits span {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }

      .sc-cost-cta__benefits svg {
        width: 15px;
        height: 15px;
        flex: 0 0 15px;
        fill: #8a7652;
      }

      .sc-cost-cta__button {
        display: inline-flex !important;
        align-items: center;
        justify-content: center;
        gap: 10px;
        min-width: 245px;
        padding: 15px 25px;
        background: #242733;
        border: 1px solid #242733;
        border-radius: 6px;
        color: #ffffff !important;
        font-family: "Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif !important;
        font-size: 15px;
        font-weight: 700;
        line-height: 1.2;
        text-decoration: none !important;
        transition:
          transform 0.2s ease,
          background-color 0.2s ease,
          border-color 0.2s ease,
          color 0.2s ease;
      }

      .sc-cost-cta__button:hover,
      .sc-cost-cta__button:focus-visible {
        background: #cbbba0;
        border-color: #cbbba0;
        color: #242733 !important;
        transform: translateY(-1px);
      }

      .sc-cost-cta__button:focus-visible {
        outline: 3px solid rgba(138, 118, 82, 0.24);
        outline-offset: 3px;
      }

      .sc-cost-cta__button span {
        font-size: 19px;
        line-height: 1;
        transition: transform 0.2s ease;
      }

      .sc-cost-cta__button:hover span,
      .sc-cost-cta__button:focus-visible span {
        transform: translateX(3px);
      }

      .sc-cost-cta__microcopy {
        margin: 11px 0 0 !important;
        color: #777a83 !important;
        font-family: "Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif !important;
        font-size: 12px !important;
        line-height: 1.4 !important;
      }

      .sc-cost-cta__research {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 13px;
        margin-top: 28px;
        color: #777a83;
        font-size: 11px;
        line-height: 1.4;
        letter-spacing: 0.015em;
      }

      .sc-cost-cta__research-line {
        width: 38px;
        height: 1px;
        background: #d9cfbe;
      }

      @media (max-width: 767px) {
        .sc-cost-cta {
          margin: 32px 0;
          padding: 30px 20px 22px;
          border-radius: 12px;
        }

        .sc-cost-cta__eyebrow {
          font-size: 10px;
        }

        .sc-cost-cta__title {
          font-size: 27px !important;
        }

        .sc-cost-cta__text {
          font-size: 15px !important;
          line-height: 1.6 !important;
        }

        .sc-cost-cta__benefits {
          margin-bottom: 23px;
        }

        .sc-cost-cta__button {
          width: 100%;
          min-width: 0;
          padding: 15px 18px;
        }

        .sc-cost-cta__research {
          gap: 9px;
          font-size: 10px;
        }

        .sc-cost-cta__research-line {
          width: 18px;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function getMarkup() {
    return `
      <div class="sc-cost-cta">
        <div class="sc-cost-cta__content">

          <div class="sc-cost-cta__eyebrow">
            STEM CELL THERAPY COST ESTIMATOR
          </div>

          <h3 class="sc-cost-cta__title">
            What Would Your Treatment Cost in Another Country?
          </h3>

          <p class="sc-cost-cta__text">
            Compare personalized estimates across
            <strong>10+ leading treatment destinations</strong>,
            informed by STEMCIERGE's analysis of
            <strong>692 pricing records</strong>.
          </p>

          <div class="sc-cost-cta__benefits">
            <span>
              <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                <path d="M7.7 14.3 3.4 10l1.4-1.4 2.9 2.9 7.5-7.5 1.4 1.4z"></path>
              </svg>
              Compare pricing by country
            </span>

            <span>
              <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                <path d="M7.7 14.3 3.4 10l1.4-1.4 2.9 2.9 7.5-7.5 1.4 1.4z"></path>
              </svg>
              Understand what affects cost
            </span>

            <span>
              <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                <path d="M7.7 14.3 3.4 10l1.4-1.4 2.9 2.9 7.5-7.5 1.4 1.4z"></path>
              </svg>
              Get a personalized estimate
            </span>
          </div>

          <a
            href="${ESTIMATOR_URL}"
            class="sc-cost-cta__button"
            data-stemcierge-cost-cta-link
            target="_blank"
            rel="noopener noreferrer"
          >
            Get My Cost Estimate
            <span aria-hidden="true">→</span>
          </a>

          <p class="sc-cost-cta__microcopy">
            Free · Takes about 1 minute · No obligation
          </p>

        </div>

        <div class="sc-cost-cta__research">
          <span class="sc-cost-cta__research-line" aria-hidden="true"></span>
          <span>Powered by the STEMCIERGE Global Pricing Review</span>
          <span class="sc-cost-cta__research-line" aria-hidden="true"></span>
        </div>
      </div>
    `;
  }

  function trackClick() {
    if (typeof window.gtag !== "function") return;

    window.gtag("event", "cost_estimator_cta_click", {
      event_category: "article_cta",
      event_label: window.location.pathname,
      article_url: window.location.href,
      article_title: document.title,
      cta_version: CTA_VERSION
    });
  }

  function renderCTA(element) {
    if (!element || element.dataset.stemciergeRendered === "true") return;

    element.innerHTML = getMarkup();
    element.dataset.stemciergeRendered = "true";

    const link = element.querySelector("[data-stemcierge-cost-cta-link]");
    if (link) {
      link.addEventListener("click", trackClick);
    }
  }

  function init() {
    loadWorkSans();
    injectStyles();
    document.querySelectorAll(SELECTOR).forEach(renderCTA);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

  const observer = new MutationObserver(function () {
    document.querySelectorAll(SELECTOR).forEach(renderCTA);
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
