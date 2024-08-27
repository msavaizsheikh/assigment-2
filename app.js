function cal() {
    let phy = document.getElementById("phy").value;
    let chem = document.getElementById("chem").value;
    let math = document.getElementById("math").value;
    let bio = document.getElementById("bio").value;

    let sum = parseFloat(phy) + parseFloat(chem) + parseFloat(math) + parseFloat(bio);

    document.getElementById("demo").innerHTML = `Total mark is = ${sum}`;    
    let percentage = (sum / 400) * 100;

    document.getElementById("demo1").innerHTML = `Percentage is = ${percentage}%`;

    if (percentage >= 90) {
        document.getElementById("demo2").innerHTML = 'Excellent';
    } else if (percentage >= 80) {
        document.getElementById("demo2").innerHTML = 'Very good work';
    } else if (percentage >= 60) {
        document.getElementById("demo2").innerHTML = 'Pass';
    }
}