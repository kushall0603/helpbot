function getBotResponse(input) {
    //rock paper scissors
    if (input == "hi") {
        return "Hello!! I am your helping bot. How can I help you?";
    } else if (input == "i have a question") {
        return "In which field do you have a query on? <br> games <br> reading comprehension <br> videos <br> drawing <br> quiz";
    } else if (input == "videos") {
        return "I'm here to assist you, please mention in which area are you facing the issue?";
    } else if (input == "i cant play the video") {
        return "Kindly refresh the page and try clicking on the play button in the middle of the screen.";
    } else if (input == "thankyou") {
        return "Your Welcome. I am always here to help you out. Hope this helped you !!";
    } else if (input == "drawing") {
        return "I'm here to assist you, please mention in which area are you facing the issue?";
    } else if (input == "i cant erase the drawing") {
        return "Select the white color circle available at the top of the window and you can erase a drawing";
    } else if (input == "games") {
        return "I'm here to assist you, please mention in which area are you facing the issue?";
    } else if (input == "what games are there to play") {
        return "Many games are available like Snake game, Rock-paper-scissors, Black-box, and many more kindly find them in the games section !!";
    } else if (input == "reading comprehension") {
        return "I'm here to assist you, please mention in which area are you facing the issue?";
    } else if (input == "how to pause") {
        return "Press the green color and red color buttons in left corner";
    } else if (input == "quiz") {
        return "I'm here to assist you, please mention in which area are you facing the issue?";
    } else if (input == "can i see the score") {
        return "Yes, ofcourse you can view the score after you complete the quiz.";
    }

    // Simple responses
    if (input == "hello") {
        return "Hi there welcome to kids zone,I am a help bot and what brings you here today?";
    } else if (input == "goodbye") {
        return "Visit again if you are nedd of any help !!";
    } else {
        return "Try asking something else!";
    }
}