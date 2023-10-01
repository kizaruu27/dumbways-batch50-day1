function SubmitData()
{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let selection = document.getElementById("selection").value;
    let messege = document.getElementById("messege").value;

    if (name === "")
    {
        return alert("Name must be filled")
    }
    else if (email === "")
    {
        return alert("Email must be filled")
    }
    else if (number === "")
    {
        return alert("Number must be filled")
    }
    else if (selection === "")
    {
        return alert("Subject must be selected")
    }
    else if (messege === "")
    {
        return alert("Messege must be filled")
    }

    let emailReceiver = "dionovan7@gmail.com"
    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${selection}&body=Halo, nama saya ${name}, ${messege}. Tolong kontak saya di nomor ${number} atau email saya di ${email}`
    
    // a.href = `https:mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${selection}&body=${messege}`
    a.click();

    // object
    let messegers = {
        nama: name,
        email: email,
        nomor: number,
        subject: selection,
        pesan: messege
    };

    console.log(messegers)
}