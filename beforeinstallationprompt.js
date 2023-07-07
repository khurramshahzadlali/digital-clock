let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default installation prompt
  event.preventDefault();

  // Stash the event so it can be triggered later
  deferredPrompt = event;

  // Show your custom installation prompt, e.g., a button or a custom UI element
  showInstallPrompt();
});

function showInstallPrompt() {
  // Show your custom installation prompt, e.g., a button or a custom UI element
  const installButton = document.getElementById('install-button');
  installButton.style.display = 'block';

  installButton.addEventListener('click', () => {
    // Trigger the deferred prompt for installation
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the installation prompt.');
      } else {
        console.log('User dismissed the installation prompt.');
      }

      // Reset the deferred prompt
      deferredPrompt = null;
    });

    // Hide your custom installation prompt
    installButton.style.display = 'none';
  });
}
