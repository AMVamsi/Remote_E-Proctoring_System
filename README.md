# Remote_E-Proctoring_System

The project employs various machine learning models to reduce the burden on the admin to detect malpractice by the candidates on a large scale. By combining the continuous estimation components, and applying a temporal sliding window, we design higher-level features to classify whether the test taker is cheating at any moment during the exam.

## Tech Stack

    Backend - Python, Tensor Flow Framework, OpenCV, Dlib, Speech_recognition, PyAudio, NLTK, Firebase/AWS
    Frontend - React, HTML/CSS, JavaScript

The system includes five basic components that continuously estimate the key behaviour cues: user verification with face recognition, audio processing, gaze detection, number of person detection and object/phone detection.

## Modules
    
    1. Gaze recognition module -	Aim to track the eyeballs of the test-taker and  report if he is looking 
    to the left, right, or up which he might do to have a  glance at a notebook or signal to someone. 
    This can be done using Dlib’s  facial keypoint detector and OpenCV for further image processing.

    2. Mouth positioning module - Dlib’s facial keypoints are again used for this  task and the test-taker is 
    required to sit straight and the distance between  the lips keypoints is noted for 100 frames and averaged. 
    If the user opens his/her mouth the distances between the points increases and if the increase in  distance 
    is more than a certain value for at least three outer pairs and two  inner pairs then infringement is reported.

    3. Person Count and Mobile detection - The pre-trained weights of  YOLOv3 trained on the COCO dataset 
    to detect people and mobile phones  in the webcam feed.

    4. Face recognition- OpenCV face_recognition model in python is used to implement the  module.The module
    OpenCV (Open source computer vision) is a library of programming  functions mainly aimed at real-time computer vision.

    5. Audio recognition-	The idea is to record audio from the microphone and convert it to  text using 
    Google’s speech recognition API. The API needs a continuous voice from the  microphone which is not plausible 
    so the audio is recorded in chunks such there is no  compulsory space requirement in using this method.






