const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // This will hold the deferred event

// Event handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    console.log('hit')
    console.log('event', event)
    event.preventDefault();
    butInstall.classList.toggle('hidden', false);
});

// Event handler for the install button click
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
      return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle('hidden', true);
});

// Event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA installed');
  window.deferredPrompt = null;
});
