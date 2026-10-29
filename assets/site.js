const language = document.getElementById('language');
if (language) language.addEventListener('change', event => { location.href = event.target.value; });
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => { document.querySelector('.mobile-menu').open = false; });
});
function followLegacyLegalLink() {
  const destination = location.hash.slice(1);
  if (destination !== 'privacy' && destination !== 'terms') return;
  const firstSegment = location.pathname.split('/')[1];
  const prefix = ['en', 'es', 'zh', 'hi', 'ar'].includes(firstSegment) ? '/' + firstSegment + '/' : '/';
  location.replace(prefix + destination + '/');
}
followLegacyLegalLink();
window.addEventListener('hashchange', followLegacyLegalLink);
