const prettier = require('prettier');

function generateManagerCard() {

}

function generateEngineerCard() {

}

function generateInternCard() {

}

function generateEmployeeCard(employee) {
    switch(employee) {
        case 'Manager':
            generateManagerCard();
            break;
        case 'Engineer':
            generateEngineerCard();
            break;
        case 'Intern':
            generateInternCard();
            break;
        default:
            console.log("An error has occurred");
            break;
    }
}

function generateTeamCards(team) {
    const employeeCards = team.map(generateEmployeeCard);
    return employeeCards.join();
}

function generateHtml(team) {
    return prettier.format(
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile</title>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <header class= "bg-gradient-to-r from-red-500 to-blue-800 flex justify-center max-w-full p-7">
            <section class="team-heading">
                <h1 class="font-serif text-6xl text-white">♔My Team</h1>
            </section>
        </header>
        <main class="flex items-center justify-center">
            <section class="team-area grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 my-8 mx-5">
                ${generateTeamCards(team)}
            </section>
        </main>
    </body>
    
    </html>
    
    `,
    { parser: "html" }
    );
}

module.exports = generateHtml;