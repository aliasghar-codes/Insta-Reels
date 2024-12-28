const prevState = document.body.innerHTML;

function handleButtonClick(){

    document.body.innerHTML = "";

    document.body.innerHTML = `
    <section>
        <h1>HAPPY NEW YEAR</h1>
        <img src="./leaf.png" alt="">
        <p>Happy New Year, May this fresh start bring you closer to your dreams, and may your heart be filled with joy, gratitude, and hope. Here's to an incredible year ahead, packed with adventrue, growth, and cherished moments. Cheers to making unforgettable memories together!</p>
        <h2>Best of Luck!</h2>
    </section>
    `;
}