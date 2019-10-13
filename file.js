let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
    ];
    
    let i = 0;
    users.filter(function() {
        i++;
    console.log(i);
    });
    
    i = 0;
    users.reduce(function() {
        i++;
    console.log(i);
    return i;
    }, []);