from playsound import playsound
import eel

@eel.expose
def playAssistantSound():
    music_dir = "C:\\Users\\dyord\\OneDrive\\Desktop\\python_projects\\AI_jarvis\\www\\assets\\audio\\start_sound.mp3"
    playsound(music_dir)
