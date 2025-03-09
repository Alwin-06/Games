from flask import Flask, render_template, request, redirect, url_for
import random

app = Flask(__name__)

# Home route
@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)



    

'''
# Game route to handle user input and compute the result
@app.route('/play', methods=['POST'])
def play():
    # Get user's choice from the form
    user_choice = request.form['choice'].upper()
    # Computer's random choice
    choices = ['R', 'P', 'S']
    comp_choice = random.choice(choices)

    # Determine the result
    if (user_choice == 'R' and comp_choice == 'S') or \
       (user_choice == 'S' and comp_choice == 'P') or \
       (user_choice == 'P' and comp_choice == 'R'):
        result = 'User won'
    elif (user_choice == 'S' and comp_choice == 'R') or \
         (user_choice == 'P' and comp_choice == 'S') or \
         (user_choice == 'R' and comp_choice == 'P'):
        result = 'Computer won'
    else:
        result = 'Match Draw'


    # Map choices to image filenames
    choice_to_image = {
        'R': 'rock.png',
        'P': 'paper.png',
        'S': 'scissors.png'
    }

    # Render the template with the result and choices
    return render_template('index.html', 
                          user_choice=choice_to_image[user_choice],
                          comp_choice=choice_to_image[comp_choice],
                          result=result)

if __name__ == '__main__':
    app.run(debug=True)
'''
'''
import random
Button1= input('Enter (Start): ')
while(Button1=='Start')
    user = input('Enter the input(R/P/S): ').upper()
    comp=random.choice(['R','P','S'])
    print(comp)
    if(user=='R' and comp=='S') or (user=='S' and comp=='P') or (user=='P' and comp=='R'):
        print('User won')
        User_score=User_score+1

    elif(user=='S' and comp=='R') or (user=='P' and comp=='S') or (user=='R' and comp=='P'):
        print('Computer won')
        Computer_score=Computer_sorce+1

    else:
        print('Match Draw')'
        User_score=User_score
        Computer_score=Computer_sorce

    print("User: ",User_score,"Bot: ",Computer_score)
'''
