import face_recognition
import cv2

video_capture = cv2.VideoCapture(0)

Manish_image = face_recognition.load_image_file("/Users/msml/Vamsi/Face/images/Manish.jpeg")
Manish_face_encoding = face_recognition.face_encodings(Manish_image)[0]
Maddy_image = face_recognition.load_image_file("/Users/msml/Vamsi/Face/images/Maddy.jpeg")
Maddy_face_encoding = face_recognition.face_encodings(Maddy_image)[0]
Niteesh_image = face_recognition.load_image_file("/Users/msml/Vamsi/Face/images/Niteesh.jpeg")
Niteesh_face_encoding = face_recognition.face_encodings(Niteesh_image)[0]
Rahul_image = face_recognition.load_image_file("/Users/msml/Vamsi/Face/images/Rahul.jpeg")
Rahul_face_encoding = face_recognition.face_encodings(Rahul_image)[0]
Vamsi_image = face_recognition.load_image_file("/Users/msml/Vamsi/Face/images/Vamsi.jpeg")
Vamsi_face_encoding = face_recognition.face_encodings(Vamsi_image)[0]
Admin_image = face_recognition.load_image_file("/Users/msml/Vamsi/Face/images/Ashwin.jpeg")
Admin_face_encoding = face_recognition.face_encodings(Admin_image)[0]


known_face_encodings = [
    Manish_face_encoding,
    Maddy_face_encoding,
    Niteesh_face_encoding,
    Rahul_face_encoding,
    Vamsi_face_encoding,
    Ashwin_face_encoding,

]

known_face_names = [
    " Niteesh",
    " Vamsi",
    "Ashwin",

]

face_locations = []
face_encodings = []
face_names = []
all_time_faces_names = []
Unknown_array = []
process_this_frame = True

while True:
    ret, frame = video_capture.read()

    small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)

    rgb_small_frame = small_frame[:, :, ::-1]

    if process_this_frame:
        face_locations = face_recognition.face_locations(rgb_small_frame,number_of_times_to_upsample=2)
        face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)

        face_names = []
        for face_encoding in face_encodings:
            matches = face_recognition.compare_faces(known_face_encodings, face_encoding)
            name = "Unknown"


            if True in matches:
                first_match_index = matches.index(True)
                name = known_face_names[first_match_index]

            face_names.append(name)

            if name == "Unknown":
                Unknown_array.append(name)

            else:
                if name not in all_time_faces_names:
                    all_time_faces_names.append(name)

    process_this_frame = not process_this_frame


    #
    for (top, right, bottom, left), name in zip(face_locations, face_names):

        top *= 4
        right *= 4
        bottom *= 4
        left *= 4


        cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)


        cv2.rectangle(frame, (left, bottom - 35), (right, bottom), (0, 0, 255), cv2.FILLED)
        font = cv2.FONT_HERSHEY_DUPLEX
        cv2.putText(frame, name, (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)


    cv2.imshow('Video', frame)


    if cv2.waitKey(1) & 0xFF == ord('q'):
        break


video_capture.release()
cv2.destroyAllWindows()
