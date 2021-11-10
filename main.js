Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/12NWEmx8o/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);

        document.getElementById("result_object_name").innerHTML = results[0].label;

        gesture = results[0].label;

        toSpeak = "";

        if (gesture == "smiling") {
            toSpeak = "you have an amazing smile";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#128522;";
        } else if (gesture == "happy") {
            toSpeak = "you look very happy";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#128512;";
        } else if (gesture == "sad") {
            toSpeak = "why are sad";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#128532;";
        } else if (gesture == "crying") {
            toSpeak = "why are you cryig";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#128546;";
        } else if (gesture == "angry") {
            toSpeak = "you look very angry";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#128545;";
        } else if (gesture == "frustrated") {
            toSpeak = "frustrated";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#128548;";
        }
        console.log(results);

        document.getElementById("result_object_name2").innerHTML = results[1].label;

        gesture = results[1].label;

        toSpeak2 = ""

        if (gesture == "smiling") {
            toSpeak2 = "you have an amazing smile";
            document.getElementById("result_object_gesture_icon2").innerHTML = "&#128522;";
        } else if (gesture == "happy") {
            toSpeak2 = "you look very happy";
            document.getElementById("result_object_gesture_icon2").innerHTML = "&#128512;";
        } else if (gesture == "sad") {
            toSpeak2 = "why are sad";
            document.getElementById("result_object_gesture_icon2").innerHTML = "&#128532;";
        } else if (gesture == "crying") {
            toSpeak2 = "why are you cryig";
            document.getElementById("result_object_gesture_icon2").innerHTML = "&#128546;";
        } else if (gesture == "angry") {
            toSpeak2 = "you look very angry";
            document.getElementById("result_object_gesture_icon2").innerHTML = "&#128545;";
        } else if (gesture == "frustrated") {
            toSpeak2 = "frustrated";
            document.getElementById("result_object_gesture_icon2").innerHTML = "&#128548;";
        }
        speak();
    }
}


function speak() {
    var synth = window.speechSynthesis;

    speak_data = toSpeak;
    speak_data2 = toSpeak2;

    var utterThis = new SpeechSynthesisUtterance(speak_data + speak_data2);

    synth.speak(utterThis);



}