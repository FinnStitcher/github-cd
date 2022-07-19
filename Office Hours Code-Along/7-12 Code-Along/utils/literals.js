function layout(results) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${results.name}</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <div>
            <h1>My current knowledge</h1>
            <p>${results.skills}</p>
        </div>

        <div>
            <h1>Where to contact me</h1>
            <a href="https://github.com/${results.github}">${results.github}</a>
            </br>
            <a href="${results.email}">${results.email}</a>
        </div>
    </body>
    </html>`
}

function csslayout(results) {
    return `body {
        background: ${results.pagecolor}
    }
    
    `
}

module.exports = { layout, csslayout };