
if('serviceWorker' in Navigator){
    navigator.serviceWorker.register('/public/serviceWorker')
        .then(()=> {console.log('Service Worker registered')})
}