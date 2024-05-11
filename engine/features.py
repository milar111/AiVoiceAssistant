from engine.config import ASSISTANT_NAME
from engine.command import speak
from playsound import playsound
import eel
import os
import pywhatkit as kit
import re


@eel.expose
def playAssistantSound():
    music_dir = "C:\\Users\\dyord\\OneDrive\\Desktop\\python_projects\\AI_jarvis\\www\\assets\\audio\\start_sound.mp3"
    playsound(music_dir)

def openCommand(query):
    query = query.replace(ASSISTANT_NAME, "")
    query = query.replace("open", "")
    query.lower()
 
    if query != "":
        speak("Opening" + query)
        os.system('start' + query)
    else:
        speak("not found")

def PlayYoutube(query):
    search_term = extract_yt_term(query)
    speak(f"Playing {search_term} on YouTube")
    kit.playonyt(search_term)

def extract_yt_term(command):
    pattern = r'play\s+(.*?)\s+on\s+youtube'
    match = re.search(pattern, command, re.IGNORECASE)
    return match.group(1) if match else None



    