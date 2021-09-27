self.addEventListener('install', function(event){
    console.log('SW Installed...')
   event.waitUntil(
    caches.open('static')
    .then((cache)=>{
        cache.addAll([
            '/',
            '/index.html',
            '/src/App.js',
            '/src/index.js',
            '/src/components/Forms/form.jsx'
        ])
    })
   )
})


self.addEventListener('activate', function(event){
    console.log('SW Activated..')
});

self.addEventListener('fetch', function(){
    caches.fetch()
})