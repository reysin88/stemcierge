/* STEMCIERGE Assessment Quiz — external widget file */
/* Host publicly, reference from Webflow with:
   <div id="stc-quiz-root"></div>
   <script src="YOUR_HOSTED_URL_HERE/stemcierge-quiz.js"></script>
*/
(function () {
  var css = "#stc-quiz-root,#stc-quiz-root *{box-sizing:border-box}\n#stc-quiz-root{--scq-navy:#181B29;--scq-navy-deep:#12141F;--scq-white:#F6F4EF;--scq-gold:#C3A272;--scq-gold-soft:#A98F66;--scq-line:rgba(246,244,239,.16);--scq-option-bg:#FFFFFF;--scq-option-text:#1B1E2D;font-family:'Work Sans',-apple-system,BlinkMacSystemFont,sans-serif;color:var(--scq-white);position:relative;z-index:9999}\n.scq-launcher{position:fixed;right:24px;bottom:24px;z-index:99999;display:flex;align-items:center;gap:10px;background:var(--scq-navy);color:var(--scq-white);border:1px solid var(--scq-line);border-radius:999px;padding:15px 22px 15px 15px;cursor:pointer;box-shadow:0 16px 40px rgba(0,0,0,.35);font-size:14px;font-weight:500;transition:transform .25s,box-shadow .25s}\n.scq-launcher:hover{transform:translateY(-2px)}\n.scq-launcher-dot{width:30px;height:30px;border-radius:50%;background-color:var(--scq-navy-deep);background-image:var(--scq-icon-url);background-size:62%;background-position:center;background-repeat:no-repeat;border:1px solid var(--scq-gold);position:relative;flex-shrink:0}\n.scq-launcher-dot::after{content:'';position:absolute;inset:-5px;border-radius:50%;border:1px solid var(--scq-gold);opacity:.5;animation:scq-pulse 2.4s ease-out infinite}\n@keyframes scq-pulse{0%{transform:scale(.75);opacity:.6}\n100%{transform:scale(1.5);opacity:0}}\n.scq-overlay{position:fixed;inset:0;z-index:99998;background:var(--scq-navy);display:none}\n.scq-overlay.scq-open{display:block}\n.scq-card{position:relative;height:100%;width:100%;overflow:hidden;display:flex;flex-direction:column;padding:0}\n#stc-quiz-root.scq-inline-mode .scq-overlay{display:block;position:relative;inset:auto}\n#stc-quiz-root.scq-inline-mode{display:block;max-width:100%;overflow-x:hidden}\n#stc-quiz-root.scq-inline-mode .scq-card{height:auto;min-height:560px;max-width:100%;border-radius:20px;box-shadow:0 8px 24px rgba(0,0,0,.3)}\n.scq-close{position:absolute;top:20px;right:20px;width:34px;height:34px;border-radius:50%;border:1px solid var(--scq-line);background:transparent;color:var(--scq-white);font-size:18px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .2s;z-index:2}\n.scq-close:hover{background:rgba(255,255,255,.06)}\n.scq-logo{display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:40px 0 8px}\n.scq-logo img{height:34px;width:auto;display:block}\n.scq-scroll{flex:1 1 auto;min-height:0;min-width:0;overflow-x:hidden;overflow-y:auto;display:flex;flex-direction:column;padding:0 24px}\n.scq-body{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;max-width:720px;margin:0 auto;width:100%;padding:24px 0}\n.scq-back{background:none;border:none;color:var(--scq-white);opacity:.75;font-size:12px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;cursor:pointer;padding:8px 4px;margin-bottom:28px;display:inline-flex;align-items:center;gap:8px}\n.scq-back:hover{opacity:1}\n.scq-eyebrow{font-size:14px;color:var(--scq-gold);font-weight:500;margin-bottom:18px}\n.scq-question{font-size:30px;line-height:1.35;font-weight:500;margin:0 0 34px;color:var(--scq-white);max-width:640px}\n.scq-question strong{font-weight:700}\n.scq-sub{font-size:14px;color:var(--scq-gold);line-height:1.5;margin:0 0 18px;max-width:520px}\n.scq-options{width:100%;display:grid;grid-template-columns:1fr;gap:14px}\n.scq-options.scq-two-col{grid-template-columns:1fr 1fr}\n.scq-option{display:flex;align-items:center;justify-content:center;width:100%;height:100%;min-height:58px;text-align:center;border:none;background:var(--scq-option-bg);color:var(--scq-option-text);border-radius:8px;padding:16px 20px;font-size:15px;font-weight:500;font-family:inherit;cursor:pointer;transition:all .15s}\n.scq-option:hover{background:#ECE8DF}\n.scq-option.scq-selected{background:var(--scq-gold);color:var(--scq-navy-deep)}\n.scq-option.scq-option-multi{position:relative;background:transparent;color:var(--scq-white);border:1.5px solid rgba(246,244,239,.3)}\n.scq-option.scq-option-multi:hover{background:rgba(246,244,239,.05);border-color:rgba(246,244,239,.5);transform:translateY(-1px)}\n.scq-option.scq-option-multi.scq-selected{background:transparent;color:var(--scq-white);border-color:var(--scq-gold)}\n.scq-check-icon{position:absolute;left:18px;top:50%;transform:translateY(-50%);width:16px;height:16px;flex-shrink:0;color:var(--scq-gold);visibility:hidden}\n.scq-option-multi.scq-selected .scq-check-icon{visibility:visible}\n.scq-other-input{width:100%;background:transparent;border:1.5px solid rgba(246,244,239,.3);border-radius:8px;padding:16px 20px;font-size:15px;font-family:inherit;color:var(--scq-white);text-align:center;margin-top:14px}\n.scq-other-input::placeholder{color:rgba(246,244,239,.4)}\n.scq-other-input:focus{outline:none;border-color:var(--scq-gold)}\n.scq-textarea-wrap{width:100%;position:relative}\n.scq-textarea{width:100%;min-height:160px;background:transparent;border:1px solid var(--scq-line);border-radius:10px;color:var(--scq-white);font-family:inherit;font-size:16px;padding:18px;resize:vertical}\n.scq-textarea:focus{outline:none;border-color:var(--scq-gold)}\n.scq-charcount{text-align:right;font-size:12px;color:var(--scq-gold-soft);margin-top:8px}\n.scq-field{margin-bottom:16px;text-align:left}\n.scq-field-row{display:flex;gap:12px}\n.scq-field-row .scq-field{flex:1;min-width:0}\n.scq-float{position:relative}\n.scq-float input{width:100%;padding:27px 16px 10px;border-radius:10px;border:1px solid var(--scq-line);font-size:15px;font-family:inherit;background:transparent;color:var(--scq-white);transition:border-color .18s}\n.scq-float label{position:absolute;left:17px;top:50%;transform:translateY(-50%);font-size:15px;color:rgba(246,244,239,.45);pointer-events:none;transition:all .15s;max-width:calc(100% - 34px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.scq-float input:focus + label,.scq-float input:not(:placeholder-shown) + label{top:8px;transform:translateY(0);font-size:10px;font-weight:600;color:var(--scq-gold);text-transform:uppercase;letter-spacing:.1em}\n.scq-float input:focus{outline:none;border-color:var(--scq-gold)}\n.scq-field.scq-error input{border-color:#C1584A}\n.scq-error-msg{font-size:12px;color:#E0897C;margin-top:4px;display:none}\n.scq-field.scq-error .scq-error-msg{display:block}\n.scq-field-static label{display:block;font-size:10.5px;font-weight:600;color:var(--scq-gold);margin-bottom:6px;text-transform:uppercase;letter-spacing:.1em}\n.scq-whatsapp-combo{display:flex;align-items:center;gap:8px;border:1px solid var(--scq-line);border-radius:10px;padding:12px 14px;transition:border-color .18s}\n.scq-whatsapp-combo:focus-within{border-color:var(--scq-gold)}\n.scq-whatsapp-combo{position:relative}\n.scq-code-btn{border:none;background:none;color:var(--scq-white);font-size:16px;cursor:pointer;padding:0;margin:0;flex-shrink:0}\n.scq-code-list{display:none;position:absolute;top:calc(100% + 8px);left:-14px;background:var(--scq-navy-deep);border:1px solid var(--scq-line);border-radius:10px;max-height:220px;max-width:min(260px,calc(100vw - 60px));overflow-y:auto;overflow-x:hidden;z-index:30;min-width:0;box-shadow:0 12px 30px rgba(0,0,0,.4)}\n.scq-code-row{padding:11px 16px;font-size:13.5px;color:var(--scq-white);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n\n.scq-whatsapp-combo .scq-whatsapp-divider{width:1px;height:22px;background:var(--scq-line);flex-shrink:0}\n.scq-whatsapp-combo input{border:none;background:transparent;color:var(--scq-white);font-size:15px;font-family:inherit;padding:0;margin:0;flex:1;min-width:0}\n.scq-whatsapp-combo input:focus{outline:none}\n.scq-whatsapp-combo input::placeholder{color:rgba(246,244,239,.35)}\n.scq-field-static.scq-error .scq-whatsapp-combo{border-color:#C1584A}\n.scq-consent{margin:8px 0 4px;text-align:left}\n.scq-consent-label{display:flex;align-items:flex-start;gap:10px;cursor:pointer}\n.scq-consent-label input[type=\"checkbox\"]{margin-top:3px;width:16px;height:16px;flex-shrink:0;accent-color:var(--scq-gold);cursor:pointer}\n.scq-consent-label span{font-size:13px;line-height:1.5;color:rgba(246,244,239,.8)}\n.scq-consent.scq-error .scq-error-msg{display:block}\n.scq-privacy{font-size:11px;line-height:1.6;color:rgba(246,244,239,.45);max-width:480px;margin:44px auto 0;padding-top:18px;border-top:1px solid var(--scq-line);text-align:left}\n.scq-privacy a{color:var(--scq-gold);text-decoration:underline}\n.scq-next{background:var(--scq-white);color:var(--scq-navy-deep);border:none;border-radius:10px;padding:16px 40px;font-size:15px;font-weight:600;cursor:pointer;transition:transform .2s,background .2s;margin-top:28px;font-family:inherit}\n.scq-next:hover{transform:translateY(-1px)}\n.scq-next:disabled{opacity:.35;cursor:not-allowed;transform:none}\n.scq-next.scq-loading{position:relative;color:transparent}\n.scq-next.scq-loading::after{content:'';position:absolute;inset:0;margin:auto;width:16px;height:16px;border:2px solid rgba(27,30,45,.3);border-top-color:#1B1E2D;border-radius:50%;animation:scq-spin .7s linear infinite}\n@keyframes scq-spin{to{transform:rotate(360deg)}}\n.scq-intro-meta{font-size:14px;color:var(--scq-gold);margin-bottom:8px}\n.scq-intro-title{font-size:34px;font-weight:500;color:var(--scq-white);margin:0 0 18px;line-height:1.3}\n.scq-intro-copy{font-size:15px;color:rgba(246,244,239,.7);line-height:1.6;margin-bottom:24px;max-width:520px}\n.scq-intro-list{list-style:none;padding:0;margin:0 0 30px;text-align:left;display:inline-block}\n.scq-intro-list li{font-size:14px;font-weight:600;color:rgba(246,244,239,.85);padding:6px 0;display:flex;align-items:flex-start;gap:10px}\n.scq-intro-check{color:var(--scq-gold);font-weight:700;flex-shrink:0}\n.scq-intro-note{font-size:12px;color:rgba(246,244,239,.45);margin-top:12px}\n.scq-start-btn{background:var(--scq-gold);color:var(--scq-navy-deep);border:none;border-radius:10px;padding:17px 38px;font-size:15px;font-weight:600;cursor:pointer;transition:transform .2s;font-family:inherit}\n.scq-start-btn:hover{transform:translateY(-1px)}\n.scq-score-ring-wrap{position:relative;width:176px;height:176px;margin:6px auto 22px}\n.scq-score-ring-wrap svg{width:100%;height:100%;transform:rotate(-90deg)}\n.scq-score-ring-track{fill:none;stroke:var(--scq-line);stroke-width:10}\n.scq-score-ring-fill{fill:none;stroke:var(--scq-gold);stroke-width:10;stroke-linecap:round;transition:stroke-dashoffset 1s}\n.scq-score-number{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}\n.scq-score-pct{font-size:34px;font-weight:700;color:var(--scq-white);line-height:1}\n.scq-score-pct-label{font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:var(--scq-gold);margin-top:6px}\n.scq-archetype-name{font-size:22px;font-weight:600;color:var(--scq-white);margin:0 0 10px}\n.scq-archetype-blurb{font-size:14px;color:rgba(246,244,239,.75);line-height:1.6;max-width:480px;margin:0 auto 26px}\n.scq-profile-recap{width:100%;max-width:480px;margin:0 auto 26px;border:1px solid var(--scq-line);border-radius:12px;padding:6px 20px;text-align:left}\n.scq-profile-recap-item{display:flex;justify-content:space-between;gap:12px;padding:12px 0;border-bottom:1px solid var(--scq-line);font-size:13px}\n.scq-profile-recap-item:last-child{border-bottom:none}\n.scq-profile-recap-label{color:rgba(246,244,239,.5);text-transform:uppercase;letter-spacing:.06em;font-size:11px;flex-shrink:0}\n.scq-profile-recap-value{color:var(--scq-white);font-weight:500;text-align:right}\n.scq-tier-badge{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--scq-navy-deep);background:var(--scq-gold);padding:7px 16px;border-radius:999px;margin-bottom:14px}\n.scq-cta-headline{font-size:19px;font-weight:600;color:var(--scq-white);margin:20px 0 12px;max-width:460px}\n.scq-tier-message{font-size:14px;color:rgba(246,244,239,.8);line-height:1.6;max-width:460px;margin:6px auto 0}\n.scq-result-image{width:100%;max-width:322px;border-radius:14px;margin:22px auto;display:block}\n.scq-email-notice{font-size:12px;color:rgba(246,244,239,.55);margin:10px auto 0}\n.scq-whatsapp-btn{display:inline-flex;align-items:center;gap:10px;background:#25D366;color:#FFFFFF;border-radius:999px;padding:14px 24px;font-size:14px;font-weight:600;text-decoration:none;margin:26px 0;transition:transform .2s}\n.scq-whatsapp-btn:hover{transform:translateY(-1px)}\n.scq-progress{flex-shrink:0;width:100%;max-width:480px;margin:0 auto;padding:16px 24px calc(24px + env(safe-area-inset-bottom,0px))}\n.scq-progress-label{font-size:13px;color:var(--scq-gold);font-weight:500;margin-bottom:10px}\n.scq-progress-track{height:3px;border-radius:999px;background:var(--scq-line);overflow:hidden}\n.scq-progress-fill{height:100%;background:var(--scq-gold);border-radius:999px;transition:width .3s}\n@media(max-width:640px){.scq-logo{padding:28px 0 6px}\n.scq-logo img{height:26px}\n.scq-scroll{padding:0 18px}\n.scq-question{font-size:21px;margin-bottom:24px}\n.scq-sub{font-size:13px;margin:0 0 16px}\n.scq-intro-title{font-size:25px}\n.scq-score-ring-wrap{width:140px;height:140px}\n.scq-score-pct{font-size:26px}\n.scq-archetype-name{font-size:19px}\n.scq-cta-headline{font-size:16px;margin:20px 0 10px}\n.scq-whatsapp-btn{font-size:13px;padding:12px 18px;text-align:center}\n.scq-intro-copy{font-size:14px}\n.scq-options{gap:10px}\n.scq-options.scq-two-col{grid-template-columns:1fr}\n.scq-option{font-size:13.5px;padding:12px 14px;min-height:50px}\n.scq-option.scq-option-multi{padding:14px 16px 14px 42px;text-align:left;justify-content:flex-start}\n.scq-check-icon{left:14px;width:14px;height:14px}\n.scq-next,.scq-start-btn{padding:14px 30px;font-size:14px}\n.scq-progress{max-width:100%;padding:12px 18px calc(16px + env(safe-area-inset-bottom,0px))}\n.scq-progress-label{font-size:11px;margin-bottom:8px}}\n@media(max-width:380px){.scq-field-row{flex-direction:column;gap:0}}\n";
  var styleTag = document.createElement("style");
  styleTag.textContent = css;
  document.head.appendChild(styleTag);
})();

(function () {
var CONFIG = {
MODE: "inline",
GOOGLE_SHEETS_URL: "https://script.google.com/macros/s/AKfycbxMa7ui39JL0zrO_GnpTx7bavkJSwlNznFX3VkJHpqy7Fr-hL8OgJtCAe2wcgQ1GRA/exec",
WEBFLOW: {
enabled: false,
formSelector: "#stc-hidden-webflow-form"
}
};
var QUESTIONS = [
{
key: "concern",
type: "choice",
eyebrow: "Just 3 minutes left to complete.",
question: "What&rsquo;s your main reason for exploring stem cell therapy?",
options: [
"Chronic pain or Joint Recovery",
"Back or Spine Pain",
"Nerve or Neuropathy",
"Autoimmune condition",
"Longevity optimization",
"Sports or Activity Injury",
"ED or fertility enhancement",
"Other"
]
},
{
key: "duration",
type: "choice",
eyebrow: "Just 3 minutes left to complete.",
question: "How long have you been experiencing this?",
options: ["Less than 6 months", "6-12 months", "1-3 years", "3+ years"]
},
{
key: "severity",
type: "choice",
question: "How much does this affect your daily life, performance, or well-being?",
options: [
"Mild (Noticeable but manageable)",
"Moderate (Impacts energy and activity)",
"Significant (Limits daily comfort)",
"Intolerable (Disrupts basic daily function)"
]
},
{
key: "priorTreatmentsTried",
type: "multi",
question: "Have you tried any treatments for your current issue or goal?",
options: [
"Surgery",
"Medication & Pain Management",
"Injections (Cortisone, PRP)",
"Physical Therapy",
"Chiropractic Care",
"Regenerative treatments",
"Supplements & alternative treatments",
"None of the above"
]
},
{
key: "symptomsDescription",
type: "text",
eyebrow: "Be as specific as possible.",
question: "Please describe your current symptoms, issues, concerns, or health goals in great detail.",
maxLength: 1000
},
{
key: "medicalRecords",
type: "choice",
question: "Would you be willing to provide key medical records if requested by the physician?",
options: [
"Yes, I have recent medical documents and can provide them immediately",
"I don't have them yet, but I'm willing to obtain and share them promptly"
]
},
{
key: "medications",
type: "choice",
eyebrow: "Just 2 minutes left to complete.",
question: "Are you currently taking any medications?",
options: ["Prescribed medications", "Hormones or peptides", "I'd rather not answer", "None"]
},
{
key: "regenerativeHistory",
type: "multi",
question: "Have you ever received regenerative treatments before?",
options: ["No, never", "Stem Cells", "Exosomes", "PRP", "Peptides", "Hormone Therapy"]
},
{
key: "familiarity",
type: "choice",
question: "How familiar are you with stem cell therapy protocols and other regenerative options?",
options: [
"I've already researched it quite deeply",
"I know enough to have a good conversation about it",
"I've consumed a bit of content about it",
"Just starting to explore, I'd like to learn more"
]
},
{
key: "budget",
type: "choice",
sub: "Advanced regenerative therapies typically range from $10,000 USD to $40,000 USD, depending on complexity and the type of protocol.",
question: "What is your expected budget range for treatment?",
options: [
"Under $10,000",
"$10,000 - $20,000",
"$20,000 - $30,000",
"$30,000 - $40,000",
"Over $40,000",
"Not sure yet"
]
},
{
key: "investmentReadiness",
type: "choice",
sub: "Advanced regenerative therapies typically range from $10,000 USD to $40,000 USD, depending on complexity and the type of protocol.",
question: "How ready are you to invest in your health right now?",
options: [
"Fully ready (I'm searching for the top clinics)",
"Open-minded (Depending on options)",
"Curious (Just exploring possibilities)",
"I'm not ready to invest at that level"
]
},
{
key: "timeline",
type: "choice",
eyebrow: "Just 1 minute left to complete.",
question: "When would you like to begin your treatment?",
options: [
"As soon as possible (within 30 days)",
"In the next 2-3 months",
"Later within 6 months",
"Just exploring for now"
]
},
{
key: "travelWillingness",
type: "choice",
eyebrow: "Just 1 minute left to complete.",
question: "Are you willing to travel internationally for the best possible treatment options?",
options: [
"Yes, anywhere if it's the best healthcare",
"Yes, I'm open to travel for the right program",
"Yes, within the closest country",
"I'd prefer to stay within my area"
]
},
{
key: "providerPriorities",
type: "multi",
question: "What matters most to you when choosing a treatment provider?",
options: [
"Licensed & experienced doctors",
"Verified clinical data & results",
"Transparent pricing & convenience",
"Easy logistics & minimal downtime",
"English-speaking medical staff",
"Privacy & luxury services"
]
},
{
key: "wantsConsultation",
type: "choice",
eyebrow: "Almost there! You're close to completing the quiz.",
question: "Would you like a free consultation with a regenerative advisor to explore the treatment options for your case?",
options: ["Yes, I'd like to learn what's possible", "Not yet, send results first"]
},
{
key: "referralSource",
type: "multi",
eyebrow: "Final question.",
question: "How did you hear about STEMCIERGE?",
options: [
"Advertisement",
"Social Media: Facebook / Instagram",
"Search Engine: Google / Bing",
"AI Chat: ChatGPT / Gemini",
"YouTube Video",
"Podcast / Interview",
"Word of Mouth / Referral",
"Medical Recommendation",
"Billboard / Posters",
"Other"
]
}
];
var ARCHETYPES = {
"Chronic pain or Joint Recovery": { name: "The Mobility Candidate", blurb: "Ongoing joint pain or a slow recovery can affect nearly everything you do each day. Regenerative treatments for joint and mobility concerns are among the most requested protocols worldwide, and the right protocol may support meaningful pain relief without invasive surgery. Our dedicated Regenerative Advisor can review your case with you and match you with the vetted providers best suited to joint focused regenerative care." },
"Back or Spine Pain": { name: "The Structural Candidate", blurb: "Spinal and structural discomfort can be frustrating to manage long term, especially when previous treatments have only helped a little. The right regenerative protocol may support disc and joint health as part of a broader recovery plan. Our dedicated Regenerative Advisor can review your case with you and match you with the vetted providers best suited to structural and spinal cases." },
"Nerve or Neuropathy": { name: "The Neuro Regenerative Candidate", blurb: "Nerve related symptoms like numbness, tingling, or reduced sensation can be some of the hardest to manage through conventional care alone. Regenerative approaches focused on nerve function are a growing area of treatment, and the right protocol may help support gradual improvement over time. Our dedicated Regenerative Advisor can review your case with you and match you with the vetted providers best suited to nerve focused regenerative care." },
"Autoimmune condition": { name: "The Immune Balance Candidate", blurb: "Managing an autoimmune or inflammatory condition often means juggling multiple treatments and specialists at once. Regenerative medicine is increasingly explored as a way to help support immune balance alongside existing care, and the right protocol may be a valuable addition to your plan. Our dedicated Regenerative Advisor can review your case with you and match you with the vetted providers best suited to autoimmune focused regenerative treatment." },
"Longevity optimization": { name: "The Longevity Candidate", blurb: "You're thinking proactively about long term health rather than waiting for a specific problem to appear. Regenerative protocols aimed at performance and healthy aging may help you stay ahead of age related decline instead of simply reacting to it. Our dedicated Regenerative Advisor can review your case with you and match you with the vetted providers best suited to longevity and preventive regenerative care." },
"Sports or Activity Injury": { name: "The Athletic Recovery Candidate", blurb: "Getting back to full performance after an injury can take longer than expected, especially when rest alone isn't enough. Regenerative treatments are widely used by athletes and active individuals, and the right protocol may help support a faster, more complete recovery. Our dedicated Regenerative Advisor can review your case with you and match you with the vetted providers best suited to sports and activity related regenerative care." },
"ED or fertility enhancement": { name: "The Vitality Candidate", blurb: "Concerns around vitality and fertility deserve a discreet, judgment free approach. Regenerative treatment in this area is a newer but fast growing option, and the right protocol may be worth exploring alongside conventional care. Our dedicated Regenerative Advisor can review your case with you and match you with the vetted providers best suited to vitality and fertility focused regenerative protocols, with full confidentiality throughout." },
"Other": { name: "The Personalized Candidate", blurb: "Your goals don't fit neatly into a single category, and that's completely fine. The right regenerative protocol often depends on a closer look at your specific situation rather than a general answer, and the right guidance may make that clearer. Our dedicated Regenerative Advisor can personally review your case and match you with the vetted providers best suited to what you actually need." }
};
var TIER_COPY = {
Hot: { label: "Active Candidate", color: "#7FCB7A", message: "Our team will reach out within 24 hours to walk through your results and book a call to recommend a custom plan based on your specific case. In the meantime, feel free to reach out on WhatsApp to request a priority booking or ask any questions." },
Warm: { label: "Potential Candidate", color: "#EBC16A", message: "Our team will reach out within 24 hours to walk through your results and book a call to recommend a custom plan based on your specific case. In the meantime, feel free to reach out on WhatsApp to request a priority booking or ask any questions." },
Cool: { label: "Exploratory Candidate", color: "#9CA3AF", message: "Our team will reach out within 24 hours to walk through your results and book a call to recommend a custom plan based on your specific case. In the meantime, feel free to reach out on WhatsApp to request a priority booking or ask any questions." }
};
var WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=66991247939&text=Hi+STEMCIERGE,+I+just+completed+the+assessment+quiz+and+would+like+to+review+my+results.+I%E2%80%99m+interested+in+guidance+on+the+best+country+and+clinic+options+for+my+condition.&type=phone_number&app_absent=0";
var PRIVACY_HTML = "STEMCIERGE follows strict privacy and data-protection standards. We offer educational resources and guidance but do not provide medical advice, diagnoses, or treatments. All information should not replace professional medical consultation. We work with vetted providers but do not guarantee outcomes. Always consult a licensed healthcare professional before making medical decisions. <a href=\"https://stemcierge.com/privacy-policy\" target=\"_blank\" rel=\"noopener\">Privacy Policy</a>";
var COUNTRY_CODES = [
{name:"United States",dial:"+1",iso:"US"},
{name:"Canada",dial:"+1",iso:"CA"},
{name:"United Kingdom",dial:"+44",iso:"GB"},
{name:"Argentina",dial:"+54",iso:"AR"},
{name:"Australia",dial:"+61",iso:"AU"},
{name:"Bahrain",dial:"+973",iso:"BH"},
{name:"Brazil",dial:"+55",iso:"BR"},
{name:"Chile",dial:"+56",iso:"CL"},
{name:"China",dial:"+86",iso:"CN"},
{name:"Colombia",dial:"+57",iso:"CO"},
{name:"Costa Rica",dial:"+506",iso:"CR"},
{name:"Dominican Republic",dial:"+1",iso:"DO"},
{name:"Egypt",dial:"+20",iso:"EG"},
{name:"France",dial:"+33",iso:"FR"},
{name:"Germany",dial:"+49",iso:"DE"},
{name:"Greece",dial:"+30",iso:"GR"},
{name:"Hong Kong",dial:"+852",iso:"HK"},
{name:"India",dial:"+91",iso:"IN"},
{name:"Indonesia",dial:"+62",iso:"ID"},
{name:"Ireland",dial:"+353",iso:"IE"},
{name:"Israel",dial:"+972",iso:"IL"},
{name:"Italy",dial:"+39",iso:"IT"},
{name:"Japan",dial:"+81",iso:"JP"},
{name:"Jordan",dial:"+962",iso:"JO"},
{name:"Kenya",dial:"+254",iso:"KE"},
{name:"Kuwait",dial:"+965",iso:"KW"},
{name:"Malaysia",dial:"+60",iso:"MY"},
{name:"Mexico",dial:"+52",iso:"MX"},
{name:"Netherlands",dial:"+31",iso:"NL"},
{name:"New Zealand",dial:"+64",iso:"NZ"},
{name:"Nigeria",dial:"+234",iso:"NG"},
{name:"Norway",dial:"+47",iso:"NO"},
{name:"Oman",dial:"+968",iso:"OM"},
{name:"Panama",dial:"+507",iso:"PA"},
{name:"Peru",dial:"+51",iso:"PE"},
{name:"Philippines",dial:"+63",iso:"PH"},
{name:"Poland",dial:"+48",iso:"PL"},
{name:"Portugal",dial:"+351",iso:"PT"},
{name:"Qatar",dial:"+974",iso:"QA"},
{name:"Saudi Arabia",dial:"+966",iso:"SA"},
{name:"Singapore",dial:"+65",iso:"SG"},
{name:"South Africa",dial:"+27",iso:"ZA"},
{name:"South Korea",dial:"+82",iso:"KR"},
{name:"Spain",dial:"+34",iso:"ES"},
{name:"Sweden",dial:"+46",iso:"SE"},
{name:"Switzerland",dial:"+41",iso:"CH"},
{name:"Thailand",dial:"+66",iso:"TH"},
{name:"Turkey",dial:"+90",iso:"TR"},
{name:"United Arab Emirates",dial:"+971",iso:"AE"},
{name:"Vietnam",dial:"+84",iso:"VN"}
];
function flagEmoji(iso2) {
return iso2.toUpperCase().replace(/./g, function (ch) {
return String.fromCodePoint(127397 + ch.charCodeAt(0));
});
}
var state = { step: -1, answers: {}, contact: {} };
var TOTAL_STEPS = QUESTIONS.length + 1;
function findMyRoot() {
var node = document.currentScript;
while (node) {
node = node.previousElementSibling;
if (node && node.id === "stc-quiz-root" && !node.hasAttribute("data-scq-claimed")) {
node.setAttribute("data-scq-claimed", "true");
return node;
}
}
var candidates = document.querySelectorAll('#stc-quiz-root:not([data-scq-claimed])');
if (candidates.length) { candidates[0].setAttribute("data-scq-claimed", "true"); return candidates[0]; }
return document.getElementById("stc-quiz-root");
}
var root = findMyRoot();
var overlayEl, bodyEl, progressEl, launcherEl;
if (CONFIG.MODE === "inline") root.classList.add("scq-inline-mode");
function loadFonts() {
if (document.getElementById("stc-quiz-fonts")) return;
var link = document.createElement("link");
link.id = "stc-quiz-fonts";
link.rel = "stylesheet";
link.href = "https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap";
document.head.appendChild(link);
}
loadFonts();
function el(tag, cls, html) {
var e = document.createElement(tag);
if (cls) e.className = cls;
if (html !== undefined) e.innerHTML = html;
return e;
}
function buildWhatsappBtn() {
var btn = el("a", "scq-whatsapp-btn");
btn.href = WHATSAPP_URL;
btn.target = "_blank";
btn.rel = "noopener";
btn.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.9-1.3A10 10 0 1 0 12 2z"/></svg><span>Chat with us on WhatsApp</span>';
return btn;
}
var LOGO_DATA_URI = "https://cdn.prod.website-files.com/67db9ecee06fb02b97a9c5ee/690263d8ebf397de71bda933_3.png";
var ICON_DATA_URI = "https://cdn.prod.website-files.com/67db9ecee06fb02b97a9c5ee/6a666835151830893c743f9d_stemcierge-icon-only.png";
function buildShell() {
root.style.setProperty("--scq-icon-url", "url(" + ICON_DATA_URI + ")");
var wrap = el("div");
if (CONFIG.MODE === "floating") {
var launcher = el("button", "scq-launcher");
launcher.id = "scq-launcher";
launcherEl = launcher;
launcher.innerHTML = '<span class="scq-launcher-dot"></span><span>Check Your Eligibility</span>';
launcher.addEventListener("click", function () { openModal(); });
var overlay = el("div", "scq-overlay");
overlay.id = "scq-overlay";
overlayEl = overlay;
var card = el("div", "scq-card");
card.id = "scq-card";
var close = el("button", "scq-close", "&times;");
close.addEventListener("click", closeModal);
card.appendChild(close);
var scroll = el("div", "scq-scroll");
scroll.appendChild(buildLogo());
var body = el("div", "scq-body"); body.id = "scq-body";
bodyEl = body;
scroll.appendChild(body);
card.appendChild(scroll);
var progress = el("div", "scq-progress"); progress.id = "scq-progress";
progressEl = progress;
card.appendChild(progress);
overlay.appendChild(card);
wrap.appendChild(launcher);
wrap.appendChild(overlay);
} else if (CONFIG.MODE === "inline") {
var overlay2 = el("div", "scq-overlay scq-open");
overlayEl = overlay2;
var card2 = el("div", "scq-card");
var scroll2 = el("div", "scq-scroll");
scroll2.appendChild(buildLogo());
var body2 = el("div", "scq-body"); body2.id = "scq-body";
bodyEl = body2;
scroll2.appendChild(body2);
card2.appendChild(scroll2);
var progress2 = el("div", "scq-progress"); progress2.id = "scq-progress";
progressEl = progress2;
card2.appendChild(progress2);
overlay2.appendChild(card2);
wrap.appendChild(overlay2);
}
root.appendChild(wrap);
}
function buildLogo() {
var logo = el("div", "scq-logo");
logo.innerHTML = '<img src="' + LOGO_DATA_URI + '" alt="STEMCIERGE" />';
return logo;
}
function openModal() {
overlayEl.classList.add("scq-open");
document.body.style.overflow = "hidden";
if (launcherEl) launcherEl.style.display = "none";
if (state.step === -1) render();
}
function closeModal() {
overlayEl.classList.remove("scq-open");
document.body.style.overflow = "";
if (launcherEl) launcherEl.style.display = "";
}
document.addEventListener("keydown", function (e) {
if (e.key === "Escape") { if (overlayEl && overlayEl.classList.contains("scq-open") && CONFIG.MODE === "floating") closeModal(); }
});
function renderProgress() {
var p = progressEl;
if (!p) return;
if (state.step < 0 || state.step > QUESTIONS.length) { p.innerHTML = ""; return; }
var pct = Math.round((state.step / TOTAL_STEPS) * 100);
p.innerHTML = '<div class="scq-progress-label">' + pct + '% Complete</div>' +
'<div class="scq-progress-track"><div class="scq-progress-fill" style="width:' + pct + '%"></div></div>';
}
function render() {
var body = bodyEl;
if (!body) return;
body.innerHTML = "";
renderProgress();
if (state.step === -1) {
body.innerHTML =
'<h2 class="scq-intro-title">Check Your Eligibility for Advanced Stem Cell Therapy Abroad</h2>' +
'<p class="scq-intro-copy">Get matched with a top stem cell provider suited to your goals, hand-picked by a dedicated concierge team from a trusted global network. Just 3 minutes to complete.</p>' +
'<ul class="scq-intro-list">' +
'<li><span class="scq-intro-check">✓</span><span>Get your personalized Candidate Profile</span></li>' +
'<li><span class="scq-intro-check">✓</span><span>Match with vetted clinics for your case</span></li>' +
'<li><span class="scq-intro-check">✓</span><span>100% confidential, no obligation</span></li>' +
'</ul>';
var startBtn = el("button", "scq-start-btn", "START ASSESSMENT");
startBtn.addEventListener("click", function () { state.step = 0; render(); });
body.appendChild(startBtn);
body.appendChild(el("div", "scq-intro-note", "No medical documentation required to start"));
return;
}
if (state.step >= 0 && state.step < QUESTIONS.length) {
var q = QUESTIONS[state.step];
if (state.step > 0) {
var back = el("button", "scq-back", "&#8592; Back");
back.addEventListener("click", function () { state.step--; render(); });
body.appendChild(back);
}
var eyebrowParts = [];
if (q.eyebrow) eyebrowParts.push(q.eyebrow);
if (q.type === "multi") eyebrowParts.push("Please select all that apply.");
if (eyebrowParts.length) body.appendChild(el("div", "scq-eyebrow", eyebrowParts.join(" ")));
if (q.sub) body.appendChild(el("div", "scq-sub", q.sub));
body.appendChild(el("div", "scq-question", q.question));
if (q.type === "choice") {
var optWrap = el("div", "scq-options" + (q.options.length > 4 ? " scq-two-col" : ""));
q.options.forEach(function (opt) {
var btn = el("button", "scq-option", opt);
if (state.answers[q.key] === opt) btn.classList.add("scq-selected");
btn.addEventListener("click", function () {
state.answers[q.key] = opt;
if (opt === "Other") {
render();
} else {
setTimeout(function () { state.step++; render(); }, 160);
render();
}
});
optWrap.appendChild(btn);
});
body.appendChild(optWrap);
if (state.answers[q.key] === "Other") {
var otherInput = el("input", "scq-other-input");
otherInput.type = "text";
otherInput.placeholder = "Please specify";
otherInput.value = state.answers[q.key + "OtherText"] || "";
otherInput.addEventListener("input", function () {
state.answers[q.key + "OtherText"] = otherInput.value;
otherNext.disabled = otherInput.value.trim().length === 0;
});
body.appendChild(otherInput);
var otherNext = el("button", "scq-next", "Next");
otherNext.disabled = (state.answers[q.key + "OtherText"] || "").trim().length === 0;
otherNext.addEventListener("click", function () { state.step++; render(); });
body.appendChild(otherNext);
}
} else if (q.type === "multi") {
if (!Array.isArray(state.answers[q.key])) state.answers[q.key] = [];
var multiWrap = el("div", "scq-options" + (q.options.length > 4 ? " scq-two-col" : ""));
q.options.forEach(function (opt) {
var btn = el("button", "scq-option scq-option-multi");
btn.innerHTML = '<svg class="scq-check-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 10.5L8 14.5L16 5.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>' + opt + '</span>';
if (state.answers[q.key].indexOf(opt) !== -1) btn.classList.add("scq-selected");
btn.addEventListener("click", function () {
var arr = state.answers[q.key];
var idx = arr.indexOf(opt);
if (idx === -1) arr.push(opt); else arr.splice(idx, 1);
render();
});
multiWrap.appendChild(btn);
});
body.appendChild(multiWrap);
if (state.answers[q.key].indexOf("Other") !== -1) {
var otherInputM = el("input", "scq-other-input");
otherInputM.type = "text";
otherInputM.placeholder = "Please specify";
otherInputM.value = state.answers[q.key + "OtherText"] || "";
otherInputM.addEventListener("input", function () {
state.answers[q.key + "OtherText"] = otherInputM.value;
});
body.appendChild(otherInputM);
}
var multiNext = el("button", "scq-next", "Next");
multiNext.disabled = state.answers[q.key].length === 0;
multiNext.addEventListener("click", function () { state.step++; render(); });
body.appendChild(multiNext);
} else if (q.type === "text") {
var wrap = el("div", "scq-textarea-wrap");
var textarea = el("textarea", "scq-textarea");
textarea.maxLength = q.maxLength || 1000;
textarea.value = state.answers[q.key] || "";
textarea.placeholder = "Type your answer here...";
var counter = el("div", "scq-charcount", textarea.value.length + "/" + textarea.maxLength);
textarea.addEventListener("input", function () {
state.answers[q.key] = textarea.value;
counter.textContent = textarea.value.length + "/" + textarea.maxLength;
nextBtn.disabled = textarea.value.trim().length === 0;
});
wrap.appendChild(textarea);
wrap.appendChild(counter);
body.appendChild(wrap);
var nextBtn = el("button", "scq-next", "Next");
nextBtn.disabled = (state.answers[q.key] || "").trim().length === 0;
nextBtn.addEventListener("click", function () { state.step++; render(); });
body.appendChild(nextBtn);
}
return;
}
if (state.step === QUESTIONS.length) {
var back2 = el("button", "scq-back", "&#8592; Back");
back2.addEventListener("click", function () { state.step--; render(); });
body.appendChild(back2);
body.appendChild(el("div", "scq-question", "Where should we send your personalized results?"));
var form = el("div", null);
form.style.width = "100%";
form.style.maxWidth = "480px";
function buildFloatField(key, label, type) {
var fWrap = el("div", "scq-field scq-float");
var input = el("input");
input.type = type; input.id = "scq-input-" + key; input.placeholder = " ";
input.value = state.contact[key] || "";
var lbl = el("label", null, label);
lbl.setAttribute("for", "scq-input-" + key);
var errMsg = el("div", "scq-error-msg", "Please enter a valid " + label.toLowerCase() + ".");
input.addEventListener("input", function () { state.contact[key] = input.value; fWrap.classList.remove("scq-error"); });
fWrap.appendChild(input); fWrap.appendChild(lbl); fWrap.appendChild(errMsg);
return fWrap;
}
var nameRow = el("div", "scq-field-row");
nameRow.appendChild(buildFloatField("firstName", "First Name", "text"));
nameRow.appendChild(buildFloatField("lastName", "Last Name", "text"));
form.appendChild(nameRow);
form.appendChild(buildFloatField("email", "Email Address", "email"));
var whatsappWrap = el("div", "scq-field scq-field-static");
var whatsappLabel = el("label", null, "WhatsApp Number *");
whatsappLabel.setAttribute("for", "scq-input-whatsapp");
whatsappWrap.appendChild(whatsappLabel);
var whatsappCombo = el("div", "scq-whatsapp-combo");
var codeBtn = el("button", "scq-code-btn");
codeBtn.type = "button";
var codeList = el("div", "scq-code-list");
codeList.style.display = "none";
function setCode(iso) { codeBtn.innerHTML = flagEmoji(iso) + " ▾"; }
setCode(state.contact.whatsappIso || "US");
COUNTRY_CODES.forEach(function (c) {
var row = el("div", "scq-code-row", flagEmoji(c.iso) + " " + c.dial + " " + c.name);
row.addEventListener("click", function () {
state.contact.whatsappCode = c.dial;
state.contact.whatsappIso = c.iso;
setCode(c.iso);
codeList.style.display = "none";
});
codeList.appendChild(row);
});
codeBtn.addEventListener("click", function (e) {
e.stopPropagation();
codeList.style.display = codeList.style.display === "none" ? "block" : "none";
});
document.addEventListener("click", function () { codeList.style.display = "none"; });
whatsappCombo.appendChild(codeBtn);
whatsappCombo.appendChild(codeList);
whatsappCombo.appendChild(el("div", "scq-whatsapp-divider"));
var whatsappInput = el("input");
whatsappInput.type = "tel";
whatsappInput.id = "scq-input-whatsapp";
whatsappInput.placeholder = "555 123 4567";
whatsappInput.value = state.contact.whatsapp || "";
whatsappInput.addEventListener("input", function () {
state.contact.whatsapp = whatsappInput.value;
whatsappWrap.classList.remove("scq-error");
});
whatsappCombo.appendChild(whatsappInput);
whatsappWrap.appendChild(whatsappCombo);
var whatsappErr = el("div", "scq-error-msg", "Please enter a valid whatsapp number.");
whatsappWrap.appendChild(whatsappErr);
form.appendChild(whatsappWrap);
var consentWrap = el("div", "scq-consent");
var consentLabel = el("label", "scq-consent-label");
var consentCheckbox = el("input");
consentCheckbox.type = "checkbox";
consentCheckbox.id = "scq-input-consent";
consentCheckbox.checked = !!state.contact.consent;
consentCheckbox.addEventListener("change", function () {
state.contact.consent = consentCheckbox.checked;
consentWrap.classList.remove("scq-error");
});
var consentText = el("span", null, "I agree to be contacted by STEMCIERGE & vetted providers to discuss my assessment and explore potential treatment options. I understand that I can opt out anytime.");
consentLabel.appendChild(consentCheckbox);
consentLabel.appendChild(consentText);
consentWrap.appendChild(consentLabel);
var consentErr = el("div", "scq-error-msg", "Please confirm your consent.");
consentWrap.appendChild(consentErr);
form.appendChild(consentWrap);
body.appendChild(form);
var submitBtn = el("button", "scq-next", "SHOW MY RESULTS");
submitBtn.addEventListener("click", function () { handleSubmit(submitBtn); });
body.appendChild(submitBtn);
var privacy = el("p", "scq-privacy", PRIVACY_HTML);
body.appendChild(privacy);
return;
}
if (state.step === QUESTIONS.length + 1) {
var result = state.result || { percent: 75, temp: "Warm" };
var archetype = ARCHETYPES[state.answers.concern] || ARCHETYPES["Other"];
var tier = TIER_COPY[result.temp] || TIER_COPY.Warm;
body.innerHTML = '<div class="scq-intro-meta">Your Results</div>';
var size = 176, strokeW = 10, radius = (size - strokeW) / 2, circumference = 2 * Math.PI * radius;
var ringWrap = el("div", "scq-score-ring-wrap");
ringWrap.innerHTML =
'<svg viewBox="0 0 ' + size + ' ' + size + '">' +
'<circle class="scq-score-ring-track" cx="' + (size / 2) + '" cy="' + (size / 2) + '" r="' + radius + '"></circle>' +
'<circle class="scq-score-ring-fill" cx="' + (size / 2) + '" cy="' + (size / 2) + '" r="' + radius + '" stroke-dasharray="' + circumference + '" stroke-dashoffset="' + circumference + '"></circle>' +
'</svg>' +
'<div class="scq-score-number"><span class="scq-score-pct">0%</span><span class="scq-score-pct-label">Match Score</span></div>';
body.appendChild(ringWrap);
var tierBadge = el("div", "scq-tier-badge", tier.label);
tierBadge.style.background = tier.color;
body.appendChild(tierBadge);
body.appendChild(el("div", "scq-archetype-name", archetype.name));
body.appendChild(el("p", "scq-archetype-blurb", archetype.blurb));
body.appendChild(buildWhatsappBtn());
var recap = el("div", "scq-profile-recap");
[
{ label: "Primary Focus", value: state.answers.concern === "Other" ? (state.answers.concernOtherText || "Other") : state.answers.concern },
{ label: "Timeline", value: state.answers.timeline },
{ label: "Travel Preference", value: state.answers.travelWillingness }
].forEach(function (item) {
if (!item.value) return;
var row = el("div", "scq-profile-recap-item");
row.innerHTML = '<span class="scq-profile-recap-label">' + item.label + '</span><span class="scq-profile-recap-value">' + item.value + '</span>';
recap.appendChild(row);
});
body.appendChild(recap);
body.appendChild(el("p", "scq-email-notice", "Full report sent to: " + (state.contact.email || "your email")));
var resultImg = el("img", "scq-result-image");
resultImg.src = "https://cdn.prod.website-files.com/67db9ecee06fb02b97a9c5ee/6900f27bfc72a4148770ef37_a-futuristic-digital-medical--2AilTFug-STEMCIERGE-stem-cell-therapy-min.avif";
resultImg.alt = "STEMCIERGE";
body.appendChild(resultImg);
body.appendChild(el("h3", "scq-cta-headline", "Book Your Consultation with a Regenerative Advisor & Review Your Case"));
body.appendChild(el("p", "scq-tier-message", tier.message));
body.appendChild(buildWhatsappBtn());
var resultPrivacy = el("p", "scq-privacy", PRIVACY_HTML);
body.appendChild(resultPrivacy);
setTimeout(function () {
var fillCircle = ringWrap.querySelector(".scq-score-ring-fill");
var pctText = ringWrap.querySelector(".scq-score-pct");
var target = result.percent;
if (fillCircle) fillCircle.style.strokeDashoffset = circumference - (target / 100) * circumference;
if (pctText) {
var startTime = null;
function step(ts) {
if (!startTime) startTime = ts;
var progress = Math.min((ts - startTime) / 1200, 1);
pctText.textContent = Math.round(progress * target) + "%";
if (progress < 1) requestAnimationFrame(step);
}
requestAnimationFrame(step);
}
}, 50);
return;
}
}
function validateContact() {
var valid = true;
var checks = {
firstName: function (v) { return v.trim().length > 1; },
lastName: function (v) { return v.trim().length > 1; },
email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); },
whatsapp: function (v) { return v.replace(/[^0-9]/g, "").length >= 7; }
};
Object.keys(checks).forEach(function (key) {
var input = bodyEl.querySelector("#scq-input-" + key);
var value = (state.contact[key] || "");
var wrap = input.closest(".scq-field");
if (!checks[key](value)) { wrap.classList.add("scq-error"); valid = false; }
else { wrap.classList.remove("scq-error"); }
});
var consentWrap = bodyEl.querySelector("#scq-input-consent").closest(".scq-consent");
if (!state.contact.consent) { consentWrap.classList.add("scq-error"); valid = false; }
else { consentWrap.classList.remove("scq-error"); }
return valid;
}
function computeLeadScore() {
var score = 0;
var timelineMap = {
"As soon as possible (within 30 days)": 3,
"In the next 2-3 months": 2,
"Later within 6 months": 1,
"Just exploring for now": 0
};
var budgetMap = {
"Over $40,000": 4,
"$30,000 - $40,000": 3,
"$20,000 - $30,000": 2,
"$10,000 - $20,000": 1,
"Under $10,000": 0,
"Not sure yet": 0
};
var readinessMap = {
"Fully ready (I'm searching for the top clinics)": 3,
"Open-minded (Depending on options)": 2,
"Curious (Just exploring possibilities)": 1,
"I'm not ready to invest at that level": 0
};
var severityMap = {
"Intolerable (Disrupts basic daily function)": 3,
"Significant (Limits daily comfort)": 2,
"Moderate (Impacts energy and activity)": 1,
"Mild (Noticeable but manageable)": 0
};
score += timelineMap[state.answers.timeline] || 0;
score += budgetMap[state.answers.budget] || 0;
score += readinessMap[state.answers.investmentReadiness] || 0;
score += severityMap[state.answers.severity] || 0;
var temp = score >= 8 ? "Hot" : score >= 4 ? "Warm" : "Cool";
var maxScore = 13;
var floor = 65, cap = 90;
var percent = Math.round(floor + (score / maxScore) * (cap - floor));
return { score: score, temp: temp, percent: percent };
}
function joinIfArray(val) {
return Array.isArray(val) ? val.join("; ") : (val || "");
}
function handleSubmit(btn) {
if (!validateContact()) return;
btn.classList.add("scq-loading");
btn.disabled = true;
var lead = computeLeadScore();
state.result = lead;
var archE = ARCHETYPES[state.answers.concern] || ARCHETYPES["Other"];
var tierE = TIER_COPY[lead.temp] || TIER_COPY.Warm;
var payload = {
timestamp: new Date().toISOString(),
firstName: state.contact.firstName,
lastName: state.contact.lastName,
email: state.contact.email,
whatsapp: (state.contact.whatsappCode || "+1") + " " + (state.contact.whatsapp || ""),
country: state.contact.country || "Unknown",
consent: state.contact.consent ? "Yes" : "No",
primaryConcern: state.answers.concern,
primaryConcernOther: state.answers.concernOtherText || "",
duration: state.answers.duration,
severity: state.answers.severity,
priorTreatmentsTried: joinIfArray(state.answers.priorTreatmentsTried),
symptomsDescription: state.answers.symptomsDescription,
medicalRecords: state.answers.medicalRecords,
medications: state.answers.medications,
regenerativeHistory: joinIfArray(state.answers.regenerativeHistory),
familiarity: state.answers.familiarity,
budget: state.answers.budget,
investmentReadiness: state.answers.investmentReadiness,
timeline: state.answers.timeline,
travelWillingness: state.answers.travelWillingness,
providerPriorities: joinIfArray(state.answers.providerPriorities),
wantsConsultation: state.answers.wantsConsultation,
referralSource: joinIfArray(state.answers.referralSource),
referralSourceOther: state.answers.referralSourceOtherText || "",
leadScore: lead.score,
leadTemperature: lead.temp,
matchPct: lead.percent,
archName: archE.name,
archBlurb: archE.blurb,
tierLabel: tierE.label,
tierMsg: tierE.message,
waUrl: WHATSAPP_URL,
pageUrl: window.location.href
};
var tasks = [submitToGoogleSheets(payload)];
if (CONFIG.WEBFLOW.enabled) tasks.push(submitToWebflow(payload));
Promise.allSettled ? Promise.allSettled(tasks).then(finish) : Promise.all(tasks.map(function(p){return p.catch(function(){});})).then(finish);
function finish() {
state.step++;
render();
}
}
function submitToGoogleSheets(payload) {
if (!CONFIG.GOOGLE_SHEETS_URL || CONFIG.GOOGLE_SHEETS_URL.indexOf("PASTE_YOUR") === 0) {
console.warn("STEMCIERGE quiz: GOOGLE_SHEETS_URL is not configured yet.");
return Promise.resolve();
}
return fetch(CONFIG.GOOGLE_SHEETS_URL, {
method: "POST",
mode: "no-cors",
headers: { "Content-Type": "text/plain;charset=utf-8" },
body: JSON.stringify(payload)
}).catch(function (err) { console.error("Google Sheets submit failed", err); });
}
function submitToWebflow(payload) {
return new Promise(function (resolve) {
var form = document.querySelector(CONFIG.WEBFLOW.formSelector);
if (!form) { console.warn("STEMCIERGE quiz: Webflow form not found for selector " + CONFIG.WEBFLOW.formSelector); return resolve(); }
Object.keys(payload).forEach(function (key) {
var input = form.querySelector('[name="' + key + '"]');
if (input) input.value = payload[key];
});
var submitBtn = form.querySelector('[type="submit"]');
if (submitBtn) submitBtn.click(); else if (form.requestSubmit) form.requestSubmit(); else form.submit();
setTimeout(resolve, 400);
});
}
function detectCountry() {
fetch("https://ipapi.co/json/").then(function (r) { return r.json(); }).then(function (d) { if (d && d.country_name) state.contact.country = d.country_name; }).catch(function () {});
}
detectCountry();
buildShell();
if (CONFIG.MODE === "inline") render();
if (CONFIG.MODE === "floating") {
document.addEventListener("click", function (e) {
var trigger = e.target.closest("[data-stc-trigger]");
if (trigger) { e.preventDefault(); openModal(); }
});
}
})();
