module.exports.getDate= getDate;

function getDate() {
    let today= new Date();
    let options= {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    };

    let day= today.toLocaleDateString('en-US',options);
    return day;
}