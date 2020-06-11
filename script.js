window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';


    //Button Click Event
    document.querySelector('button[data-action="change"]').addEventListener('click', function () {
        alert('test');
    });

    //let places = staticLoadPlaces();
    //renderPlaces(places);
};