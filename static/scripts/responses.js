function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello" || input== "hi") {
        return "Hello there!";
    } else if (input == "goodbye" || input == "good bye" || input== "Goodbye") {
        return "Talk to you later!";
    } else if (input == "Can you suggest me a diet plan" || input == "can you suggest me a diet plan"){
        return "Yes sir! I will . Can you tell me your calorie count";
    }
        else if(input == "2000" || input == "2100" ||input == "2200" || input == "2300" || input == "2500" || input == "2700"){
        return "Take a glass of lukewarm water with a few drops of lemon juice. Have a bowl of oatmeal or whole-grain cereals with low calorie and high-fibre fruits like apples, or take two boiled or poached eggs with toast. A fruit and a handful of nuts like almonds and walnuts. You can take two whole wheat/multigrain rotis or a cup of brown rice with 100 gms dal or chicken/fish along with a cup of mixed vegetable salad. Try to include a cup of curd."
    }
    else if(input== "Benefits of diet plan?"|| input=="benefits of diet plan")
       return "1.Boosts Immunity 2. Builds Muscle 3. Strengthens Bones 4.Increases Life Expectancy 5.Improves Overall Health";

    else if(input== "For weight loss" || input =="for weight loss"){
       return "";
    }
    else if(input == "diet plan bataye"){
            return "Ji sir bilkul"
        }
    else {
        return "Try asking something else!";
    }
}