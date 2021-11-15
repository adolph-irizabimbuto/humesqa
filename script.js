
function sendEmail(params){
    let newdate = new Date($('#castDate').val());
      day = newdate.getDate();
      month = newdate.getMonth() + 1;
      year = newdate.getFullYear();

    let nameIndex = document.getElementById('qsiChampions')
    let emailName = nameIndex.options[nameIndex.selectedIndex].text

    let bedIndex = document.getElementById('bedNumber')
    let bedNumberText = bedIndex.options[bedIndex.selectedIndex].text
    console.log(emailName)
    const emails = {
        "Josh Hayes": "josh.hayes@lafargeholcim.com",
        "Jigar Kerai": "jigar.kerai@lafargeholcim.com",
        "Jon Cross": "john.cross@lafargeholcim.com",
        "Pheobe" : "adolph.irizabimbuto.ext@lafargeholcim.com",
        "Phil Hayes" : "gerrard.hayes@lafargeholcim.com",
        "Michael Dowton" : "michael.dowton@lafargeholcim.com"
    }
    const tempParams= {
        headName: emailName,
        to_Name: emails[emailName],
        bedNumber: bedNumberText,
        castDate: newdate.toLocaleDateString("en-US"),
        patches: document.getElementById('patches').value,
        rejects : document.getElementById('rejects').value,
        message: document.getElementById('message').value

    };

   emailjs.send('service_xbregff', 'template_fi6t94n', tempParams)
    .then(function(res) {
        console.log("succefully sent", res.status)
    });

}
