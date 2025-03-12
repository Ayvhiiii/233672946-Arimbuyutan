<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Exercise</title>
</head>
<body>
    
<?php
//exercise 1
    echo "Exercise 1: Variables and Operators <br>";
    $a = 15;
    $b = 7;
    echo "The sum is " . $a+$b ."<br>";
    echo "The difference is " . $a-$b ."<br>";
    echo "The product is " . $a*$b . "<br>";
    echo "The quotient is " . $a/$b . "<br>"; 
?>

<br>

<?php
//exercise 2
    echo "Exercise 2: Conditional Statements <br>";
    $num = 25;
    echo "The number is " . $num . "<br>";
    if ($num % 2 == 0){
        echo "The number is Even";
    } elseif ($num % 2 != 0) {
        echo "The number is Odd";
    }
    
    echo " and ";
    
    if ($num > 0) {
        echo "its Positive";
    }

    elseif ($num < 0) {
        echo "its Negative";
    } 
    else {
        echo "the number is Zero";
    }
?>

<?php
//exercise 3
echo "Exercise 3: Loops"
    for ($i = 1; $i <= 100; $i++) {
        echo "<p>Iteration $i</p>";
}

?>

</body>
</html>