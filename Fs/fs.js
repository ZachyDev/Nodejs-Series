const fs = require('fs');

// fs.readFile('./docs/hello.txt', (err,data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data.toString());
//     }
// })

fs.readFile('./docs/hello.txt', (err,data) => {
    if (err) {
        console.log(err);
    }
    else {
        // console.log(data.toString())
    }
})

fs.writeFile('./docs/hello.txt', 'This is a test from ZachyDev', () => {
    // console.log('File  has been written');
})

//handling directories

if (!fs.existsSync('./payment')) {
    
    fs.mkdir('./payment', err => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Folder has been created');
        }
    })
}
else {
    fs.rmdir('./payment', err => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Folder has been deleted');
        }
    })
}
// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', err => {
        if (err) {
            console.log(err)
        }
        else {
            // console.log('file deleted')
        }
    })
}