//Create the model of our database

//Create a new index
//A new index will be created to store our documents 
//Otherwise an error will be thrown
client.indices.create({
    index: 'populate'
}, function (err, resp, status) {
    if (err) {
        console.log(err);
    } else {
        console.log("create", resp);
    }
});

//Adding documents to an index
client.index({
    index: 'populate',
    id: '1',
    type: 'posts',
    body: {
        //json thing here
    }
}, function (err, resp, status) {
    console.log(resp);
});