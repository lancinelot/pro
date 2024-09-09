import cv2
import cvlib as cv
from cvlib.object_detection import draw_bbox
from gtts import gTTS
from playsound import playsound
from food_facts import food_facts
import os

# Function to convert text to speech and play the sound
def speech(text):
    print(text)
    language = "en"
    output = gTTS(text=text, lang=language, slow=False)
    
    # Ensure the sounds directory exists
    if not os.path.exists("./sounds"):
        os.makedirs("./sounds")

    output.save("./sounds/output.mp3")
    playsound("./sounds/output.mp3")

# Capture video from the camera
video = cv2.VideoCapture(1)  # Change to 0 if necessary
labels = []

while True:
    ret, frame = video.read()
    if not ret:
        print("Failed to capture frame")
        break
    
    # Detect objects
    bbox, label, conf = cv.detect_common_objects(frame)
    output_image = draw_bbox(frame, bbox, label, conf)

    cv2.imshow("Detection", output_image)

    for item in label:
        if item not in labels:
            labels.append(item)

    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

# Formulate the detected items into a sentence
i = 0
new_sentence = []
for label in labels:
    if i == 0:
        new_sentence.append(f"I found a {label}, and, ")
    else:
        new_sentence.append(f"a {label},")
    i += 1

speech(" ".join(new_sentence))
speech("Here are the food facts I found for these items:")

# Provide food facts for each detected item
for label in labels:
    try:
        print(f"\n\t{label.title()}")
        food_facts(label)
    except Exception as e:
        print(f"No food facts for this item. Error: {e}")

# Release the video capture object and close windows
video.release()
cv2.destroyAllWindows()
