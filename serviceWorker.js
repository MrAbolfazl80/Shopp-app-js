let deferredPrompt;
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register("serviceWorker.js", {
//       scope: '/' // <--- THIS BIT IS REQUIRED
//   }).then(function(registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//   }, function(err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//   });
// };
// self.addEventListener('activate', event => {
//   console.log('V1 now ready to handle fetches!');
// });
/////////////
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('serviceWorker.js', {
      scope: '.' // <--- THIS BIT IS REQUIRED
  }).then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
  });
}
self.addEventListener('fetch',() => console.log("fetch"));
//////////////////////

// self.addEventListener("install", installEvent => 
// {
//   installEvent.preventDefault();
//     console.log("1111Installed");
//     if('serviceWorker' in navigator) {
//         console.log("2222Installed");
//         navigator.serviceWorker.register('./js/serviceWorker.js');
//       };

// }
// )