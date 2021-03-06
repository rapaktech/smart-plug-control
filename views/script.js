const fanConnect = document.getElementById('fan-connect');

const fanSwitch = document.getElementById('fan-switch');

fanConnect.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Get data
    const fanConnectSubmit = document.getElementById('fan-connect-submit').value;
    const url = `https://immense-ocean-88742.herokuapp.com/fan`;

    // Pass data into object 
    const data = { fanConnectSubmit };

    // Create request object
    const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });

    // Pass request object to 'fetch'
    fetch(request)
        .then((res) => res.json())
        .then((res) => {
            alert(res.message);
        }
    );
});


fanSwitch.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Get data
    const fanSwitchSubmit = document.getElementById('fan-switch-submit').value;
    const url = `https://immense-ocean-88742.herokuapp.com/discover`;

    // Pass data into object 
    const data = { fanSwitchSubmit };

    // Create request object
    const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });

    // Pass request object to 'fetch'
    fetch(request)
        .then((res) => res.json())
        .then((res) => {
            alert(res.message);
        }
    );
});