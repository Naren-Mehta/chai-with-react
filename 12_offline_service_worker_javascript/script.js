// check if servic worker is supported by our browser
if(navigator.serviceWorker) {
    // register the service worker

    navigator.serviceWorker.register('./sw.js')
    .then(res =>{
        console.log('Service worker registered successfully');
    })  
    .catch(err => {
        console.log('Error while registering service worker');
    });
}