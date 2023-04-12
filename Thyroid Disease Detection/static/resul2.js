document.addEventListener('DOMContentLoaded', function() { 
    const myArray = [
        {
            "result":0,
            
            "alert":"Dont Worry, following to these prescribed remedies can potentially alleviate your aliment ",

            "med1":"✦ Anti-Thyroid Medication: Methimazole and Propylthiouracil (block the production of thyroid hormones by interfering with the thyroid gland's ability to use iodine)",

            "med2":"✦ Beta-blockers: Propranolol and Atenolol (to relieve symptoms such as rapid heartbeat, tremors, and nervousness.) They don't treat the underlying condition, but they can provide symptom relief.",
            "med3":"✦ When there is a shortage of medical professionals, we provide a suggestion for the most likely course of treatment. However, it is strongly advised that individuals consult with a doctor regarding any medication.",
            "exercise": " Biking Walking- water aerobics- deep water running- swimming lapStep aerobic- One legged dead lift squats - Pushups",
            "diet1":" ✡	Fruits: Berries, apples, peaches, pears, grapes, citrus fruits, pineapple, bananas, etc.",
            "diet2":" ✡	Starchy vegetables: Sweet potatoes, potatoes, peas, butternut squash, etc.",
            "diet3":" ✡	Beverages: Water, unsweetened tea, coffee, sparkling water, etc"
        
        },

        {
            "result":1,
            "alert":"Dont Worry, following to these prescribed remedies can potentially alleviate your aliment ",
            "med2":" ✦ Consistency in medication intake is crucial for its effectiveness, so it's important to take the medication at the same time every day without missing any doses.",
            "med3":"✦ Regular blood tests are necessary to monitor thyroid hormone levels.",
            "med1":" ✦ Hormone Replacement Therapy requires taking synthetic thyroid hormone medication like levothyroxine.",

            
            "exercise":"Walking,Strength training, Bike riding or indoor cycling, Elliptical training, Stair climbing, Yoga, Tai Chi,Hiking on easy terrain, Dancing, Swimming,Jumping rope, Jogging or running, Jumping jacks, High-intensity interval training, Hill climbing",

            "diet1":" ✡	Low-iodine foods: non-iodized salt, decaffeinated coffee or tea (without milk or dairyor soy-based creamers), egg whites, fresh or canned fruit, unsalted nuts, and nutbutters homemade bread or bread made without salt, dairy, and egg popcorn with non-iodized salt, oats, potatoes, honey, maple syrup.Cruciferous",
            "diet2":" ✡	vegetables: bamboo shoots, bok choy, broccoli, Brussels sprouts, cassava,cauliflower, collard greens, Kale, Mustard, rutabaga",
            "diet3":"",
        },

        {
            "alert":"We are happy to inform you that , You are absolutely Normal"
        }

]


const resultVal = document.getElementById("resultNo").getAttribute("result");
console.log(resultVal);

if (resultVal==2) {
    document.getElementById('resultComp').style.visibility = 'hidden';
    
    document.getElementById('end-card').style.visibility = 'visible';

    document.getElementById('negativePara').style.visibility = 'visible';

    const alertItem = document.getElementById('alertTxt');
    alertItem.textContent = myArray[2].alert;

}
else {

    for (let i = 0; i < myArray.length; i++) {
        if (i == resultVal ) {
            const med1Item = document.getElementById('med1');
            med1Item.textContent = myArray[i].med1;

            const med2Item = document.getElementById('med2');
            med2Item.textContent = myArray[i].med2;

            const med3Item = document.getElementById('med3');
            med3Item.textContent = myArray[i].med3;
    
            const diet1Item = document.getElementById('diet1');
            diet1Item.textContent = myArray[i].diet1;

            const diet2Item = document.getElementById('diet2');
            diet2Item.textContent = myArray[i].diet2;

            const diet3Item = document.getElementById('diet3');
            diet3Item.textContent = myArray[i].diet3;

    
            const exItem = document.getElementById('ex');
            exItem.textContent = myArray[i].exercise;

            const alertItem = document.getElementById('alertTxt');
            alertItem.textContent = myArray[i].alert;
    
        }
    }

}





}
)
