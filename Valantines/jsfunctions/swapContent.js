const messages = [
    "I highly recommend you to participate.",
    "Why would you press it again?",
    "Stop being rude.",
    "I made this for you, you know!",
    "Good luck these messages are on rotation.",
];

let messageIndex = 0;

function whyNo() {
    // Get the modal body element
    const modalBody = document.querySelector('#errorModal .modal-body');
    
    // Update the modal body with the current message
    modalBody.textContent = messages[messageIndex];
    
    // Increment the message index and reset if it exceeds the array length
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Show the modal
    var myModal = new bootstrap.Modal(document.getElementById('errorModal'), {
        keyboard: false
    });
    myModal.show();
}

function handleYesClick(){
    window.location.href = './quizPages/vball.html';
}

//#############################         Volleyball Quiz         #############################

const vBallmsgs = {
    School: [
        "Meeting a cute girl like you in school would have been cool",
        "Maybe at the school library, also cute",
        "Could you imagine us at school? Oh how I would have gotten bullied",
        "But I would not have cared, I love you"
    ],
    Soccer: [
        "I used to play soccer, just not with you there",
        "I can't imagine myself playing soccer anymore",
        "Think of the other sport we enjoy"
    ],
    Bookstore: [
        "Now that would have been something",
        "I would have asked you to help me get books from the top shelf",
        "What would you imagine it would have been like?"
    ]
};

const messageIndices = {
    Volleyball: 0,
    School: 0,
    Soccer: 0,
    Bookstore: 0
};

function showModal(buttonType) {
    const modalBody = document.getElementById('modalBody');
    const currentMessages = vBallmsgs[buttonType];
    const currentIndex = messageIndices[buttonType];

    modalBody.textContent = currentMessages[currentIndex];

    messageIndices[buttonType] = (currentIndex + 1) % currentMessages.length;

    var myModal = new bootstrap.Modal(document.getElementById('errorModal'), {
        keyboard: false
    });
    myModal.show();
}

function handleVolleyball() {
    window.location.href = 'anniversary.html';
}

//#############################         Anniversary Quiz         #############################

const anniversarymsgs = {
    "29.02.2024": [
        "This is a special date!",
        "Leap year anniversary!",
        "How unique is this date?"
    ],
    "06.08.2024": [
        "This is another special date!",
        "Summer anniversary!",
        "How warm is this date?"
    ],
    "15.03.2024": [
        "This is yet another special date!",
        "Spring anniversary!",
        "How fresh is this date?"
    ],
    "02.03.2024": [
        "This is also a special date!",
        "Early spring anniversary!",
        "How early is this date?"
    ]
};

const anniversaryIndices = {
    "29.02.2024": 0,
    "06.08.2024": 0,
    "15.03.2024": 0,
    "02.03.2024": 0
};

function showAnniversaryModal(buttonType) {
    const modalBody = document.getElementById('modalBody');
    const currentMessages = anniversarymsgs[buttonType];
    const currentIndex = anniversaryIndices[buttonType];

    modalBody.textContent = currentMessages[currentIndex];

    anniversaryIndices[buttonType] = (currentIndex + 1) % currentMessages.length;

    var myModal = new bootstrap.Modal(document.getElementById('errorModal'), {
        keyboard: false
    });
    myModal.show();
}

function handleRightDate() {
    window.location.href = 'library.html';
}

//#############################         Library Quiz         #################################

const libraryMsgs = {
    airCondition: [
        "Usefull in summer, but not what I'm thinking"
    ],
    Pictures: [
        "Great for memories, but not what I'm thinking"
    ],
    Sofa: [
        "I'd rather be on the bed then the Sofam if I can't have the other option"
    ]
};

const libraryIndices = {
    airCondition: 0,
    Pictures: 0,
    Sofa: 0
};

function showLibraryModal(buttonType) {
    const modalBody = document.getElementById('modalBody');
    const currentMessages = libraryMsgs[buttonType];
    const currentIndex = libraryIndices[buttonType];

    modalBody.textContent = currentMessages[currentIndex];

    libraryIndices[buttonType] = (currentIndex + 1) % currentMessages.length;

    var myModal = new bootstrap.Modal(document.getElementById('errorModal'), {
        keyboard: false
    });
    myModal.show();
}

function handleLibrary() {
    window.location.href = 'cookies.html';
}

//#############################         Cookie Quiz         #############################


const cookieMsgs = {
    Anna: [
        "I will not let this answer be correct"
    ],
    Chris: [
        "Sadly, no."
    ],
};

const cookieIndices = {
    Anna: 0,
    Chris: 0,
};

function showCookieModal(buttonType) {
    const modalBody = document.getElementById('modalBody');
    const currentMessages = cookieMsgs[buttonType];
    const currentIndex = cookieIndices[buttonType];

    modalBody.textContent = currentMessages[currentIndex];

    cookieIndices[buttonType] = (currentIndex + 1) % currentMessages.length;

    var myModal = new bootstrap.Modal(document.getElementById('errorModal'), {
        keyboard: false
    });
    myModal.show();
}

function handleCookie() {
    window.location.href = 'myValentine.html';
}

//#############################         My Valentine Quiz         #############################

function handleYes() {
    document.querySelector('.comment-container h1').textContent = "I love you too";
    document.querySelector('.question-container h2').textContent = "I'm glad you said yes :)";

    document.querySelector('.img-container img').src = '../figmaAssets/retroCouple.jpeg';

    document.querySelector('.quest-container h1').textContent = "Take a screen shot and send it to me";
  
    document.querySelector('.btn-tl').style.visibility = 'hidden';
    document.querySelector('.btn-tr').style.visibility = 'hidden';
}

function showNoModel() {
    var myModal = new bootstrap.Modal(document.getElementById('NoModal'), {
        keyboard: false
    });
    myModal.show();
}