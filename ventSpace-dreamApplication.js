
                    // Welcome to my Dream Application and Final Project for Unit 0 !  --- Jeffrey Reed (jefe-git)

//If you are reading this then I'm sure you have an idea of what the task at hand of the assignment was , the tasks will be  numbered and have summary below 

//My dream application has some meaning behind it as I and millions of other teens and adults facing mental health challenges and seeking help.

//This is an area in life that I wished that many people where more open to talking about and the idea of this application is to make it accessible to youth teens as well as elderly people who can't find the resources or simply just may be affriad of talkign tos someone

//My cousin won a Shark Tank style competion based on creating ideas that are innovative and helpful intodays world so I thought it would be a great & meanignful contuniation if I displayed what I've learned to generate functions for it 


                // Dream Application - VentSpace: an interactice mental health tracker geared toward teens and young adults !

// Below will be a list of tasks along with the skill used and what is the purpose of that skill that I have learned inside of VentSpace, here we go !


// Skill 1 : Values Data Types, and Operations 

    // Purpose in VentSpace - tracking login streaks after entering a journal submission

    // Psuedocode - Check and see if user  submitted and if they did increase their streak by 1 day

    let journalSubmitted = true; //boolean (Data Types)
    let daysSubmitted = 5; //Number (DataTypes)

    if (journalSubmitted) {
    if (journalSubmitted) {
        daysSubmitted += 1; // if Operation to increase their streak after journaling
            console.log("You have vented to us for " + daysSubmitted + " days in a row, we appreciate you sharing how you feel and VentSpace is here for you!"); // logging output
        }
    }
    
        // Output Message - You have vented to us for 6 days in a row, we appreciate you sharing how you feel and we are here for you! Giving users a notification and empathy


// Skill 2 : Stringing Characters together 

    // Purpose in VentSpace - giving our users daily affirmations when opening app

    // Psuedocode - generate a message that includes the username and the daily affrimation together to make it feel personalized 

    let userName = "Jefe"; //String (Data Type/Stringing Char)
    let affirmation = "There are ups and there are downs but when you are down .. the only way you can go is up!"; //String (Data Type/Stringing Char) //Greatest Lyric Ever
    let dailyMessageForUser = `Hey ${userName}, remember: ${affirmation}`; //template literal 

    console.log(dailyMessageForUser);  // output

    // Output Message - Hey Jefe, remember: There are ups and there are downs but when you are down .. the only way you can go is up!


// Skill 3 : Control Structures & Logic 

    // Purpose in VentSpace - giving our users relevent daily affirmations when opening app 

    // Psuedocode - Based on what our user selects as a feeling, suggest an activity or hotline recommendation if urgent 

    let mood = "I don't want to be here"; // String

    if (mood === "I don't want to be here") {
        console.log("Try talking with a family member or trusted adult or call/text crisis line at 988."); //this is a great example of how a boolean can save a life, Imagine if the user was able to get help directly from their phone by jus knowing the crisis number in the midst of crisis !
    } else if (mood === "sad") {
        console.log("Consider writing in your journal and listening to some relaxing music."); //output if user selcted "sad"
    } else {
        console.log("Glad you’re feeling good — keep up the good vibes!"); //output if neither one of the two negative moods were selected giving user a encouraging message to keep up what they are doing.
    }
    
    // Output Message - "Try talking with a family member or trusted adult or call/text crisis line at 988." , potentially saving lives


// Skill 4 : Working with Loops 

    // Purpose in VentSpace - Give our user an overview of their week and if their is a postive increase we encourage to keep going and if on a decline then recommending help via control structures not listed below (imagine that if you were having a hard week it gave you suggestions to pull out of the slump)

    // Psuedocode - Go through the users' mood entries for the week and give an overview of the week's emotional record

    let journalEntries = ["Happy", "Tired", "Stressed", "Motivated", "Sad"]; // array (Complex Data Type)

    for (let i = 0; i < journalEntries.length; i++) {          // the equation controlling the loop
    console.log("Day " + (i + 1) + ": " + journalEntries[i]);  // a for loop used to iterate through an array and display each mood entry.
    }

    // Output Message - The Day following the emtoion in chronological order (Day 1: Happy, Day 2: Tired, so on)


// Skill 5 : Building Arrays 

    // Purpose in VentSpace - Building something virtually to store our users' entires (moods in this example) for future use and data extraction for well-being check-ins
    
    // Psuedocode - Create an array built to store the data that users input in the days prior 

     let moodLog = ["Happy", "Calm", "Sad", "Anxious"]; //array(Data Type and Building Arrays)

     console.log(moodLog); //output to the console

     // Output Message - (4) ['Happy', 'Calm', 'Sad', 'Anxious']

// Skill 6 : Using Arrary  

    // Purpose in VentSpace - Help our algorthim track wether a person is doing well mentally and give them resources/suggestions based on their journal entries and data analysis that is applied (imaginary)
    
    // Psuedocode - Create an array built to store the data that users input in days prior

    let moodTracker = ["Happy", "Sad", "Anxious", "Motivated"]; //array that moods are stored in
    let negativeMoods = ["Sad", "Anxious"]; //variable that is comprimise of a smaller array that the filter tool will extract as we classified them as negative moods in a collection

    let filteredMoods = moodTracker.filter(function(mood) { //this is the method that starts a new array as it loops through the orginal array and prints a new array with the moods we defined as negative
        return negativeMoods.includes(mood); //this is the filter function running a test and if it runs a test on the original array and the word identifies with our filter array "negativeMoods" then it will print out a new array with the filtered mood we wanted
    });

    console.log("Do you need support or just some excersies to lighten your mental? You have had some negative moods this week:", filteredMoods); //output //stringing characters is also used in this example and can be used to give encouragement to my users

    // Output Message: Do you need support or just some excersies to lighten your mental? You have had Negative moods this week: (2) ['Sad', 'Anxious']

// These are some basic skills that I learned throughout Unit 0 and that I feel like i have a relatively good understanding of !

    //This is the end of The VentSpace : Dream Application, it was fun learning how a computer processes information and carries out tasks, look foward to learning more
