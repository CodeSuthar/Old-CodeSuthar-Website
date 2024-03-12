const preloader = document.getElementById('preloader');

const debug = false;

if (debug) {
    preloader.style.display = 'none';
} else {
    const sleep = async (ms) => {
        let start = new Date().getTime();
        let end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    };

    function hidePreloader() {
        sleep(3000);
        preloader.style.display = 'none';
    }

    window.addEventListener('load', hidePreloader);
}