import pyautogui
import time
import math

def linear_mouse_movement(start_x, start_y, end_x, end_y, duration):
    steps = 100  # Nombre d'étapes pour le mouvement
    step_time = duration / steps  # Temps entre chaque étape
    dx = (end_x - start_x) / steps
    dy = (end_y - start_y) / steps

    for i in range(steps):
        x = start_x + dx * i
        y = start_y + dy * i
        pyautogui.moveTo(x, y)
        time.sleep(step_time)

def suspicious_mouse_behavior():
    screen_width, screen_height = pyautogui.size()
    
    # Déplacements linéaires entre coins de l'écran
    positions = [
        (100, 100),
        (screen_width - 100, 100),
        (screen_width - 100, screen_height - 100),
        (100, screen_height - 100)
    ]

    for i in range(len(positions)):
        start_x, start_y = positions[i]
        end_x, end_y = positions[(i + 1) % len(positions)]
        linear_mouse_movement(start_x, start_y, end_x, end_y, duration=2)  # Mouvement sur 2 secondes
        
        # Clique à la fin de chaque déplacement
        pyautogui.click()
        time.sleep(.002)  # Pause avant le prochain mouvement

def consistent_clicks():
    x, y = 400, 400  # Position fixe pour les clics
    for _ in range(100):  # 10 clics réguliers
        pyautogui.click(x, y)
        time.sleep(0.002)  # Intervalle de 200ms entre chaque clic

# Lancer les comportements suspects
print("sus moves working...")
suspicious_mouse_behavior()
print("sus cliking...")
consistent_clicks()
print("terminated.")
