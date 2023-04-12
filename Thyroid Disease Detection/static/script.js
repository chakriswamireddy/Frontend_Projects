// import { outputData } from "./outputData";
// console.log(outputData)
//male-Cant Become pregnant

function PregnantCheck()
	{
		if (document.getElementById('FemaleCanPregnant').checked)
			{
				document.getElementById('pregnantportion').style.visibility='visible';
				
			}
		else {document.getElementById('pregnantportion').style.visibility= 'hidden' }
	}



// TSH
function TrueFalseCheckTSH()
	{
		if (document.getElementById('TrueTSHCheck').checked)
			{
				document.getElementById('ifTSHTrue').style.visibility = 'visible';
			}
		else document.getElementById('ifTSHTrue').style.visibility = 'hidden';
	}

//T3
function TrueFalseCheckT3()
	{
		if (document.getElementById('TrueT3Check').checked)
			{
				document.getElementById('ifT3True').style.visibility = 'visible';
			}
		else document.getElementById('ifT3True').style.visibility = 'hidden';
	}

//	TT4

function TrueFalseCheckTT4()
	{
		if (document.getElementById('TrueTT4Check').checked)
			{
				document.getElementById('ifTT4True').style.visibility = 'visible';
			}
		else document.getElementById('ifTT4True').style.visibility = 'hidden';
	}

// T4U

function TrueFalseCheckT4U()
	{
		if (document.getElementById('TrueT4UCheck').checked)
			{
				document.getElementById('ifT4UTrue').style.visibility = 'visible';
				var T4U = document.getElementById('ifT4UTrue')
			}
		else document.getElementById('ifT4UTrue').style.visibility = 'hidden';
	}

// FTI

// function TrueFalseCheckFTI()
// 	{
// 		if (document.getElementById('TrueFTICheck').checked)
// 			{
// 				document.getElementById('ifFTITrue').style.visibility = 'visible';
// 			}
// 		else document.getElementById('ifFTITrue').style.visibility = 'hidden';
// 	}

//result printing:


let outputData = [
    {
        "result":0,
        "medication":"take drugs",
        "exercise": " Biking Walking- aerobic exercises:- water aerobics- deep water running- swimming lapStep aerobic, One-legged dead liftSquats,Push-ups",
        "diet":"Fruits: Berries, apples, peaches, pears, grapes, citrus fruits, pineapple, bananas, etc Starchy vegetables: Sweet potatoes, potatoes, peas, butternut squash, etc.Beverages: Water, unsweetened tea, coffee, sparkling water, etc"
        
    },

    {
        "result":1,
        "medication":"take drugs",
        "exercise":"Walking,Strength training, Bike riding or indoor cycling, Elliptical training, Stair climbing, Yoga, Tai Chi,Hiking on easy terrain, Dancing, Swimming,Jumping rope, Jogging or running, Jumping jacks, High-intensity interval training, Hill climbing",

        "diet":"Low-iodine foods: non-iodized salt, decaffeinated coffee or tea (without milk or dairyor soy-based creamers), egg whites, fresh or canned fruit, unsalted nuts, and nutbutters homemade bread or bread made without salt, dairy, and egg popcorn with non-iodized salt, oats, potatoes, honey, maple syrup.Cruciferous vegetables: bamboo shoots, bok choy, broccoli, Brussels sprouts, cassava,cauliflower, collard greens, Kale, Mustard, rutabaga"   
    }

]

const myArray = outputData;
  
for (let i = 0; i < myArray.length; i++) {
	if (i == 1) {
    	const medItem = document.getElementById('med');
        medItem.textContent = myArray[i].medication;

        const dietItem = document.getElementById('diet');
        dietItem.textContent = myArray[i].diet;

        const exItem = document.getElementById('ex');
        exItem.textContent = myArray[i].exercise;
    }
}