const yargs = require('yargs');


yargs.command({
    command: 'add',
    describe: 'Add a new book',
    builder: {
        title: { describe: 'note title', demandOption: true, type: 'string' },
        author: { describe: 'note author', demandOption: true, type: 'string' }
    },
    handler: function (argv) {
        console.log('adding a new note!', argv);
        console.log('Title - ', argv.title);
        console.log('Author - ', argv.author);
        //books.addBook(argv.title, argv.body);    
    }
});

yargs.command({
    command: 'remove', describe: 'Remove a note', handler: function () {
        console.log('Removing the book');
    }
})
yargs.command({
    command: 'list', describe: 'List books',
    handler: function () { console.log('Listing out all books'); }
})

//Create read command 
yargs.command({
    command: 'read', describe: 'Read a book', handler: function () {
        console.log('Reading a book');
    }
})

yargs.parse(); 