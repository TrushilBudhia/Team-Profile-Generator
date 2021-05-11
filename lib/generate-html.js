const prettier = require('prettier');

function additionalQuestion(employee, role) {
    switch (role) {
        case 'Manager':
            return prettier.format(
                `<li class="list-group-item my-1">Office number: ${employee.getOfficeNumber()}</li>`,
                { parser: "html" }
            );
        case 'Engineer':
            return prettier.format(
                `<li class="list-group-item my-1">GitHub: <a class="text-blue-600" href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>`,
                { parser: "html" }
            );
        case 'Intern':
            return prettier.format(
                `<li class="list-group-item my-1">School: ${employee.getSchool()}</li>`,
                { parser: "html" }
            );
        default:
            console.error('An error has occurred');
            break;
    }
}

function cardIconSelector(employee) {
    switch (employee) {
        case 'Manager':
            return prettier.format(
                `<div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                <!-- svg  -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            </div>`,
                { parser: "html" }
            );
        case 'Engineer':
            return prettier.format(
                `<div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
                    <!-- svg  -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>`,
                { parser: "html" }
            );
        case 'Intern':
            return prettier.format(
                `<div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                    <!-- svg  -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                </div>`,
                { parser: "html" }
            );
        default:
            console.error('An error has occurred');
            break;
    }
}

function renderEmployeeCard(employee) {
    return prettier.format(
        `<div class="bg-white-100 py-6 flex flex-col justify-center mx-6 my-3 sm:py-6">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-800 shadow-lg transform skew-y-0 -rotate-6 rounded-3xl"></div>
                <div class="relative bg-white py-6 px-6 rounded-3xl w-80 my-4 shadow-xl">
                    ${cardIconSelector(employee.getRole())}

                    <div class="mt-8">
                        <p class="font-semibold my-2 text-2xl">${employee.getName()}</p>
                        <p class="font-semibold my-2 text-xl text-gray-700">${employee.getRole()}</p>

                        <div class="border-t-2"></div>

                        <div class="card-body my-3">
                            <ul class="list-group">
                                <li class="list-group-item my-1">ID: ${employee.getId()}</li>
                                <li class="list-group-item my-1">Email: <a class="text-blue-600" href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                                ${additionalQuestion(employee, employee.getRole())}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
        { parser: "html" }
    );
}

function generateEmployeeCard(employee) {
    switch (employee.getRole()) {
        case 'Manager':
        case 'Engineer':
        case 'Intern':
            return renderEmployeeCard(employee);
        default:
            console.error('An error has occurred');
            break;
    }
}

function generateTeamCards(team) {
    const employeeCards = team.map(generateEmployeeCard);
    return employeeCards.join();
}

function generateHtml(team) {
    return prettier.format(
        `
    <!DOCTYPE html>
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
            <section class="team-area flex flex-wrap justify-center my-10">
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