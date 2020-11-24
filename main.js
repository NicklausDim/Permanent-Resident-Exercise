let validResPerm
let livingInGermany
let workingTime
let currentlyWorking
let germanLevel
let marriage
let asylumSeeker
let livingCosts

alert('Welcome to the Permanent Residency checker. Together we are going to figure out if you are eligible for the Permanent Residency!');
alert('First of all, lets choose the your current visa status!');
let categories = prompt('For Working Permit please write "1".\nFor Blue Card please write "2".\nFor Marriage please write "3".\nFor Asylum please write "4" .');
    if (categories == 1) {
        validResPerm = prompt('Do you currently have a valid residence permit?');
        if (validResPerm == "yes") {
            livingInGermany = prompt('Do you live in Germany for more than 5 years?');
            if (livingInGermany == "yes") {
                workingTime = prompt (' Are you working for more than 3 years in Germany?');
                if (workingTime == "yes") {
                    currentlyWorking = prompt(' Are you currently working?');
                    if (currentlyWorking == "yes") {
                        germanLevel = prompt('Is your German level at least B1?');
                            if (germanLevel == "yes") {
                                alert('Congratulations, you are eligible for Permanent residency!');
                            } else {alert("I am sorry, you are not eligible for Permanent residency.");}
                    } else {alert("I am sorry, you are not eligible for Permanent residency.");}
                } else {alert("I am sorry, you are not eligible for Permanent residency.");}
            } else {alert("I am sorry, you are not eligible for Permanent residency.");}
        } else {alert("I am sorry, you are not eligible for Permanent residency.");}
    } 

    if (categories == 2) {
        validResPerm = prompt('Do you currently have a valid residence permit?');
        if (validResPerm == "yes") {
            currentlyWorking = prompt ("Are you currently working?")
                if (currentlyWorking == "yes") {
                    livingInGermany = prompt('Do you live in Germany more than 23 months?');
                    if (livingInGermany == "yes") {
                        germanLevel = prompt('Do you have a B1 German certificate?')
                            if (germanLevel == "yes") {
                                alert('Congratulations, you are eligible for Permanent residency!');
                            } else {
                                livingInGermany = prompt ("Do you live in Germany for more than 36 months?")
                                if (livingInGermany == "yes") {
                                    germanLevel = prompt ("Do you have an A2 german certification?")
                                        if (germanLevel == "yes") {
                                            alert("Congratulations, you are eligible for Permanent residency!")
                                        } else { alert ("I am sorry, you are not eligible for Permanent residency.") }
                                } else {
                                    alert ("I am sorry, you are not eligible for Permanent residency.")
                                }
                            }
                    } else  { alert("I am sorry, you are not eligible for Permanent residency.")}
                } else  { alert("I am sorry, you are not eligible for Permanent residency.")}
        } else  { alert("I am sorry, you are not eligible for Permanent residency.")}
    } 



    if  (categories == 3) {
        marriage = prompt('Are you at least 3 years married and currently being married?')
            if (marriage == 'yes') {
                germanLevel = prompt ('Do you have a B1 certification?')
                    if (germanLevel == "yes") {
                        alert("Congratulations, you are eligible for Permanent residency!")
                    } else {alert ("I am sorry, you are not eligible for Permanent residency.")}
            } else {alert ("I am sorry, you are not eligible for Permanent residency.")}
    }




    if (categories == 4) {
        livingCosts = prompt('Are your current living costs covered by at least 70% by a job?')
        if (livingCosts == "yes") {
            germanLevel = prompt('Do you have C1 certification in German?')
                if (germanLevel == "yes") {
                    livingInGermany = prompt ('Do you live in Germany for more than 3 years?')
                        if (livingInGermany == "yes") { alert("Congratulations, you are eligible for Permanent residency!")}
                        else {alert ("I am sorry, you are not eligible for Permanent residency.")}
                } else { germanLevel = prompt('Do you have B1 certification in German?')
                    if (germanLevel == 'yes') {
                        livingInGermany = prompt ('Do you live in Germany for more than 5 years?')
                            if (livingInGermany == "yes") {
                                alert("Congratulations, you are eligible for Permanent residency!")
                            } else {alert ("I am sorry, you are not eligible for Permanent residency.")}
                    } else {alert ("I am sorry, you are not eligible for Permanent residency.")}
                        }
        } else { alert ("I am sorry, you are not eligible for Permanent residency.")}
    }
    
