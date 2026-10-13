
(function(){
  function openSiteQuiz(){
    if(typeof window.openStemciergeQuiz === 'function'){ window.openStemciergeQuiz(); return; }
    var trigger=document.querySelector('[data-stemcierge-site-quiz-trigger]');
    if(trigger){ trigger.click(); return; }
    window.dispatchEvent(new CustomEvent('stemcierge:open-quiz',{detail:{sourcePage:'knee-osteoarthritis'}}));
  }
  document.addEventListener('click',function(e){
    var btn=e.target.closest('[data-stemcierge-quiz]');
    if(!btn) return;
    e.preventDefault();openSiteQuiz();
  });
})();
