import InputForm from "./components/InputForm"
import ResultCard from "./components/ResultCard"
import BmiMeter from "./components/BmiMeter"
import "./index.css"
import { useState } from "react";

// bmiResult={bmiResult}
// setBmiResult={setBmiResult}
// bmiCategory={bmiCategory}
// setBmiCategory={setBmiCategory}

function App() {
    // const [varName, setVarName] = useState(initialValue);
    const [name, setName] = useState("")
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")

    const [bmiResult, setBmiResult] = useState(null)
    const [bmiCategory, setBmiCategory] = useState("")

    const [errors, setErrors] = useState({})

    /* { name: Please enter name, height: Please enter valid height} */
    function getBmiCategory(bmi) {
        if (bmi < 18.5) {
            return "Underweight"
        } else if (bmi < 25) {
            return "Normal"
        } else if (bmi < 30) {
            return "Overweight"
        } else {
            return "Obese"
        }
    }

    function calculateBmi() {

        let isValid = validate();

        if(isValid == false){
            return;
        }

        // console.log(typeof(height))
        let h = parseFloat(height) / 100;
        let w = parseFloat(weight);

        let bmi = w / (h * h)
        bmi = bmi.toFixed(2)
        console.log(bmi);
        setBmiResult(bmi)

        let category = getBmiCategory(bmi)
        console.log(category)
        setBmiCategory(category)
    }

    function validate(){
        let errors = {};

        if(!name.trim()){
            console.log("Name is not available")
            errors.name = "Please enter name"
        }

        setErrors(errors)

        return Object.keys(errors).length===0

    }
    return (
        <div className="container">
            <div class="app-header">
                <h1>My BMI Calculator</h1>
                <p>Body Mass Index Health Checker</p>

            </div>
            <InputForm
                // user_name={name} user_set_name={setName}
                // user_height={height}  user_set_height={setHeight}
                // user_weight={weight}/> user_set_weight={setWeight}

                name={name}
                setName={setName}
                height={height}
                setHeight={setHeight}
                weight={weight}
                setWeight={setWeight}
                onCalculate={calculateBmi}
            />

            {bmiResult !== null && (
                <ResultCard
                    name={name}
                    bmiResult={bmiResult}
                    bmiCategory={bmiCategory}
                />)}

            {bmiResult !== null && (
                <BmiMeter
                    bmiResult={bmiResult}
                    bmiCategory={bmiCategory}
                />
            )}

        </div>
    );
}

export default App;