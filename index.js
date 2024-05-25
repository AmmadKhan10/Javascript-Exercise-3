function Converter() {
    let data = parseFloat(document.getElementById("input1").value);
    let Celsius = (data-32) *5/9;
    document.getElementById("para1").innerHTML=`The Fahrenheit of ${data} is ${Math.round(Celsius)} Celsius`;
}

// <---------------------------------Question no 02(a) ----------------------------> 
    //let startYear ="2020";
    //let endYear = "2050";
    let WorldCupyears = " ";
    for (let i = 2022; i<=2050; i+=4){
        WorldCupyears+= `<li>${i}</li>`;
    }
    document.getElementById("listofWorldCup").innerHTML=`The world cup years will be ${WorldCupyears}`;

    // <---------------------------------Question no 03( Method 01) ----------------------------> 
function Calculate_result() {
    let grade1 = parseFloat(document.getElementById("field1").value);
    let grade2 = parseFloat(document.getElementById("field2").value);
    let absences = parseInt(document.getElementById("field3").value);

      //const
      const totalClasses = 20;
      const minimumPresence = 0.7;
      const minimumAverage = 6.5;

      // Calculations
      let averageGrade = (grade1 + grade2) / 2;
      let presenceRate = (totalClasses - absences) / totalClasses;

      // Determine result
      let result;
      if (presenceRate < minimumPresence && averageGrade < minimumAverage) {
          result = "Failed due to both absences and insufficient grade.";
      } else if (presenceRate < minimumPresence) {
          result = "Failed due to absences.";
      } else if (averageGrade < minimumAverage) {
          result = "Failed due to insufficient grade.";
      } else {
          result = "Approved.";
      }
      document.getElementById('show-result').textContent = result;

}
 // Add event listener to the button
//  document.addEventListener('DOMContentLoaded', (event) => {
//  document.querySelector('button').addEventListener('click', Calculate_result);
//)};

  // <---------------------------------Question no 03(Method 02) ----------------------------> 
// const Calculate_result = () => {
//     const grade1 = parseFloat(document.getElementById('field1').value);
//     const grade2 = parseFloat(document.getElementById('field2').value);
//     const absences = parseInt(document.getElementById('field3').value);

//     const totalClasses = 20;
//     const minimumPresence = 0.7;
//     const minimumAverage = 6.5;

//     const averageGrade = (grade1 + grade2) / 2;
//     const presenceRate = (totalClasses - absences) / totalClasses;

//     const result = presenceRate < minimumPresence && averageGrade < minimumAverage ? "Failed due to both absences and insufficient grade." :
//                    presenceRate < minimumPresence ? "Failed due to absences." :
//                    averageGrade < minimumAverage ? "Failed due to insufficient grade." : 
//                    "Approved.";

//     document.getElementById('show-result').textContent = result;
// }

// <---------------------------------Question no 04() ----------------------------> 
document.addEventListener('DOMContentLoaded', () => {
    const sales = [
        { student: 'Jason Gomes', date: '10/06/2018', amount: 34.99, refundRequested: null },
        { student: 'Carlos Blue', date: '10/06/2018', amount: 29.99, refundRequested: null },
        { student: 'Martin Heyes', date: '11/06/2018', amount: 39.99, refundRequested: '13/06/2018' },
        { student: 'Isabella Hopkins', date: '11/06/2018', amount: 29.99, refundRequested: null },
        { student: 'Andrew Walt', date: '12/06/2018', amount: 34.99, refundRequested: null }
    ];

    const table = document.getElementById('sales-table');
    let totalAmount = 0;

    for (const sale of sales) {
        if (!sale.refundRequested) {
            const row = table.insertRow();
            row.insertCell(0).textContent = sale.student;
            row.insertCell(1).textContent = sale.date;
            row.insertCell(2).textContent = sale.amount.toFixed(2);
            totalAmount += sale.amount;
        }
    }

    const totalRow = table.insertRow();
    totalRow.insertCell(0).textContent = 'Total sold';
    totalRow.insertCell(1).textContent = '';
    totalRow.insertCell(2).textContent = totalAmount.toFixed(2);
});

   